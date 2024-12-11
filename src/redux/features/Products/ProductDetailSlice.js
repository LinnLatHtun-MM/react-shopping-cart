import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProductDetail = createAsyncThunk("products/fetchProductDetail", async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    console.log(response)
    const data = await response.json();
    console.log(data);
    return data;
})

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: {
        product: null,
        status: "idle"  /*for api waiting */,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetail.pending, (state, action) => {
            state.status = "Loading";
            state.error = null;
        })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.status = "Succeeded";
                state.product = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.status = "Failed";
                state.error = action.error.message;
            })
    }
})
export default productDetailSlice.reducer;