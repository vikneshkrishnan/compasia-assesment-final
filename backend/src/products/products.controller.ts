import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query} from '@nestjs/common';
import {ProductsService} from './products.service';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {ApiQuery, ApiTags} from "@nestjs/swagger";

@Controller('products')
@ApiTags('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.productsService.findAll(page, pageSize);
    }


    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.productsService.findOne(+id);
    // }


    @Get('filterByElements')
    @ApiQuery({name: 'page', required: false, type: Number, description: 'Page number'})
    @ApiQuery({name: 'pageSize', required: false, type: Number, description: 'Number of items per page'})
    @ApiQuery({name: 'brandId', required: false, type: Number, description: 'Filter by brand ID'})
    @ApiQuery({name: 'categoryId', required: false, type: Number, description: 'Filter by category ID'})
    @ApiQuery({name: 'productName', required: false, type: String, description: 'Filter by product name'})
    @ApiQuery({name: 'productColor', required: false, type: Number, description: 'Filter by color'})
    findByFilter(
        @Query('page', ParseIntPipe) page: number = 1,
        @Query('pageSize', ParseIntPipe) pageSize: number = 10,
        @Query('brandId', ParseIntPipe) brandId?: number,
        @Query('categoryId', ParseIntPipe) categoryId?: number,
        @Query('productName') productName?: string,
        @Query('productColor', ParseIntPipe) productColor?: number
    ) {
        return this.productsService.findByFilter(page, pageSize, brandId, categoryId, productName, productColor);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
