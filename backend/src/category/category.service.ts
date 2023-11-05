import {Injectable} from '@nestjs/common';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {EntityManager, Repository} from "typeorm";
import {Category} from "./entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>,
    ) {
    }

    async create(createCategoryDto: CreateCategoryDto) {
        const category = new Category(createCategoryDto);
        return await this.repository.save(category);

    }

    async findAll() {
        return await this.repository.find();
    }

    async findOne(id: number) {
        return await this.repository.findOne({
            where: {
                id: id
            }
        });
    }

   async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return await this.repository.update(id, updateCategoryDto);
    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }
}
