import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../../products/entities/product.entity";

@Entity()
export class ProductColor {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;


    @OneToMany(() => Product, product => product.productCategory)
    products: Product[];


    constructor(productColor: Partial<ProductColor>) {
        Object.assign(this, productColor);
    }
}
