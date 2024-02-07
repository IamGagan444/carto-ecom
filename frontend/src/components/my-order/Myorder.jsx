import { Button } from "@material-tailwind/react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import React from "react";
const Myorder = () => {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem("allOrders"));

  return (
    <section className="bg-slate-100  mt-[4.4rem] py-10">
      <div>
        <h2 className="text-lg text-center font-semibold sm:text-2xl mx-6 ">
          Orders &nbsp;
          <span className="text-slate-500 text-sm sm:text-base">
            ({orders.length < 10 ? `0${orders.length}` : orders.length} items)
          </span>
        </h2>
        <br />
        <div className="flex flex-col cu800:flex-row justify-evenly space-x-2 mx-1 cu400:mx-2">
          <div
            className={`${
              orders?.length > 4 ? "h-[500px] overflow-y-scroll " : "h-auto"
            }  border-t border-gray-400 py-1 cu800:w-[50%]`}
          >
            {orders?.map((val) => {
              return (
                <React.Fragment key={val.id}>
                  <div
                    className={`flex items-center justify-between rounded-2xl p-2 py-3 cu500:mx-2 space-x-3  border-gray-300 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] my-5`}
                  >
                    <div className="flex items-center w-[250px] sg:w-[320px]">
                      <img
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

                        <div className="flex  items-center m-2 ">
                          <div className="block">
                            <Rating
                              name="read-only"
                              value={val.rating}
                              precision={0.5}
                              readOnly
                              size="small"
                            />
                          </div>
                          <h4 className="cu400:hidden font-semibold mx-4">
                            &#x20B9; {val.price}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <h4 className="hidden cu400:block font-semibold">
                      &#x20B9; {val.price}
                    </h4>

                    <Button
                      ripple={true}
                      variant="text"
                      className="rounded-full p-2 "
                    >
                      <BsCheckCircle className="text-xl cu400:text-2xl hover:text-green-500" />
                    </Button>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myorder;
