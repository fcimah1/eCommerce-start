// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwipperSlides.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react'

export default function SwipperSlides() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    product?.map((product, index) => {
                        if (index < 10) {
                            return(
                            <SwiperSlide key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                            </SwiperSlide>
                    )} return null
                    })
                }
            </Swiper>
        </>
    );
}



// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './SwipperSlides.css';

// // import required modules
// import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// export default function App() {
//     return (
//         <>
//             <Swiper
//                 spaceBetween={30}
//                 effect={'fade'}
//                 navigation={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[EffectFade, Navigation, Pagination, Autoplay]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='1' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='2' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='3' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='4' />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }
