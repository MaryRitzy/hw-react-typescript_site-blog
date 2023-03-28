import { Button, Card, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import React, { useState } from 'react'
import '../../container/App/App.tsx'

import { removeProductFromCart } from 'redux/cartReducer'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from '../../redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    сategory: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
    id,
    title,
    description,
    сategory,
    capacity,
    price,
    image,
}: Props) => {
    const [count] = useState<number>(1)
    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()

    return (
        <Card
            variant="outlined"
            className="product"
            sx={{
                padding: 0,
            }}
        >
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Category: {сategory}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">{price} $</div>
            </CardContent>
            <Button
                variant="outlined"
                onClick={() =>
                    isLiked
                        ? dispatch(removeLike(id)) &&
                          dispatch(removeProductFromCart(id))
                        : dispatch(addLike(id)) &&
                          dispatch(
                              addProductToCart({
                                  id,
                                  count,
                              })
                          )
                }
            >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
            <Button component={Link} to={`/post?id=${id}`}>
                Read more
            </Button>
        </Card>
    )
}
export default ProductsListItem
