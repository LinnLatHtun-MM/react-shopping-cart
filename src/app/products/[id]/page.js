"use client"
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import ProductDetail from '@/components/Detail/ProductDetail';
import {Box} from '@mui/material'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetail} from "@/redux/features/Products/ProductDetailSlice";

function page({params}) {
    console.log("CustomBreadcrumbs " + params.detail);

    const productDetailState = useSelector(state => {
        return state.productDetail;
    })
    const {product, status, error} = productDetailState;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetail(params.id))
    }, []);

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (status === "failed") {
        return <div>Failed...</div>;
    }
    if (product)
        return (
            <Box>
                <CustomBreadcrumbs params={product.title}></CustomBreadcrumbs>
                <ProductDetail params={params} productDetailState={productDetailState}></ProductDetail>
            </Box>
        )
}

export default page
