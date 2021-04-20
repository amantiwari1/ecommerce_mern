import {UnifiedModel} from "./UnifiedModel";
export default interface Order extends UnifiedModel {
  card: Array<{}>;
  total: any;
  user: any;
}
