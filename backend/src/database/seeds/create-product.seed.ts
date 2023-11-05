import {Seeder} from 'typeorm-seeding';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from '../../products/entities/product.entity';
import {Repository} from 'typeorm';

export default class CreateProductSeed implements Seeder {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {
    }

    public async run(): Promise<any> {
        const products = [
            {
                productName: 'Iphone 12',
                productPrice: 1000,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 1},
            },
            {
                productName: 'Iphone 11',
                productPrice: 900,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 2},
            },
            {
                productName: 'Galaxy S20',
                productPrice: 800,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 3},
            },
            {
                productName: 'Galaxy Note 10',
                productPrice: 750,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 4},
            },
            // Additional 15 entries
            {
                productName: 'Iphone SE',
                productPrice: 450,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 5},
            },
            {
                productName: 'Iphone XR',
                productPrice: 600,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 1},
            },
            {
                productName: 'Galaxy A52',
                productPrice: 400,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 2},
            },
            {
                productName: 'Galaxy Z Flip',
                productPrice: 1200,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 3},
            },
            {
                productName: 'Iphone 13',
                productPrice: 1100,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 4},
            },
            {
                productName: 'Iphone 13 Pro',
                productPrice: 1300,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 5},
            },
            {
                productName: 'Galaxy S21',
                productPrice: 850,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 1},
            },
            {
                productName: 'Galaxy S21 Ultra',
                productPrice: 1300,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 2},
            },
            {
                productName: 'Iphone 13 Mini',
                productPrice: 700,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 3},
            },
            {
                productName: 'Iphone 12 Pro',
                productPrice: 1000,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 4},
            },
            {
                productName: 'Galaxy Note 20',
                productPrice: 950,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 5},
            },
            {
                productName: 'Galaxy S10',
                productPrice: 650,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 1},
            },
            {
                productName: 'Iphone 12 Mini',
                productPrice: 650,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 2},
            },
            {
                productName: 'Iphone 11 Pro',
                productPrice: 950,
                productBrand: {id: 1},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 3},
            },
            {
                productName: 'Galaxy S10e',
                productPrice: 550,
                productBrand: {id: 2},
                productImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg',
                productCategory: {id: 1},
                productColor: {id: 4},
            },
        ];
        return await this.productRepository.insert(products);
    }

    async drop(): Promise<any> {
        return await this.productRepository.delete({});
    }
}
