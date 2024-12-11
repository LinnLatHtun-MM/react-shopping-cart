import React from 'react'
import {Box, Chip, Divider, Icon} from "@mui/material";
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import {IconButton} from '@mui/material';
import {lightGreen} from '@mui/material/colors';
import Link from 'next/link';
import {useDispatch} from "react-redux";
import {addToCart} from "@/redux/features/cart/cartSlice";

function CustomCarouselItem({product}) {

    // const formattedTitle = product.title.replace(/ /g, '-');

    const dispatch = useDispatch();
    return (
        <div>
            <Link style={{textDecoration: "none", color: "black"}}
                  href={`/products/${product.id}`}>
                <Box
                    sx={{
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover .icon-bar": {
                            opacity: 1,
                            transform: 'translateY(0)'
                        },
                        "&:hover .divider": {
                            width: '200px',
                            // borderColor: "red",
                            borderStyle: 'solid'
                        },
                    }}
                    // onMouseEnter={() => handleMouseEnter(0)}
                    // onMouseLeave={handleMouseLeave}
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "flex-start"
                    }}>
                        <Chip label="Out of Stock" sx={{textAlign: "left"}}/>
                    </Box>

                    <Box className="icon-box" sx={{
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <Image
                            src={product.thumbnail}
                            width={250}
                            height={250}
                            alt="Picture of the author"
                            style={{objectFit: "cover", margin: "0 auto"}}
                        />

                        <Box sx={{
                            position: "absolute",
                            bottom: 0,
                            width: '100%',
                            opacity: 0,
                            transition: '0.5s',
                            transform: 'translateY(100%)',
                            // background: 'red'
                        }} className='icon-bar'>
                            <IconButton aria-label="delete">
                                <Icon>favorite</Icon>
                            </IconButton>
                            <IconButton aria-label="delete" disabled color="primary">
                                <Icon>shuffle</Icon>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <Icon>visibility</Icon>
                            </IconButton>
                        </Box>
                    </Box>

                    <Typography variant="h6" gutterBottom sx={{fontWeight: 400, ":hover": {color: lightGreen[900]}}}>
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{
                        color: lightGreen[700], fontWeight: 700
                    }}>
                        {product.price}
                    </Typography>
                    {/* <Box>  margin 0 auto => to the middle*/}
                    <Divider sx={{width: '50px', margin: '0 auto'}} className='divider'></Divider>
                    {/* </Box> */}


                </Box>
            </Link>

            <div>
                <Typography onClick={() => dispatch(addToCart(product))} variant="h6" gutterBottom
                            sx={{fontWeight: 700}}>
                    Add to Cart
                </Typography>

            </div>
        </div>
    )
}

export default CustomCarouselItem
