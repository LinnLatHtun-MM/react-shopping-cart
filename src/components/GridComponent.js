
"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
function GridComponent() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <Box sx={{ width: '100%' }}>

            {/* auto content shi tha lout pal yu */}
            {/* grow nout ko akone yu */}
            <Grid container>
                <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: pink[500] }}>
                    <Box>1</Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: pink[200] }}>
                    <Box>2</Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: pink[200] }}>
                    <Box>3</Box>
                </Grid>
                <Grid size={{ xs: 8, md: 4 }} sx={{ backgroundColor: pink[400] }}>
                    <Box>2</Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default GridComponent