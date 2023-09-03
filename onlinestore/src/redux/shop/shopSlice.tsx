import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const AddToast = () => toast("Item added to cart successfully!");
const DeleteToast = () => toast("Item removed from cart successfully!");

export interface shopState {
  cart: Array<ProductDetail>;
  products: Array<ProductDetail>;
  searchProduct: Array<ProductDetail>;
}

const initialState: shopState = {
  cart: [],
  products: [],
  searchProduct: [],
};

export const shopSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    searchProducts: (state, action: PayloadAction<string>) => {
      const allProducts = state.products;
      console.log(action.payload);
      const filtered = allProducts.filter((item) => {
        if (item.title.toLowerCase().includes(action.payload)) {
          return item;
        }
      });
      console.log("filtered happen", filtered);
      state.searchProduct = filtered;
    },
    setProducts: (state, action: PayloadAction<Array<ProductDetail>>) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const tempProduct = state.products.find(({ id }) => id === productId);
      if (tempProduct) {
        state.cart.push(tempProduct);
        AddToast();
        console.log("initial cart", state.cart, productId, tempProduct);
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const ProductId = action.payload;
      const newCart = state.cart.filter((item) => item.id !== ProductId);
      state.cart = newCart;
      DeleteToast();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, searchProducts, addToCart, deleteItem } =
  shopSlice.actions;

export default shopSlice.reducer;
