import { Injectable } from '@nestjs/common';
import { CreateProductColorDto } from './dto/create-product-color.dto';
import { UpdateProductColorDto } from './dto/update-product-color.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ProductColor} from "./entities/product-color.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProductColorService {

  constructor(
      @InjectRepository(ProductColor)
        private productColorRepository: Repository<ProductColor>,
  ) {}
  async create(createProductColorDto: CreateProductColorDto) {
    return await this.productColorRepository.save(createProductColorDto);
  }

  async findAll() {
    return await this.productColorRepository.find();
  }

  async findOne(id: number) {
    return await this.productColorRepository.findOne({
        where: {
            id: id
        }
    });
  }

  async update(id: number, updateProductColorDto: UpdateProductColorDto) {
    return await this.productColorRepository.update(id, updateProductColorDto);
  }

  async remove(id: number) {
    return await this.productColorRepository.delete(id);
  }
}
