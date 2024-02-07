import React, { useState } from "react";
import ProductCoursel from "../men/ProductCoursel";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsByIDQuery } from "../../redux/ProductApi";
import Loader from "../Loader/Loader";
import { FaStar } from "react-icons/fa";
import { Moneyformat } from "../Loader/Moneyformat";
import { Button } from "@material-tailwind/react";
import { PiShoppingCartThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addtoWishList } from "../../redux/wishListSlice";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { addToCart } from "../../redux/cartSlice";
const ProductDetails = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { product_id } = useParams();
  const { isLoading, data } = useGetProductDetailsByIDQuery(product_id, {
    skip: !product_id,
  });
  const cartedData = JSON.parse(localStorage.getItem("cartItems")) || [];
  const isProductInCart = cartedData.some((item) => item.id === data?.id);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const handleCart = (product) => {
    if (isProductInCart) {
      navigate("/checkout/cart");
     
    } else {
      navigate("/checkout/cart");
      Dispatch(addToCart(product));
    }
  };
  const [wishlistData, setWishListData] = useState(
    JSON.parse(localStorage.getItem("wishListItems")) || []
  );
  const WishList = (product) => {
    Dispatch(addtoWishList(product));
    setWishListData(JSON.parse(localStorage.getItem("wishListItems")) || []);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
        <Loader />
      </div>
    );
  }
  const isProductInWishList = wishlistData.some((item) => item.id === data.id);

  return (
    <section className="bg-white pt-[4.7rem] sm:mt-[2.5rem] flex flex-col sm:flex-row justify-evenly w-[full] cu400:w-[95%] mx-auto sm:w-full ">
      <div className=" w-[80%] mx-auto sm:w-[35%] sm:max-h-[400px]">
        <ProductCoursel
          data={data.images}
          className={"aspect-[3/4]"}
          breakPoint={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        />
      </div>
      <div className="w-full px-2 md:px-8  sm:w-[60%]">
        <h2 className=" text-xl font-semibold p-1 px-8 bg-slate-300 w-fit">
          {data?.brand}
        </h2>
        <p className="mt-2 text-[1.1rem] font-semibold capitalize">
          {data?.title}{" "}
        </p>
        <p>{data.description} </p>
        <div className="flex px-6 py-1 items-center border justify-center border-slate-400 mt-3 w-fit ">
          {parseFloat(+data.rating).toFixed(1)}&nbsp;
          <FaStar />{" "}
        </div>{" "}
        <span>Based on users ratings</span>
        <div className="flex items-end mt-4">
          <h1 className="text-2xl font-bold">{Moneyformat(data.price)} </h1>
          <h2 className="text-xl font-semibold text-green-600 mx-3">
            {Math.round(+data.discountPercentage + 30)}% OFF{" "}
          </h2>
        </div>
        <p className="text-slate-600 ">
          MRP <span className="line-through">{Moneyformat(data.price)}</span>{" "}
          Inclusive of all taxes
        </p>
        <p className="my-2 font-semibold pr-3 ">Details:</p>
        <p className="w-[95%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
          nihil aliquam deleniti ex odit doloremque ad temporibus cumque
          incidunt provident dolorum illum laudantium vitae veritatis eligendi
          maiores expedita delectus, necessitatibus a sequi placeat.
        </p>
        <p className="w-[95%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          commodi beatae numquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure, consequuntur. Modi, ipsam.
        </p>
        <div className="flex sm:flex-col md:flex-row justify-between sm:space-y-2 md:space-y-0 space-x-2 sm:space-x-0 md:space-x-2 mr-4 w-[98%] sm:w-[95%] my-8">
          <Button
            size="lg"
            variant="outlined"
            className=" focus:ring-0 flex items-center justify-center w-full px-1"
            onClick={() =>
              isAuthenticated ? WishList(data) : loginWithRedirect()
            }
          >
            {isProductInWishList ? (
              <IoMdHeart className="text-2xl text-pink-500  " />
            ) : (
              <IoIosHeartEmpty className="text-2xl  " />
            )}
           <span className= "hidden cu500:block"> wishlist</span>
          </Button>
          <Button
            size="lg"
            variant="gradient"
            color="light-blue"
            className=" bg-black flex items-center justify-center w-full text-sm cu500:text-base "
            onClick={() =>
              isAuthenticated ? handleCart(data) : loginWithRedirect()
            }
          >
            <PiShoppingCartThin className="text-2xl hidden sm:block" />
            {isProductInCart ? "Go to cart" : "Add to cart"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
