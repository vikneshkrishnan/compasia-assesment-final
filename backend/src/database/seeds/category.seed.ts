import { Seeder } from 'typeorm-seeding';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

export default class CreateCategorySeed implements Seeder {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async run(): Promise<any> {
    const categories = [
      { id: 1, name: 'Mobile' },
      { id: 2, name: 'Laptop' },
      { id: 3, name: 'Tablet' },
    ];
    return await this.categoryRepository.save(categories);
  }
}
