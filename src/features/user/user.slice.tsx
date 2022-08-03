import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUser, readUser, removeUser, updateUser } from "../../../api/user";
import { IUser } from "../../models/user";

interface IUserState {
    users: IUser[];
    user: IUser | {};
  };
  
  const initialState: IUserState = {
    users: [],
    user: {},
  };

export const getAllU = createAsyncThunk("user/getall", async () => {
  const res = await getAllUser();
  return res;
});

export const readU = createAsyncThunk(
  "user/read",
  async (id: number | string) => {
    const res = await readUser(id);
    return res;
  }
);

export const createU = createAsyncThunk(
  "user/create",
  async (user: IUser) => {
    const res = await createUser(user);
    return res;
  }
);

export const updateU = createAsyncThunk(
  "user/update",
  async (user: IUser) => {
    const res = await updateUser(user);
    return res;
  }
);

export const removeU = createAsyncThunk(
  "user/remove",
  async (id: number | string) => {
    const res = await removeUser(id);
  }
);

const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllU.fulfilled,(state,{payload})=>{
      state.users=payload||[]
      }),
      build.addCase(removeU.fulfilled,(state,{payload})=>{
          state.users= state.users.filter((item) => item._id !== payload?._id)
      }),
      build.addCase(createU.fulfilled,(state,{payload})=>{
          state.users.push(payload as IUser)
      }),
      build.addCase(readU.fulfilled,(state,{payload})=>{
          state.user= payload as IUser;
      }),
      build.addCase(updateU.fulfilled,(state,{payload})=>{
          state.users=state.users=state.users.map((item)=>(item._id === payload?._id ? payload :item)) as IUser[]
       })
    
  },
});
export default productSlice.reducer;
