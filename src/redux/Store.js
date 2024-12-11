import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./features/products/ProductSlice";
import productDetailReducer from "./features/products/ProductDetailSlice";
import cartSliceReducer from "@/redux/features/cart/cartSlice";

export const store = configureStore(
    {
        //store slice
        reducer: {
            products: productsReducer,
            productDetail: productDetailReducer,
            cart: cartSliceReducer
        }
    }
)