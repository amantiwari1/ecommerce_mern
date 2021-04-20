import {UnifiedModel} from "./UnifiedModel";
export default interface User extends UnifiedModel {
  email?: string;
  password?: string;
  name?: string;
  cart: Array;
  isAdmin: boolean;
  orders?: Array;
}
