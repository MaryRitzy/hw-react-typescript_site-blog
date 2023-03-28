import { Card, CardContent, Grid, CardActions } from '@mui/material'

import { Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { removeLike } from '../../redux/likeReducer'
import { removeProductFromCart } from 'redux/cartReducer'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    product: Product
}

const CartProductListItemExtended = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <div>{product.description}</div>
                    <div>{product.сategory}</div>
                    <p>{product.price}</p>
                    <div>{product.capacity}</div>
                </CardContent>
                <CardActions>
                    <FavoriteIcon
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id)) &&
                            dispatch(removeLike(product.id))
                        }
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
