import React from "react";
import { GoRocket } from "react-icons/go";
import { GiBackwardTime } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { FiPhoneCall} from "react-icons/fi";
const Service = () => {
    // grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
  return (
    <section className="grid grid-cols-1 cu500:grid-cols-2 place-items-center gap-10 sg:flex justify-between my-[50px] px-2 lg:px-10">
      <div className="flex items-center space-x-4">
        <GoRocket className="text-3xl cu500:text-4xl text-yellow-500" />{" "}
        <div>
          <h3 className="text-[0.9rem] cu500:text-lg font-semibold">FREE DELIVERY</h3>
          <p className="text-sm">For all orders over 100$</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <GiBackwardTime className="text-4xl cu500:text-5xl text-yellow-500" />{" "}
        <div>
          <h3 className="text-[0.9rem] cu500:text-lg font-semibold">90 DAYS RETURN</h3>
          <p className="text-sm">If goods have problems</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <BsCreditCard className="text-3xl cu500:text-4xl text-yellow-500" />{" "}
        <div>
          <h3 className="text-[0.9rem] cu500:text-lg font-semibold">SECURE PAYMENT</h3>
          <p className="text-sm">100% secure payment</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FiPhoneCall className="text-3xl cu500:text-4xl text-yellow-500" />{" "}
        <div>
          <h3 className="text-[0.9rem] cu500:text-lg font-semibold">24/7 SUPPORT</h3>
          <p className="text-sm">Dedicated support</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
