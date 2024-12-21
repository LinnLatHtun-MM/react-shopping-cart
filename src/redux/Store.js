import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "@/redux/features/Products/ProductSlice";
import productDetailReducer from "@/redux/features/Products/ProductDetailSlice";
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