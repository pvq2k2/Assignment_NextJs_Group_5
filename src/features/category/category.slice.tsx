import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCategory, getAllCategory, readCategory, removeCategory, updateCategory } from "../../../api/category";
import { ICategory } from "../../models/category";

interface ICategoryState {
    categories: ICategory[];
    category: ICategory | {};
  };
  
  const initialState: ICategoryState = {
    categories: [],
    category: {},
  };

export const getAllC = createAsyncThunk("category/getall", async () => {
  const res = await getAllCategory();
  return res;
});

export const readC = createAsyncThunk(
  "category/read",
  async (slug: string) => {
    const res = await readCategory(slug);
    return res;
  }
);

export const createC = createAsyncThunk(
  "category/create",
  async (category: ICategory) => {
    const res = await createCategory(category);
    return res;
  }
);

export const updateC = createAsyncThunk(
  "category/update",
  async (category: ICategory) => {
    const res = await updateCategory(category);
    return res;
  }
);

export const removeC = createAsyncThunk(
  "category/remove",
  async (slug: string) => {
    const res = await removeCategory(slug);
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllC.fulfilled,(state,{payload})=>{
      state.categories=payload||[]
      }),
      build.addCase(removeC.fulfilled,(state,{payload})=>{
          state.categories= state.categories.filter((item) => item.slug !== payload?.slug)
      }),
      build.addCase(createC.fulfilled,(state,{payload})=>{
          state.categories.push(payload as ICategory)
      }),
      build.addCase(readC.fulfilled,(state,{payload})=>{
          state.category= payload as ICategory;
      }),
      build.addCase(updateC.fulfilled,(state,{payload})=>{
          state.categories=state.categories=state.categories.map((item)=>(item.slug === payload?.slug ? payload :item)) as ICategory[]
       })
    
  },
});
export default categorySlice.reducer;
