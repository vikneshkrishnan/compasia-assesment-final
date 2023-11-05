import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../../products/entities/product.entity";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Product, product => product.productBrand)
    products: Product[];


    constructor(brand: Partial<Brand>) {
        Object.assign(this, brand);
    }
}
