import { Product } from "@/store/product";

export const storeCartInStorage = (
  cart: { product: Product; quantity: number }[]
): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const restoreCartInfoFromStorage = (): {
  product: Product;
  quantity: number;
}[] => {
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
