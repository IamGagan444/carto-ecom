// import React from 'react'

import { Suspense, lazy } from "react";
import Loader from "../Loader/Loader";
import { Banner, womenData3, womenData4 } from "./WomenData";
import ProductCoursel from "../men/ProductCoursel";
const Caoursel = lazy(() => import("../Home/Caoursel"));

const Women = () => {
  return (
    <div className=" pt-[4rem] cu500:pt-[4.4rem]">
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={Banner} />
      </Suspense>

      <br />
      <div className="my-8 object-contain">
        <Suspense
          fallback={
            <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
              <Loader />
            </div>
          }
        >
          <ProductCoursel
            data={womenData3}
            breakPoint={{
              150: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              540: { slidesPerView: 3, spaceBetween: 10 },
              800: { slidesPerView: 3.5, spaceBetween: 10 },

              1050: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          />
        </Suspense>
      </div>
      <br />
      <div className="my-8 object-contain bg-sky-200">
        <br />
        <div className="my-4 mx-1 md:mx-8 ">
          <p className="text-sm sm:text-base font-semibold uppercase text-slate-800 text-center my-2">
            TRENDY FOOTWEAR
          </p>
          <h1 className="text-base sm:text-[1.6rem] text-slate-900 font-semibold  text-center  mb-6">
            Stay One Step Ahead
          </h1>
          <Suspense
            fallback={
              <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                <Loader />
              </div>
            }
          >
            <ProductCoursel
              data={womenData4}
              breakPoint={{
                150: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                540: { slidesPerView: 3, spaceBetween: 10 },
                800: { slidesPerView: 3.5, spaceBetween: 10 },

                1050: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            />
          </Suspense>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Women;
