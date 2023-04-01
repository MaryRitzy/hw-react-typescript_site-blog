import { Card, CardContent, Grid, CardActions } from '@mui/material'
import './CartProduct.scss'
import { Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { removeLike } from '../../redux/likeReducer'
import { removeProductFromCart } from 'redux/cartReducer'
import { useAppDispatch } from 'redux/hooks'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'

type Props = {
    product: Product
}

const CartProductListItemExtended = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <Grid
            item
            xs={12}
            sm={4}
            container
            spacing={0}
            maxWidth={1000}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Card className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="author-data-categoty">
                        <div className="post-сategory">{product.сategory}</div>
                        <div className="date-icon-admin">
                            <PersonIcon className="icon-admin" />
                            <Link className="admin-title" to="/admin">
                                {product.capacity}
                            </Link>
                            <div className="post-data">{product.price}</div>
                        </div>
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-desc">{product.description}</div>
                </CardContent>
                <CardActions className="post-footer">
                    <FavoriteIcon
                        className="button-love"
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
