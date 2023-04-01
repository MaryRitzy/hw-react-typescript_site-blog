import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import './CartPage.scss'
import { useAppSelector } from 'redux/hooks'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div className="bg-favorites">
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
        </div>
    )
}
export default CartPage
