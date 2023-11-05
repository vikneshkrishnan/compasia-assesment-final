import { Module } from '@nestjs/common';
import { ProductColorService } from './product-color.service';
import { ProductColorController } from './product-color.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductColor} from "./entities/product-color.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductColor])],

  controllers: [ProductColorController],
  providers: [ProductColorService]
})
export class ProductColorModule {}
