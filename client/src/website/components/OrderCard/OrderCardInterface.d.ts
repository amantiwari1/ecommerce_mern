export interface OrderCardInterface {
    cart: Array<{
        title: string,
        price: number,
        total: number,
        quantity: number,
      }>
    total: number;
    _id: string;
}

export interface OrderNameInterface {
    title: string;
    quantity: number;
    price: number;
    total: number;
}
