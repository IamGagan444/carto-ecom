import { Button } from "@material-tailwind/react";
import emptyWish from "./img/4418995.jpg";
import { useNavigate } from "react-router-dom";

const EmptyWishList = () => {
  const navigate=useNavigate()
  return (
    <div className="h-screen mt-[4.4rem] ">
      <div className="w-[95%] cu500:w-[400px] mx-auto pt-10 my-4">
        <h2 className="  text-center sm:text-2xl text-xl text-slate-700 font-semibold">
          Your wishlist is empty
        </h2>
        <p className="text-sm cu500:text-base text-center my-2 text-slate-600 font-medium capitalize">
          add items that you like to your wishlist. review them anytime and
          easily move them to the bag
        </p>
      </div>
      <div className="w-[95%] cu400:w-[320px] mx-auto">
        <img src={emptyWish} alt="Empty wishlist" className="object-contain" />
      </div>
      <Button
        size="lg"
        variant="gradient"
        color="blue"
        className=" flex items-center justify-center mx-auto w-[95%] cu400:w-[300px]"
        onClick={()=>navigate("/all-products-carto")}
      >
        Continue shopping
      </Button>
    </div>
  );
};

export default EmptyWishList;
