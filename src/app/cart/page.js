"use client"
import AddToCard from '@/components/Cart/AddToCard';
import CustomBreadcrumbsAddToCart from '@/components/CustomBreadcrumbsAddToCart';
import {Box} from '@mui/material'
import React from 'react'

function page({params}) {

    return (
        <Box>
            <CustomBreadcrumbsAddToCart params={params.detail}></CustomBreadcrumbsAddToCart>
            <AddToCard params={params}></AddToCard>
        </Box>
    )
}

export default page
