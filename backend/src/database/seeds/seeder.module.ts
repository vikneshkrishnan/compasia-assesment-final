import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../products/entities/product.entity';
import {SeederService} from "./seeder.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [SeederService],
    exports: [SeederService],
})
export class SeederModule {}
