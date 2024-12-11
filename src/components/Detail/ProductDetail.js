"use client"
import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {Chip, Typography} from '@mui/material';
import CustomCheckBox from '../CustomCheckBox';
import CustomSelectCount from '../CustomSelectCount';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import {lightGreen, grey} from '@mui/material/colors';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function ProductDetail({params,productDetailState}) {

    const {product, status, error} = productDetailState;

    const handleLoveClick = () => {
        alert('Loved!');
    };

    const handleShuffleClick = () => {
        alert('Shuffled!');
    };


    if (status === "loading") {
        return <div>Loading...</div>;
    } else if (status === "failed") {
        return <div>Error {error}</div>;

    }

    if (product)
        return (

            <Box sx={{width: '100%', p: 4}}>

                <Grid container spacing={4}>

                    <Grid size={{xs: 12, md: 4}}>
                        <Box sx={{border: "1px solid lightgray"}}>
                            <Image src={product.thumbnail}
                                   alt={product.title}
                                   width={500}
                                   height={500}
                                   style={{width: "100%", height: "auto", objectFit: "cover"}}
                            />
                        </Box>
                    </Grid>

                    <Grid size={{xs: 12, md: 4}}>
                        <Box>
                            <Chip label="Out of Stock" sx={{textAlign: "left"}}/>
                            <Typography variant="h4" gutterBottom
                                        sx={{color: 'darkgreen', fontWeight: "bold"}}>
                                {product.title}
                            </Typography>
                            <Typography variant="h4" gutterBottom
                                        sx={{color: lightGreen[500], fontWeight: "bold"}}>
                                ${product.price}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{fontWeight: 400}}>
                                Color
                            </Typography>

                            <CustomCheckBox></CustomCheckBox>

                            <CustomSelectCount params={params}></CustomSelectCount>

                            <br></br>

                            {/* Love Icon */}
                            <IconButton onClick={handleLoveClick} sx={{color: 'red'}}>
                                <ShuffleIcon/>
                                <Typography sx={{pl: 1}}>
                                    Compare
                                </Typography>
                            </IconButton>

                            {/* Shuffle Icon */}
                            <IconButton onClick={handleShuffleClick}>
                                <FavoriteIcon/>
                                <Typography sx={{pl: 1}}>
                                    Add to Wish List
                                </Typography>
                            </IconButton>


                            {/* {count === 0 && ( */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 2,
                                padding: 1,
                                border: '1px solid gray',
                                borderRadius: '8px',
                                background: grey[500],
                            }}>
                                <IconButton sx={{color: "white"}}>
                                    <SentimentVeryDissatisfiedIcon/>
                                </IconButton>
                                <Typography style={{fontWeight: 'bold', color: "white"}}>Out of Stock</Typography>
                            </Box>
                            {/* )} */}
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        )
}

export default ProductDetail
