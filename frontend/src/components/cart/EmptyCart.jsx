import { Button } from "@material-tailwind/react";
import emptyWish from "./img/Wavy_Bus-30_Single-11__1___1_-removebg-preview.png";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate=useNavigate()
  return (
    <div className="h-screen  ">
      <div className="w-[95%] cu500:w-[400px] mx-auto my-2">
        <h2 className="  text-center sm:text-2xl text-xl text-slate-700 font-semibold">
          Your Cart is empty
        </h2>
        <p className="text-sm cu500:text-base text-center my-2 text-slate-600 font-medium capitalize">
         Purchse products from Carto with high discount free return and many more....
        </p>
      </div>
      <div className="w-[95%] cu400:w-[320px] mx-auto">
        <img src={emptyWish} alt="Empty wishlist" className="object-contain" />
      </div>
      <Button
        size="lg"
        variant="gradient"
        color="indigo"
        className=" flex items-center justify-center mx-auto w-[95%] cu400:w-[300px]"
        onClick={()=>navigate("/all-products-carto")}
      >
        Continue shopping
      </Button>
    </div>
  );
};

export default EmptyCart;
