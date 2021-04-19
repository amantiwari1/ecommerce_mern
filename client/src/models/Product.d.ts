import {UnifiedModel} from "./UnifiedModel";
export default interface Product extends UnifiedModel {
  title: string;
  description: string;
  price: any;
  featureImage: string;
  ImageArray: any;
  category: string;
  titleslug: string;
}
