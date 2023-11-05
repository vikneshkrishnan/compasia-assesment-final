import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProductSeed from './create-product.seed';
import { Product } from '../../products/entities/product.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { Category } from '../../category/entities/category.entity';
import CreateBrandSeed from './brand.seed';
import CreateCategorySeed from './category.seed';
import {ProductColor} from "../../product-color/entities/product-color.entity";
import CreateProductColorSeed from "./productColor.seed";

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(ProductColor)
    private readonly productColorRepository: Repository<ProductColor>,

  ) {}

  async seed() {

    // Check if data is already existed
    const products = await this.productRepository.find();
    if (products.length > 0) {
        console.log('Data is already existed');
        return;
    }




    // Seed Brands
    const brandSeeder = new CreateBrandSeed(this.brandRepository);
    await brandSeeder.run();

    // Seed Categories
    const categorySeeder = new CreateCategorySeed(this.categoryRepository);
    await categorySeeder.run();

    // Seed ProductColor
    const productColorSeeder = new CreateProductColorSeed(this.productColorRepository);
    await productColorSeeder.run();

    //Seed Products
    const productSeeder = new CreateProductSeed(this.productRepository);
    await productSeeder.run();
  }
}
