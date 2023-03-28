import { Grid } from '@mui/material'

import ProductsListItem from 'components/ProductsList/ProductsListItem'
import React, { useState } from 'react'
import productsArray from 'utils/productsArray'
import './Category.scss'

type Props = {
    id: number
    title: string
    description: string
    сategory: string
    capacity: string
    price: number
    image: string
}
/*type Props = {}*/
const Category = ({
    id,
    title,
    description,
    сategory,
    capacity,
    price,
    image,
}: Props) => {
    const [data, setData] = useState(productsArray)

    const filterResult = (category: string) => {
        const result = productsArray.filter((curData) => {
            return curData.сategory === category
        })

        setData(result)
    }
    return (
        <>
            <div className="text-center text-info">Category</div>
            <div>
                <div>
                    <button onClick={() => filterResult('News')}>News</button>
                    <button onClick={() => filterResult('Team')}>Team</button>
                    <button onClick={() => filterResult('Album')}>Album</button>
                </div>
            </div>
            <div>
                {data.map((values) => {
                    const {} = values
                    return (
                        <>
                            <Grid
                                className="article-grid"
                                container
                                maxWidth="lg"
                                spacing={1}
                            >
                                <Grid item xs={12} sm={6} md={6} key={id}>
                                    {' '}
                                    <ProductsListItem
                                        id={values.id}
                                        image={values.image}
                                        title={values.title}
                                        description={values.description}
                                        сategory={values.сategory}
                                        capacity={values.capacity}
                                        price={values.price}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Category
