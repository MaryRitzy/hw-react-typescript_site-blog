import logo4 from 'assets/logo4.png'
import Typography from '@mui/material/Typography'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div">
            <img
                src={logo4}
                alt="Fake shop"
                style={{ width: 50, marginTop: 10 }}
            />
        </Typography>
    )
}
export default Logo
