import React from 'react'
import { Link } from 'react-router-dom'
import './SosialLink.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

type Props = {}
const SosialLink = (props: Props) => {
    return (
        <div className="social-icons">
            <Link to="/" title="Facebook" className="fb-icon">
                <FacebookIcon />
            </Link>
            <Link to="/" title="YouTube" className="youtube-icon">
                <YouTubeIcon />
            </Link>
            <Link to="/" title="Instagram" className="insta-icon">
                <InstagramIcon />
            </Link>
            <Link to="/" title="Twitter" className="twit-icon">
                <TwitterIcon />
            </Link>
        </div>
    )
}
export default SosialLink
