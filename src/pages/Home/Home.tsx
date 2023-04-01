import './Home.scss'
import MainPoster from 'components/MainPoster/MainPoster'
import SecondPosterVideoSlider from 'components/SecondPocterVideoSlider/SecondPosterVideoSlider'
import PaginatedItems from 'components/Pagination/Pagination'
import Footer from 'container/Footer/Footer'

const Home = () => {
    return (
        <>
            <MainPoster />
            <SecondPosterVideoSlider />
            <PaginatedItems />
            <Footer />
        </>
    )
}
export default Home
