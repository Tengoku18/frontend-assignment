import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
        console.log("initial cart", state.cart, productId, tempProduct);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, searchProducts, addToCart } = shopSlice.actions;

export default shopSlice.reducer;
