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
  async (id: any) => {
    const res = await readProduct(id);
    return res;
  }
);

export const createP = createAsyncThunk(
  "product/create",
  async (product: any) => {
    const res = await createProduct(product);
    return res;
  }
);

export const updateP = createAsyncThunk(
  "product/update",
  async (product: any) => {
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
      build.addCase(removeP.fulfilled,(state, action: any)=>{
          state.products= state.products.filter((item) => item._id !== action.payload._id)
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
