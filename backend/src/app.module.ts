import {Module} from '@nestjs/common';
import {DatabaseModule} from './database/database.module';
import {ConfigModule} from "@nestjs/config";
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import {SeederService} from "./database/seeds/seeder.service";
import { ProductColorModule } from './product-color/product-color.module';
import { OrdersModule } from './orders/orders.module';


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        DatabaseModule,
        ProductsModule,
        CategoryModule,
        BrandModule,
        ProductColorModule,
        OrdersModule,

    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
