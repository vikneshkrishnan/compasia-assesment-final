import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    productName: string;

    @Column()
    productColor: string;

    @Column()
    orderDate: Date;
}
