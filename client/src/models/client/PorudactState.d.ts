import Product from "../Product";

export default interface ProductState {
    loading: boolean;
    valid: boolean;
    data: Product[]; // All loaded articles
}