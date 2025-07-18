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
    itemQuantity: number
}

export interface CartItem {
    name: string,
    quantity: number,
    price: number
}