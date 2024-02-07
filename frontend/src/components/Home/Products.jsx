import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import { Moneyformat } from "../Loader/Moneyformat";
import { addtoWishList } from "../../redux/wishListSlice";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
import LazyImage from "../Loader/LazyImage";
const Products = ({ data }) => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const motionOpt = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const handleAddToCart = (product) => {
   if(isAuthenticated){
    Dispatch(addToCart(product));
    navigate("/checkout/cart");
   }else{
    loginWithRedirect()
   }
  };
  const [wishlistData, setWishListData] = useState(
    JSON.parse(localStorage.getItem("wishListItems")) || []
  );
  const WishList = (product) => {
    Dispatch(addtoWishList(product));
    setWishListData(JSON.parse(localStorage.getItem("wishListItems")) || []);
  };

  const cartedData = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (isLoading) {
    return (
      <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 cu600:grid-cols-3 sg:grid-cols-4 lg:grid-cols-5 py-6 md:mx-2 sm:gap-1 bg-white">
        {data &&
          data?.products?.map((val) => {
            const isProductInCart = cartedData.some(
              (item) => item.id === val.id
            );
            const isProductInWishList = wishlistData.some(
              (item) => item.id === val.id
            );
            return (
              <Fragment key={val.id}>
                <motion.div
                  className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden border border-gray-300 h-[370px] cu500:h-[420px] mx-auto hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                  {...motionOpt}
                >
                  <Link
                    className="relative cu500:mx-2 cu500:mt-2 flex h-[200px] cu500:h-60 overflow-hidden border "
                    to={`/product_details/${val.id}`}
                  >
                  
                    <LazyImage  className="peer absolute top-0 right-0  w-full object-cover h-[200px] cu500:h-[280px] "
                      src={val.thumbnail}
                      alt="product image"/>
                      
                    <img
                      className="peer peer-hover:right-0 absolute top-0 -right-96 w-full object-cover transition-all delay-100 duration-1000 hover:right-0 h-[250px] "
                      src={val.images[0]}
                      alt="product image"
                    />
                    <svg
                      className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                      />
                    </svg>
                  </Link>
                  {isProductInWishList ? (
                    <button
                      className="absolute top-0 z-[9999] left-0 m-2 rounded-full bg-black px-1 py-1 text-center text-[12px] font-medium "
                      onClick={() => WishList(val)}
                    >
                      <IoMdHeart className="text-2xl text-pink-500  " />
                    </button>
                  ) : (
                    <button
                      className="absolute top-0 z-[9999] left-0 m-2 rounded-full bg-black px-1 py-1 text-center text-[12px] font-medium "
                      onClick={() => WishList(val)}
                    >
                      <IoIosHeartEmpty className="text-2xl text-white  " />
                    </button>
                  )}

                  <div className="mt-2 px-1 cu500:px-2 pb-2">
                    <p className="text-center text-[12px] p-1 px-2 bg-slate-300 w-fit uppercase font-semibold">
                      {val.brand}{" "}
                    </p>
                    <Link to={`/product_details/${val.id}`}>
                      <h5 className="text-sm text-wrap">{val.title}</h5>
                    </Link>
                    <div className="flex items-center space-x-1">
                      <p>
                        <span className="text-lg cu500:text-xl font-bold text-green-600 ">
                          {Moneyformat(val.price)}
                        </span>
                        &nbsp;
                        <span className="text-[12px] cu500:text-sm line-through">
                          {Moneyformat(val.price + 199)}
                        </span>
                        &nbsp;
                        <span className="text-[12px] cu500:text-sm ">
                          {Math.round(val.discountPercentage)}%
                        </span>
                      </p>
                    </div>
                    <div className="my-1 flex items-center space-x-1">
                      <Rating
                        name="read-only"
                        value={val.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                      <p className="text-sm">
                        {" "}
                        ({parseFloat(+val.rating).toFixed(1)})
                      </p>
                    </div>
                    {isProductInCart ? (
                      <button
                        onClick={() => navigate("/checkout/cart")}
                        className="w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 mt-2 focus:ring-blue-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Go to cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(val)}
                        className="w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 mt-2 focus:ring-blue-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to cart
                      </button>
                    )}
                  </div>
                  {/* </div> */}
                </motion.div>
              </Fragment>
            );
          })}
      </div>
    </>
  );
};

export default Products;
