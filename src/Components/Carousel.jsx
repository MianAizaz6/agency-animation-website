import { Swiper, SwiperSlide } from "swiper/react";

import svg1 from "../assets/svgs/undraw_engineering_team_a7n2.svg";
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
    return (
        <div className="carousel-section">
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,

                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className="item-slide">
                        <img src={svg1} alt="" />
                        <div className="title">
                            A Whole new Approach To Lead Generation
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item-slide">
                        <img src={svg1} alt="" />
                        <div className="title">
                            A Whole new Approach To Lead Generation 2
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item-slide">
                        <img src={svg1} alt="" />
                        <div className="title">
                            A Whole new Approach To Lead Generation 3
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
