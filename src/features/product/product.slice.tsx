import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  getAllProduct,
  readProduct,
  updateProduct,
  removeProduct,
} from "../../../api/product";
import { IProduct } from "../../models/product";

interface IProductState {
    products: IProduct[];
    product: IProduct | {};
  };
  
  const initialState: IProductState = {
    products: [],
    product: {},
  };

export const getAllP = createAsyncThunk("product/getall", async () => {
  const res = await getAllProduct();
  return res;
});

export const readP = createAsyncThunk(
  "product/read",
  async (id: number | string) => {
    const res = await readProduct(id);
    return res;
  }
);

export const createP = createAsyncThunk(
  "product/create",
  async (product: IProduct) => {
    const res = await createProduct(product);
    return res;
  }
);

export const updateP = createAsyncThunk(
  "product/update",
  async (product: IProduct) => {
    const res = await updateProduct(product);
    return res;
  }
);

export const removeP = createAsyncThunk(
  "product/remove",
  async (id: number | string) => {
    const res = await removeProduct(id);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllP.fulfilled,(state,{payload})=>{
      state.products=payload||[]
      }),
      build.addCase(removeP.fulfilled,(state,{payload})=>{
          state.products= state.products.filter((item) => item._id !== payload?._id)
      }),
      build.addCase(createP.fulfilled,(state,{payload})=>{
          state.products.push(payload as IProduct)
      }),
      build.addCase(readP.fulfilled,(state,{payload})=>{
          state.product= payload as IProduct;
      }),
      build.addCase(updateP.fulfilled,(state,{payload})=>{
          state.products=state.products=state.products.map((item)=>(item._id === payload?._id ? payload :item)) as IProduct[]
       })
    
  },
});
export default productSlice.reducer;
