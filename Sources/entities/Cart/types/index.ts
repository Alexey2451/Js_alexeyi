export interface CurrentCartProduct {
    id: number;
    title: string;
    price: number;
    discont_price: number;
    image: string;
    count?: number;
}

export interface Cart {
    total: number;
    products: CurrentCartProduct[];
}
