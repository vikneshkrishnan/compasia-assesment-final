import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Brand} from "../../brand/entities/brand.entity";
import {Category} from "../../category/entities/category.entity";
import {ProductColor} from "../../product-color/entities/product-color.entity";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productName: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    productPrice: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productBrand: Brand;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productCategory: Category;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productColor: ProductColor;
}
