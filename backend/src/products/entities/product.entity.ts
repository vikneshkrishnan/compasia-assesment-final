import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Brand} from "../../brand/entities/brand.entity";
import {Category} from "../../category/entities/category.entity";
import {ProductColor} from "../../product-color/entities/product-color.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    productPrice: number;

    @Column()
    productImage: string;

    @JoinColumn()
    @ManyToOne(() => Brand, brand => brand.name)
    productBrand: Brand;

    @JoinColumn()
    @ManyToOne(() => Category, category => category.name)
    productCategory: Category;

    @JoinColumn()
    @ManyToOne(() => ProductColor, productColor => productColor.color)
    productColor: ProductColor;



    constructor(product: Partial<Product>) {
        Object.assign(this, product);
    }
}
