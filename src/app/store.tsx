
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../features/product/product.slice";
import categoryReducer from "../features/category/category.slice";
import userReducer from "../features/user/user.slice";
import authReducer from "../features/auth/auth.slice";
export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        user: userReducer,
        auth: authReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;