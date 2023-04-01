import { Card, CardContent } from '@mui/material'
import './PagesAll.scss'
import React, { useState } from 'react'
import '../../container/App/App.tsx'
import './PagesAll.scss'
import { removeProductFromCart } from 'redux/cartReducer'

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
    description_fullpage: string
    сategory: string
    capacity: string
    price: string
    image_post: string
}

const PagesAllItem = ({
    id,
    title,
    description_fullpage,
    сategory,
    capacity,
    price,
    image_post,
}: Props) => {
    const [count] = useState<number>(1)
    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()

    return (
        <div>
            <Card variant="outlined" className="product-post">
                <CardContent>
                    <div className="product-image-post">
                        <img src={image_post} alt="" />
                    </div>
                    <div className="post-сategory-fullpage">{сategory}</div>
                    <div className="post-footer">
                        <div
                            className="button-love-fulpage"
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
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </div>
                    </div>

                    <div className="product-title-pulpage">{title}</div>
                    <div className="product-desc">{description_fullpage}</div>
                </CardContent>
                <div className="author-data-categoty">
                    <div className="date-icon-admin">
                        <PersonIcon className="icon-admin" />
                        <Link className="admin-title" to="/admin">
                            {capacity}{' '}
                        </Link>
                        <div className="post-data">{price}</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default PagesAllItem
