import "../tokens.css";
import { Navbar } from "../components/Navbar";
export default { title:"Core/Navbar", component: Navbar, args:{ cartCount:0 } };
export const Empty     = { args:{ cartCount:0 } };
export const WithItems = { args:{ cartCount:3 } };
