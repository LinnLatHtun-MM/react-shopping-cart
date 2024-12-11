import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            //if the increment item is exising in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1}); // Adds new item to the cart
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }

            //if the existing item in the cart, pls left the all items except the remove item.
            else if (existingItem) {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        }
    }
})

export const {addToCart, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;