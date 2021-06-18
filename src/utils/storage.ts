import { Product } from "@/store/product";

export const storeCartInStorage = (
  cart: { product: Product; quantity: number }[]
) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
