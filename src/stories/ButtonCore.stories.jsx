import "../tokens.css";
import { Button } from "../components/Button";
export default { title:"Core/Button", component: Button, args:{ label:"加入購物車" } };
export const Primary  = { args:{ variant:"primary", size:"md", state:"default" } };
export const Disabled = { args:{ state:"disabled" } };
export const Loading  = { args:{ state:"loading" } };
export const Large    = { args:{ size:"lg" } };
export const Small    = { args:{ size:"sm" } };
