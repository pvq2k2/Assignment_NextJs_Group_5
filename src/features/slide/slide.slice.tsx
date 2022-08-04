import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlide, getAllSlide, readSlide, removeSlide, updateSlide } from "../../../api/slide";
import { ISlide } from "../../models/slide";

interface ISlideState {
    slides: ISlide[];
    slide: ISlide | {};
  };
  
  const initialState: ISlideState = {
    slides: [],
    slide: {},
  };

export const getAllS = createAsyncThunk("slide/getall", async () => {
  const res = await getAllSlide();
  return res;
});

export const readS = createAsyncThunk(
  "slide/read",
  async (id: string | number) => {
    const res = await readSlide(id);
    return res;
  }
);

export const createS = createAsyncThunk(
  "slide/create",
  async (slide: ISlide) => {
    const res = await createSlide(slide);
    return res;
  }
);

export const updateS = createAsyncThunk(
  "slide/update",
  async (slide: ISlide) => {
    const res = await updateSlide(slide);
    return res;
  }
);

export const removeS = createAsyncThunk(
  "slide/remove",
  async (id: string | number) => {
    const res = await removeSlide(id);
  }
);

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllS.fulfilled,(state,{payload})=>{
      state.slides=payload||[]
      }),
      build.addCase(removeS.fulfilled,(state,{payload})=>{
          state.slides= state.slides.filter((item) => item._id !== payload?._id)
      }),
      build.addCase(createS.fulfilled,(state,{payload})=>{
          state.slides.push(payload as ISlide)
      }),
      build.addCase(readS.fulfilled,(state,{payload})=>{
          state.slide= payload as ISlide;
      }),
      build.addCase(updateS.fulfilled,(state,{payload})=>{
          state.slides=state.slides=state.slides.map((item)=>(item._id === payload?._id ? payload :item)) as ISlide[]
       })
    
  },
});
export default slideSlice.reducer;
