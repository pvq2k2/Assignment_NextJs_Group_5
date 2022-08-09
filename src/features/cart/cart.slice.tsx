import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCart, getAllCart, readCart, removeCart, updateCart } from "../../../api/cart";


interface ICartState {
    cartItems: any[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const initialState: ICartState = {
    cartItems:[] as any,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const indexSizeProduct = state.cartItems.findIndex(item => item._id === payload._id && item.size === payload.size);
            // const findSizeProduct = state.cartItems.find(item => item._id === payload._id && item.size === payload.size);
            // console.log("findSizeProduct ", findSizeProduct);
            
            // if (findSizeProduct && indexSizeProduct >= 0) {
            //     console.log(state.cartItems);
            //     state.cartItems[indexSizeProduct].quantity! += 1;
            // }else {
            //     state.cartItems.push(payload);
            //     console.log("cart in slice ", state.cartItems);
                
            // }
            
            if (indexSizeProduct == -1) {
                state.cartItems.push(payload);
            }else{
                state.cartItems[indexSizeProduct].quantity! += 1;
            }
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer 