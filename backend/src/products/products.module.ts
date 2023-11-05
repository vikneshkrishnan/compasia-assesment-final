import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {SeederService} from "../database/seeds/seeder.service";
import {Brand} from "../brand/entities/brand.entity";
import {Category} from "../category/entities/category.entity";
import {ProductColor} from "../product-color/entities/product-color.entity";


@Module({
  imports: [
      TypeOrmModule.forFeature([Product,Brand, Category, ProductColor]),

  ],
  controllers: [ProductsController],
  providers: [ProductsService, SeederService]
})
export class ProductsModule {}
