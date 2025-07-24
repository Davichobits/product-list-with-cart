export interface Product {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export type CartItem = Omit<Product, 'category'> & {
    quantity: number;
}