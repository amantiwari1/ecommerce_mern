import { UnifiedModel } from "./UnifiedModel";
export default interface Product extends UnifiedModel {
    title: string;
    description: string;
    price: string;
    featureImage: string;
    ImageArray: string[];
    category: string;
    titleslug: string;
}