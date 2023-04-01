import { Grid } from '@mui/material'

import ProductsListItem from 'components/ProductsList/ProductsListItem'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productsArray from 'utils/productsArray'
import './Category.scss'

type Props = {}

const Category = (props: Props) => {
    const { category } = useParams()

    const categoryArray = productsArray.filter(
        (article) => article.сategory === category
    )

    return (
        <>
            <div className="bg-category">
                <Grid
                    className="category-grid"
                    container
                    maxWidth="md"
                    spacing={2}
                >
                    {categoryArray.map((article) => {
                        return (
                            <>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    key={article.id}
                                >
                                    {' '}
                                    <ProductsListItem
                                        id={article.id}
                                        image={article.image}
                                        title={article.title}
                                        description={article.description}
                                        сategory={article.сategory}
                                        capacity={article.capacity}
                                        price={article.price}
                                    />
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}
export default Category
