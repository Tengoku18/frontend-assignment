import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface shopState {
  products: Array<object>;
  searchProduct: Array<object>;
}

const initialState: shopState = {
  products: [],
  searchProduct: [],
};

export const shopSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string>) => {
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
    setProducts: (state, action: PayloadAction<Array<object>>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, searchProduct } = shopSlice.actions;

export default shopSlice.reducer;
