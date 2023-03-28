import Grid from '@mui/material/Grid'
import VideoHome from 'components/VideoHome/VideoHome'
import { SliderDisk } from 'components/SliderDisk/SliderDisk'
import './SecondPosterVideoSlider.scss'
type Props = {}
const SecondPosterVideoSlider = (props: Props) => {
    return (
        <>
            <div className="wrapper-video-slider">
                <Grid
                    container
                    maxWidth="lg"
                    rowSpacing={1}
                    /*columnSpacing={{ xs: 1, sm: 2, md: 3 }}*/
                    className="container-video-slide"
                >
                    <Grid item xs={12} sm={8} md={6}>
                        <div className="wrapper-content">
                            <p className="quotation-marks">"</p>
                            <p className="quotes">
                                Victory consists of a thousand small victories
                                over oneself that no one knows about.
                            </p>
                            <p className="author-word">
                                Oleg Psyuk, KALUSH band
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="wrapper-content">
                            <VideoHome />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <h1>TOP SINGLE</h1>
                            <SliderDisk />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default SecondPosterVideoSlider
