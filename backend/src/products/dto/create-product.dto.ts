import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Brand} from "../../brand/entities/brand.entity";
import {Category} from "../../category/entities/category.entity";
import {ProductColor} from "../../product-color/entities/product-color.entity";
export class CreateProductDto {

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
    productImage: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productCategory: Category;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    productColor: ProductColor;

}
