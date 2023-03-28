import { SliderDisk } from 'components/SliderDisk/SliderDisk'
import './Home.scss'
import Grid from '@mui/material/Grid'
import VideoHome from 'components/VideoHome/VideoHome'
import ProductsList from 'components/ProductsList/ProductsList'
import MainPoster from 'components/MainPoster/MainPoster'
import SecondPosterVideoSlider from 'components/SecondPocterVideoSlider/SecondPosterVideoSlider'

type Props = {}

const Home = () => {
    return (
        <>
            <MainPoster />
            <SecondPosterVideoSlider />
            <ProductsList />
        </>
    )
}
export default Home
