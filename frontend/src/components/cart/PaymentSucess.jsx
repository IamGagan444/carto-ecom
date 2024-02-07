import success from "./SucessAnime.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const PaymentSucess = () => {
  return (
    <section className="gradient">
      <div className="bg-white px-2 py-10 c500:p-10   cu500:w-[470px] mx-auto  ">
        <h2 className="text-3xl font-semibold text-center my-10">
          Order Confirmed
        </h2>

        <Lottie loop={true} animationData={success} />

        <Link to={"/checkout/order-movement-details"}>
         
          <button type="submit" className="button2 my-8 w-full">
            Order Status
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PaymentSucess;
