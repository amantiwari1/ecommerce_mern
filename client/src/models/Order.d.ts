import {UnifiedModel} from "./UnifiedModel";
export default interface Order extends UnifiedModel {
  cart: Array<{
    title: string,
    price: number,
    total: number,
    quantity: number,
  }>;
  total: any;
  user: any;
}
