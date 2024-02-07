import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
//   return (
//     <div className="gradient2 flex my-4 p-2 justify-between items-center ">
//       <div className="flex items-center capitalize">
//         <img src={img} alt={title} className=" w-[50px]" />
//         <p>{title} </p>
//       </div>

//       <div className="flex items-center space-x-1">
//         <button>
//           <AiOutlinePlus className="text-2xl bg-black text-white p-1" />{" "}
//         </button>
//         <input
//           type="number"
//           className="w-[40px] remove-cross focus:outline-none"
//         />
//         <button>
//           <AiOutlineMinus className="text-2xl bg-black text-white p-1" />{" "}
//         </button>
//       </div>
//     </div>
//   );
// };
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import LazyImage from "../Loader/LazyImage";
const Cart = () => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartSlice } = useSelector((state) => state);
  console.log("cart:", cartSlice);
  useEffect(() => {
    // Dispatch the getTotals action when the component mounts or whenever needed
    Dispatch(getTotals());
  }, [Dispatch]);

  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [open, setopen] = useState(false);
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartItems")));
  }, [open]);
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartData = [...cartData];
    updatedCartData[index].cartQuantity = newQuantity;
    setCartData(updatedCartData);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartData));
  };

  const increaseQuantity = (data) => {
    Dispatch(addToCart(data));
    setopen(!open);
  };
  const decreaseQuantity = (data) => {
    Dispatch(decreaseCart(data));
    setopen(!open);
  };
  const removeProduct = (data) => {
    Dispatch(removeFromCart(data));
    setopen(!open);
  };

  return (
    <section className="bg-slate-100 mt-[4.4rem] py-10">
  {
    cartData&&cartData.length>0?  <div>
    <h2 className="text-lg font-semibold sm:text-2xl mx-6 ">
        Shopping Cart &nbsp;
        <span className="text-slate-500 text-sm sm:text-base">
          (
          {cartSlice.cartTotalQuantity < 10
            ? `0${cartSlice.cartTotalQuantity}`
            : cartSlice.cartTotalQuantity}{" "}
          items)
        </span>
      </h2>
      <br />
      <div className="flex flex-col cu800:flex-row justify-evenly space-x-2 mx-1 cu400:mx-2">
        <div
          className={`${
            cartData?.length > 4 ? "h-[450px] overflow-y-scroll " : "h-auto"
          }  border-t border-gray-400 py-1 cu800:w-[65%]`}
        >
          {cartData?.map((val, ind) => {
            return (
              <React.Fragment key={val.id}>
                <div
                  className={`flex items-center justify-between rounded-2xl p-2 py-3 cu500:mx-2 space-x-3  border-gray-300 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] my-5`}
                >
                  <div className="flex items-center w-[250px] sg:w-[320px]">
                    <LazyImage
                      src={val.thumbnail}
                      alt={val.title}
                      className="w-12 h-[4.5rem] sm:h-[5rem] sm:w-16 rounded-lg mx-1 object-cover border cursor-pointer "
                      onClick={() => navigate(`/product_details/${val.id}`)}
                    />

                    <div>
                      <p
                        className="text-wrap text-[13px] sm:text-[15px] font-semibold capitalize mx-2 cu500:mx-3 cursor-pointer"
                        onClick={() => navigate(`/product_details/${val.id}`)}
                      >
                        {val.title}
                      </p>
                      <div className="hidden cu500:block mx-3 my-2">
                        <Rating
                          name="read-only"
                          value={val.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </div>
                      <div className="flex cu500:hidden  items-center mx-2 cu500:mx-3 my-2">
                        <button onClick={() => increaseQuantity(val)}>
                          <AiOutlinePlus className="text-2xl bg-black text-white p-1" />
                        </button>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleQuantityChange(ind, e.target.value)
                          }
                          name={`cartQuantity${ind}`}
                          value={val.cartQuantity || ""}
                          className="w-[40px] remove-cross focus:outline-none bg-slate-200 text-center"
                        />

                        <button onClick={() => decreaseQuantity(val)}>
                          <AiOutlineMinus className="text-2xl bg-black text-white p-1" />
                        </button>
                        <h4 className="cu400:hidden font-semibold block mx-4">
                          &#x20B9; {val.price}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="hidden cu500:flex  items-center  mx-3 my-2">
                    <button onClick={() => increaseQuantity(val)}>
                      <AiOutlinePlus className="text-2xl bg-black text-white p-1" />
                    </button>
                    <input
                      type="number"
                      onChange={(e) =>
                        handleQuantityChange(ind, e.target.value)
                      }
                      name={`cartQuantity${ind}`}
                      value={val.cartQuantity || ""}
                      className="w-[40px] remove-cross focus:outline-none bg-slate-200 text-center"
                    />

                    <button onClick={() => decreaseQuantity(val)}>
                      <AiOutlineMinus className="text-2xl bg-black text-white p-1" />
                    </button>
                  </div>

                  <h4 className="hidden cu400:block font-semibold">
                    &#x20B9; {val.price}
                  </h4>

                  <Button
                    ripple={true}
                    variant="text"
                    className="rounded-full p-2 "
                    onClick={() => removeProduct(val)}
                  >
                    <RiDeleteBinLine className="text-xl cu400:text-2xl hover:text-red-500" />
                  </Button>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex flex-row cu800:flex-col justify-between sg:w-[30%] ">
          <div className=" hidden cu700:block h-fit bg-white rounded-2xl p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <h1 className="text-xl font-semibold">Apply coupon</h1>
            <p className="text-sm my-1 text-slate-600 capitalize font-semibold">
              using a prome code?
            </p>
            <div className="w-fit mx-auto flex my-4">
              <input
                type="text"
                placeholder="Enter coupons"
                className="px-2 py-2 border border-black focus:outline-none text-center w-[150px]"
              />
              <Button
                size="md"
                variant="gradient"
                color="light-blue"
                className=" bg-black rounded-none"
              
              >
                submit
              </Button>
            </div>
          </div>
          <div className="-ml-1 cu500:m-0 cu800:my-5 w-full cu700:w-[380px] cu800:w-full bg-white rounded-2xl p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <h1 className="text-xl font-semibold my-1">Total</h1>

            <Divider />
            <div className="w-full flex justify-between my-2">
              <p className="font-bold">Total</p>
              <p className="font-semibold">{cartSlice.cartTotalAmount} </p>
            </div>
            <div className="w-full flex justify-between my-2">
              <p className="font-semibold">Delivery</p>
              <p className="font-semibold">
                {+cartSlice.cartTotalQuantity * 20}{" "}
              </p>
            </div>
            <div className="w-full flex justify-between my-2">
              <p className="font-semibold">Discount</p>
              <p className="font-semibold">
                -{Math.round(cartSlice.cartTotalDiscount)}{" "}
              </p>
            </div>
            <Divider />
            <div className="w-full flex justify-between my-2">
              <p className="font-bold">Subtotal</p>
              <p className="font-bold">
                {Math.round(
                  cartSlice.cartTotalAmount + (cartSlice.cartTotalQuantity*20)
                )}{" "}
              </p>
            </div>

            <Button
              size="md"
              variant="gradient"
              color="light-blue"
              className=" bg-black w-full my-3"
              onClick={()=>navigate("/checkout/shipping-address-details")}
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>:<EmptyCart/>
  }
    </section>
  );
};

export default Cart;
