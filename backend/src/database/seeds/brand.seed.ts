import { Seeder } from 'typeorm-seeding';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity';

export default class CreateBrandSeed implements Seeder {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  public async run(): Promise<any> {
    const brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Oppo' },
      { id: 5, name: 'Vivo' },
    ];
    return await this.brandRepository.save(brands);
  }
}
