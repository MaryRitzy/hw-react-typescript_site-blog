import { Box, Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

const ProductsList = () => {
    return (
        <>
            <div className="bg1">
                {' '}
                <Typography variant="h4" align="center" component="h2">
                    Products List
                </Typography>
                <Grid
                    className="article-grid"
                    container
                    maxWidth="md"
                    spacing={2}
                >
                    {productsArray.map(
                        ({
                            id,
                            title,
                            description,
                            сategory,
                            capacity,
                            price,
                            image,
                        }) => (
                            <Grid item xs={12} sm={6} md={6} key={id}>
                                {' '}
                                <ProductsListItem
                                    id={id}
                                    image={image}
                                    title={title}
                                    description={description}
                                    сategory={сategory}
                                    capacity={capacity}
                                    price={price}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </div>
        </>
    )
}
export default ProductsList
