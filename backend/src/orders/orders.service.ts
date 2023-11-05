import {Injectable} from '@nestjs/common';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {Order} from "./entities/order.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) {
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderRepository.save(createOrderDto);
    }


    async findAll(page: number = 1, pageSize: number = 5) {
        const skip = (page - 1) * pageSize;
        console.log(`Backend: Fetching page: ${page} with pageSize: ${pageSize}, skip: ${skip}`);

        const [orders, total] = await this.orderRepository.findAndCount({
            skip: skip,
            take: pageSize,
        });

        // Additional logging to check the fetched data
        console.log(`Fetched orders:`, orders);
        console.log(`Total orders: ${total}`);
        console.log(`Calculated lastPage: ${Math.ceil(total / pageSize)}`);

        // Check if the 'skip' and 'take' parameters are working as expected
        if (orders.length !== pageSize && page * pageSize < total) {
            console.error(`Expected ${pageSize} orders, but got ${orders.length}. There might be an issue with pagination.`);
        }

        return {
            data: Array.isArray(orders) ? orders : [],
            total: total,
            page: page,
            lastPage: Math.ceil(total / pageSize),
        };
    }


    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
