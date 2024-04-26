import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
function Banner() {
  return (
    <>
      <div className="font-fontPrimary">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[600px] w-full object-cover  rounded-lg"
              src="https://www.thesprucecrafts.com/thmb/w-eA3Krt9ibgMa4EWNCR2X2XwYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-picture-workspace-of--embroidery-machine-843488278-9128a2c096844857ba45780ac755fdba.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Embroidery
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Crafting tales in threads, each stitch a story, embroidered with
                love.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[600px] w-full  rounded-lg"
              src="https://www.thelist.com/img/gallery/why-knitting-and-crocheting-are-great-activities-for-your-mental-health/l-intro-1628774167.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Knitting & Crocheting
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Interlocking loops, weaving warmth and comfort, crafting
                coziness one stitch at a time.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[600px] w-full  rounded-lg"
              src="https://c02.purpledshub.com/uploads/sites/51/2023/03/the-best-potholder-quilt-patterns-4ee4872.jpg?webp=1&w=1200"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Quilting
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Piecing memories together, stitching warmth, a patchwork of love
                and legacy.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[600px] w-full  rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0149/8506/8608/files/GujratMotiFan_large.jpg?v=1589189706"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Beadwork
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Tiny treasures strung with care, beads weaving tales of
                tradition and beauty.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[600px]  w-full  rounded-lg"
              src="https://cdn.filestackcontent.com/fSO70894RmGNGpoVOciF"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Macrame
              </h2>
              <p className="mt-2 animate__animated animate__rubberBand">
                Knots intertwine, creating intricate patterns, macrame artistry
                brings texture and charm.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
