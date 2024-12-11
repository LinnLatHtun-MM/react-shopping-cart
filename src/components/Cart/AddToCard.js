'use client';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomTableTotal from '../CustomTableTotal';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import ProductList from '@/components/ProductList';

function AddToCard() {
    const [total, setTotal] = useState(0);  // State to store the total sum of cart items

    const products = useSelector((state) => state.cart.items);

    const handleTotalChange = (newTotal) => {
        setTotal(newTotal);  // Update the total whenever it changes
    };

    // If no items in the cart, show a "No product here" message
    if (!products || products.length === 0) {
        return (
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '300px',
                }}
            >
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
                    No product here
                </Typography>
            </Box>
        );
    }

    // Pass the `total` state to CustomTableTotal for display
    return (
        <Box sx={{ width: '100%', p: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {/* Pass `handleTotalChange` and `cartItems` to ProductList */}
                    <ProductList onTotalChange={handleTotalChange} products={products} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {/* Pass the `total` state to CustomTableTotal */}
                    <CustomTableTotal total={total} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddToCard;

