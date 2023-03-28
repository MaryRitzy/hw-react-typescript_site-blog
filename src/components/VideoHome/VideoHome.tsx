import './VideoHome.scss'
import React, { useState } from 'react'

import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
type Props = {}
const VideoHome = (props: Props) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="Z8Z51no1TD0"
                onClose={() => setOpen(false)}
            />

            <div onClick={() => setOpen(true)}>
                <img
                    src="./image/home_hiphop_pic1.png"
                    className="playHome"
                    alt=""
                />
            </div>
        </>
    )
}
export default VideoHome
