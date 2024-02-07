import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import PropTypes from "prop-types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import LazyImage from "../Loader/LazyImage";
import { useNavigate } from "react-router-dom";
const Caoursel = ({ data }) => {
  const navigate = useNavigate();

  return (
    <motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
      className=" bg-black"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="myprofile"
      >
        {data?.map((val, ind) => {
          return (
            <SwiperSlide
              key={ind + 4}
              className="cursor-pointer"
              onClick={() =>
                navigate(`/products-category/${val.selectedCategory}`)
              }
            >
              <LazyImage src={val.banner} alt={val} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
Caoursel.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Caoursel;
