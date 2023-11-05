import {Injectable} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {UpdateBrandDto} from './dto/update-brand.dto';
import {Brand} from "./entities/brand.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private repository: Repository<Brand>
    ) {
    }

    async create(createBrandDto: CreateBrandDto) {
        const brand = new Brand(createBrandDto);
        return await this.repository.save(brand);
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

    async update(id: number, updateBrandDto: UpdateBrandDto) {
        return await this.repository.update(id, updateBrandDto);

    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }
}
