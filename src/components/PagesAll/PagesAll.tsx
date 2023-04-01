import Reviews from 'components/Reviews/Reviews'
import { NavLink, useParams } from 'react-router-dom'

import productsArray from 'utils/productsArray'
import PagesAllItem from './PagesAllItem'

type Props = {}
const PagesAll = (props: Props) => {
    const { id } = useParams()
    const post = productsArray.find((article) => article.id === Number(id))

    return (
        <>
            <div className="bg-full-page">
                <div className="containert">
                    <div>
                        <div className="link-home">
                            <NavLink className="comeBack-link" to="/">
                                Home
                            </NavLink>
                        </div>
                        <div className="container-fullpage">
                            {post && (
                                <PagesAllItem
                                    id={post.id}
                                    image_post={post.image_post}
                                    title={post.title}
                                    description_fullpage={
                                        post.description_fullpage
                                    }
                                    сategory={post.сategory}
                                    capacity={post.capacity}
                                    price={post.price}
                                />
                            )}
                        </div>
                        <Reviews />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PagesAll
