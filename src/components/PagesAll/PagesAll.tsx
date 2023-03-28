import { Typography } from '@mui/joy'
import { Grid } from '@mui/material'

import productsArray from 'utils/productsArray'
import PagesAllItem from './PagesAllItem'

type Props = {}
const PagesAll = (props: Props) => {
    const postId = new URLSearchParams(window.location.search).get('id')
    const post = productsArray.find(
        (Product) => Product.id.toString() === postId
    )
    console.log(window.location.search)
    console.log(postId)
    console.log(post)

    return (
        <>
            <Typography> post</Typography>

            {post && (
                <Grid item xs={12} sm={6} md={6}>
                    {' '}
                    <PagesAllItem
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        сategory={post.сategory}
                        capacity={post.capacity}
                        price={post.price}
                    />
                </Grid>
            )}
        </>
    )
}
export default PagesAll
