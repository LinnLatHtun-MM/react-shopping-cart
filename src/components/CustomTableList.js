import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Button, TextField} from '@mui/material';
import {lightGreen, green} from '@mui/material/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseQuantity} from "@/redux/features/cart/cartSlice";

const TAX_RATE = 0;

// function ccyFormat(num) {
//     if (num)
//         return `${num.toFixed(2)}`;
// }

// function calculatePrice(qty, price) {
//     return qty * price;
// }

// function createRow(id, desc, qty, unit, imageUrl) {
//     const price = calculatePrice(qty, unit);
//     return {id, desc, qty, unit, price, imageUrl};
// }

function subtotal(items) {
    return items.reduce((sum, {price}) => sum + price, 0);
}

export default function CustomTableList({onTotalChange}) {

    const products = useSelector(state => state.cart.items);

    const dispatch = useDispatch();

    const handleIncrease = (id) => {
        dispatch(addToCart(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id))
    }

    // const [cartItems, setCartItems] = useState(
    //     products.map((product) =>
    //         createRow(product.id, product.title, product.quantity, product.price, product.images)
    //     )
    // );

    const maxCount = 100;
    const minCount = 0;

    // const handleCountChange = (event, id) => {
    //
    //     console.log("new add ", id);
    //     const newQuantity = Number(event.target.value);
    //     console.log("new newQuantity ", newQuantity);
    //
    //     setCartItems((prevItems) =>
    //         prevItems.map((item) =>
    //             item.id === id ? {...item, quantity: newQuantity, price: calculatePrice(newQuantity, item.price)} : item
    //         )
    //     );
    // };


    // const invoiceSubtotal = subtotal(cartItems);
    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    //
    // React.useEffect(() => {
    //     onTotalChange(invoiceTotal);
    // }, [invoiceTotal, onTotalChange]);

    return (
        <Box>
            <Box sx={{width: '100%', p: 2}}>
                <Grid container spacing={2}>
                    {products && products.length > 0 && products.map((item) => (
                        <React.Fragment key={item.id}>
                            <Grid item xs={4} md={2}>
                                <Box>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        style={{width: "100%", height: "auto", objectFit: "cover"}}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={8} md={10}>
                                <TableContainer component={Paper} sx={{boxShadow: 'none', border: 'none'}}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{color: green[900], fontWeight: 700}} align="left"
                                                           colSpan={2}>
                                                    {item.title}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{color: green[800]}}>Price</TableCell>
                                                <TableCell sx={{
                                                    color: green[900],
                                                    fontWeight: 700
                                                }}>${item.price}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{color: green[900]}}>Quantity</TableCell>
                                                {/*<TableCell sx={{color: green[900], fontWeight: 700}}>*/}
                                                {/*    <TextField*/}
                                                {/*        type="number"*/}
                                                {/*        value={item.quantity}*/}
                                                {/*        onChange={(e) => handleCountChange(e, item.id)}*/}
                                                {/*        inputProps={{*/}
                                                {/*            step: 1,*/}
                                                {/*            min: minCount,*/}
                                                {/*            max: maxCount,*/}
                                                {/*        }}*/}
                                                {/*        sx={{*/}
                                                {/*            '& .MuiOutlinedInput-root': {*/}
                                                {/*                height: '30px',*/}
                                                {/*            },*/}
                                                {/*            width: '60px',*/}
                                                {/*        }}*/}
                                                {/*    />*/}
                                                {/*</TableCell>*/}
                                                <TableCell sx={{color: green[900], fontWeight: 700}}>
                                                    <button onClick={() => handleIncrease(item.id)}>+</button>
                                                    <p>{item.quantity}</p>
                                                </TableCell>
                                                <TableCell sx={{color: green[900], fontWeight: 700}}>
                                                    <button onClick={() => handleDecrease(item.id)}>-</button>
                                                    <p>{item.quantity}</p>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{color: green[900]}}>Item Subtotal</TableCell>
                                                <TableCell sx={{
                                                    color: green[900],
                                                    fontWeight: 700
                                                }}>${subtotal(products)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: 2}}>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 700,
                        width: '80%',
                        backgroundColor: lightGreen[200],
                    }}
                >
                    Update cart
                </Button>
            </Box>

            <br/>

            <Grid size={{xs: 12, md: 12}} sx={{border: '3px lightgray dotted'}}><br/>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        mb: 2,
                    }}
                >
                    <TextField
                        type="text"
                        value=""
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '30px',
                            },
                            width: '80%',
                        }}
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: 2}}>
                    <Button
                        variant="contained"
                        sx={{
                            fontWeight: 700,
                            width: '80%',
                            backgroundColor: lightGreen[200],
                        }}
                    >
                        Add Coupon
                    </Button>
                </Box>
                <br/>
            </Grid>
        </Box>
    );
}
