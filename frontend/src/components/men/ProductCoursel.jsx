import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import LazyImage from "../Loader/LazyImage";

export default function ProductCoursel({ data, breakPoint ,className}) {
  const navigate = useNavigate();

  const { product_id } = useParams();

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={true}
        breakpoints={breakPoint}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((i, e) => {
          return (
            <SwiperSlide
              key={e}
              className="h-full flex flex-col cursor-pointer"
              onClick={() => {
                !product_id
                  ? navigate(`/products-category/${i.selectedCategory}`)
                  : "";
              }}
            >
              <LazyImage
                src={typeof i == "object" ? i.picture : i}
                alt={i}
                className={`object-contain  max-w-full ${className} `}
              />
              {i && <h2 className=" font-semibold capitalize ">{i.title}</h2>}
              {i && (
                <p className=" text-sm capitalize mb-1 ">{i.description}</p>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
ProductCoursel.propTypes = {
  data: PropTypes.array.isRequired,
  breakPoint: PropTypes.object.isRequired,
};
