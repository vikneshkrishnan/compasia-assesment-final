import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {UpdateOrderDto} from './dto/update-order.dto';
import {Order} from "./entities/order.entity";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {
    }

    @Post()
    create(@Body() createOrderDto: Order) {
        return this.ordersService.create(createOrderDto);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 5
    ) {
        return this.ordersService.findAll(page, pageSize);
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove(+id);
    }
}
