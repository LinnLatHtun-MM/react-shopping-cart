//creat
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "Loading";
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "Succeed";
                state.items = action.payload;
            })
    }
})


export default productSlice.reducer;