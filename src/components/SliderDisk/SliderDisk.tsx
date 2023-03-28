import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import React from 'react'
import './SliderDisk.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Props = {}
export const SliderDisk = (props: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="./image/kalush_sgl1.png"
                        className="swiper-slide"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="./image/kalush_sgl2.png"
                        className="swiper-slide"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="./image/kalush_sgl3.png"
                        className="swiper-slide"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="./image/kalush_sgl4.png"
                        className="swiper-slide"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="./image/kalush_sgl5.png"
                        className="swiper-slide"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SliderDisk
