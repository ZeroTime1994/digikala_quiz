import { Product } from "@/store/product";

export const storeCartInStorage = (
  cart: { product: Product; quantity: number }[]
) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const restoreCartInfoFromStorage = () => {
  const cartFromLocalStorage = localStorage.getItem("cart");
  if (cartFromLocalStorage) {
    return JSON.parse(cartFromLocalStorage) as {
      product: Product;
      quantity: number;
    }[];
  } else {
    return [];
  }
};
