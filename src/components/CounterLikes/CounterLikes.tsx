/*import CartTotal from 'components/CartTotal/CartTotal'*/
import { useAppSelector } from 'redux/hooks'
import './CounterLikes.scss'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const CounterLikes = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
            <div className="favorites-count">
                <FavoriteIcon />{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total + productsInCart[parseInt(productId)],
                    0
                )}
            </div>
            {/*<CartTotal productsInCart={productsInCart}></CartTotal>*/}
        </>
    )
}
export default CounterLikes
