import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // core CSS
import "swiper/css/navigation"; // nếu dùng module Navigation
import "swiper/css/pagination"; // nếu dùng module Pagination
import clsx from "clsx";

type Props = {
  title?: string;
  imagesUrls?: string[];
  type: "single" | "multiple";
  imgClassName?: string;
};

export default function Slider({
  title = "",
  imagesUrls = [],
  type = "single",
  imgClassName = "",
}: Props) {
  return (
    <div className="slider-wrap">
      <h2 className="text-primary text-[18px] md:text-[24px] absolute top-2 font-black italic">
        {title}
      </h2>
      <Swiper
        slidesPerView={type === "single" ? 1 : 4}
        spaceBetween={10}
        navigation={true}
        centeredSlides={type === "single"}
        modules={[Pagination, Navigation]}
        className="pt-14!"
      >
        {imagesUrls.map((url, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt=""
                className={clsx(
                  imgClassName,
                  type === "single" ? "w-full" : "w-180px"
                )}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
