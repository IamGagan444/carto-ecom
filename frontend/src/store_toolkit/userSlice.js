import { Fragment } from "react";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate ,Link} from "react-router-dom";


const Products = ({ data }) => {
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
    const dispatch = useDispatch();
    const cartedData = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      navigate("/checkout/cart");
    };
  
    return (
      <>
        <div className="grid grid-cols-2 cu600:grid-cols-3 sg:grid-cols-4 lg:grid-cols-5 py-6 md:mx-2 sm:gap-1 bg-white">
          {data &&
            data?.products?.map((val) => {
              const isProductInCart = cartedData.some((item) => item.id === val.id);
  
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
                      {/* ... (existing code) */}
                    </Link>
                    <div className="mt-2 px-1 cu500:px-2 pb-2">
                      {/* ... (existing code) */}
                      {isProductInCart ? (
                        // If the product is already in the cart, render a link or button to go to the cart
                        <Link to="/checkout/cart" className="...">
                          Go to Cart
                        </Link>
                      ) : (
                        // If the product is not in the cart, render the "Add to Cart" button
                        <button
                          onClick={() => handleAddToCart(val)}
                          className="..."
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </motion.div>
                </Fragment>
              );
            })}
        </div>
      </>
    );
  };
  
  

export default Products;
