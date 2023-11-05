import {Injectable} from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {EntityManager, Repository} from "typeorm";
import {Product} from "./entities/product.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private entityManager: EntityManager
    ) {
    }

    async create(data: CreateProductDto) {
        const product = new Product({
            ...data,

        });
        await this.entityManager.save(product);
    }


    async findAll(page: number = 1, pageSize: number = 10) {
        const skip = (page - 1) * pageSize;
        console.log(`Page: ${page}, PageSize: ${pageSize}, Skip: ${skip}`);

        const [products, total] = await this.productRepository.findAndCount({
            relations: ['productBrand', 'productCategory', 'productColor'],
            skip: skip,
            take: pageSize,
        });

        console.log(`Total products: ${total}, Products on page ${page}:`);

        return {
            data: Array.isArray(products) ? products : [],
            total: total,
            page: page,
            lastPage: Math.ceil(total / pageSize),
        };
    }


    async findByFilter(
        page: number = 1,
        pageSize: number = 10,
        brandId?: number,
        categoryId?: number,
        productName?: string,
        productColor?: number
    ) {
        const skip = (page - 1) * pageSize;

        // Build the where condition dynamically
        const whereCondition = {};
        if (brandId) whereCondition['productBrand'] = { id: brandId };
        if (categoryId) whereCondition['productCategory'] = { id: categoryId };
        if (productName) whereCondition['productName'] = productName;
        if (productColor) whereCondition['productColor'] = productColor;

        console.log(page,pageSize,categoryId,productName,productColor,"show brandId,categoryId,productName,productColor")

        const [products, total] = await this.productRepository.findAndCount({
            relations: ['productBrand', 'productCategory', 'productColor'], // Removed 'productName'
            skip: skip,
            take: pageSize,
            where: whereCondition
        });
        console.log(products,"show products");
        return {
            data: Array.isArray(products) ? products : [],
            total: total,
            page: page,
            lastPage: Math.ceil(total / pageSize),
        };
    }



    // async findOne(id: number) {
    //     return await this.productRepository.findOne({
    //         where: {id: id},
    //         relations: ['productBrand', 'productCategory', 'productName', 'productColor'],
    //     });
    // }

    async update(id: number, updateProductDto: UpdateProductDto) {
        return await this.productRepository.update(id, updateProductDto);
    }

    async remove(id: number) {
        return await this.productRepository.delete(id);
    }
}
