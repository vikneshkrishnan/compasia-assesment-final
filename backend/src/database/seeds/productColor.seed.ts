import { Seeder } from 'typeorm-seeding';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity';
import {ProductColor} from "../../product-color/entities/product-color.entity";

export default class CreateProductColorSeed implements Seeder {
    constructor(
        @InjectRepository(ProductColor)
        private brandRepository: Repository<ProductColor>,
    ) {}

    public async run(): Promise<any> {
        const brands = [
            { id: 1, color: 'RED' },
            { id: 2, color: 'BLACK' },
            { id: 3, color: 'BLUE' },
            { id: 4, color: 'GREEN' },
            { id: 5, color: 'PURPLE' },
        ];
        return await this.brandRepository.save(brands);
    }
}
