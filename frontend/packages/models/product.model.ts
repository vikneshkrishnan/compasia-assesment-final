export interface Brand {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}


export interface ProductColor {
    id: number;
    color: string;
}


export interface Order {
    id: number;
    productId: number;
    productName: string;
    productColor: string;
    orderDate: Date;
}

// Product.ts
export interface Product {
    id: number;
    productName: string;
    productPrice: number;
    productImage: string;
    productBrand: Brand;
    productCategory: Category;
    productColor: ProductColor;
}

