import { Card, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import React, { useState } from 'react'
import '../../container/App/App.tsx'

import { removeProductFromCart } from 'redux/cartReducer'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import PersonIcon from '@mui/icons-material/Person'
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
    price: string
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
                <div className="author-data-categoty">
                    <div className="post-сategory">{сategory}</div>
                    <div className="date-icon-admin">
                        <PersonIcon className="icon-admin" />
                        <Link className="admin-title" to="/admin">
                            {capacity}{' '}
                        </Link>
                        <div className="post-data">{price}</div>
                    </div>
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
            </CardContent>
            <div className="post-footer">
                <div
                    className="button-love"
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
                </div>
                <TextSnippetIcon className="icon-post" />
                <Link className="button-link" to={`/${сategory}/${id}`}>
                    Read more
                </Link>
            </div>
        </Card>
    )
}
export default ProductsListItem
