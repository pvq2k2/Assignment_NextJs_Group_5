import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCart, getAllCart, readCart, removeCart, updateCart } from "../../../api/cart";


interface ICartState {
    cart: {},
    carts: any[]
}

const initialState: ICartState = {
    cart: {},
    carts:[] as any
}

export const getCarts  = createAsyncThunk("cart/getall", async () => {
    const res = await getAllCart()
    return res;
})
export const getOneCart  = createAsyncThunk("cart/read", async (id:any) => {
    const res = await readCart(id)
    return res;
})
export const addCart  = createAsyncThunk("cart/create", async (cart:any) => {
    const res = await createCart(cart)
    return res;
})
// export const updateCartv  = createAsyncThunk("cart/update", async (cart:any) => {
//     const res = await updateCart(cart)
//     return res;
// })

export const deleteCart  = createAsyncThunk("cart/remove", async (id:any) => {
    const res = await removeCart(id)
    return res;
})



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCarts.fulfilled,(state,{payload}) => {
            state.carts = payload as any
        }),
        builder.addCase(getOneCart.fulfilled,(state,{payload}) => {
            state.carts.push(payload as any) 
        }),
        builder.addCase(deleteCart.fulfilled,(state,{payload}) => {
           state.carts.filter((item) => item._id !== payload.id)  
        }),
        // builder.addCase(updateCartv.fulfilled,(state,{payload}) => {
            //state.carts=state.carts=state.carts.map((item:any)=>(item._id === payload.id ? payload :item!)) as []
        // }),
        builder.addCase(getCarts.fulfilled,(state,{payload}) => {
            state.carts = payload as any
        })
    }

})
export default cartSlice.reducer 