import "../tokens.css";
import { ProductCard } from "../components/ProductCard";
export default { title:"Core/ProductCard", component: ProductCard,
  args:{ title:"商品名", price:"$990", image:"", hasBadge:false } };
export const Default   = {};
export const WithBadge = { args:{ hasBadge:true } };
