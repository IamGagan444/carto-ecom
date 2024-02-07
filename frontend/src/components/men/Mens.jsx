import React, { Suspense, lazy } from "react";
const Caoursel = lazy(() => import("../Home/Caoursel"));
import {
  MenSwiperData,
  productData,
  productData2,
  productData3,
  productData4,
} from "./MenSwiperData";
import Loader from "../Loader/Loader";
const ProductCoursel = lazy(() => import("./ProductCoursel"));

const Mens = () => {
  return (
    <div className=" pt-[4rem] cu500:pt-[4.4rem]">
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={MenSwiperData} />
      </Suspense>

      <div className="mx-1 md:mx-8">
        <div className="my-8 ">
          <Suspense
            fallback={
              <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                <Loader />
              </div>
            }
          >
            <ProductCoursel
              data={productData}
              breakPoint={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
            />
          </Suspense>
        </div>
        <h1 className="text-2xl text-slate-700 font-semibold uppercase ">
          Grab Now or gone now
        </h1>
        <p className="text-base font-semibold capitalize text-slate-500">
          Irresistible offer to bag
        </p>
        <div className="my-8  h-[300px] cu500:h-[340px] sg:h-[360px] object-contain">
          <Suspense
            fallback={
              <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                <Loader />
              </div>
            }
          >
            <ProductCoursel
              data={productData2}
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
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
              }}
            />
          </Suspense>
        </div>
        <br />
        <p className="text-sm sm:text-base font-semibold uppercase text-slate-800 text-center my-2">
          In the spot light
        </p>
        <h1 className="text-base sm:text-[1.6rem] text-slate-900 font-semibold  text-center">
          Coveted Finds this week
        </h1>

        <div className="my-8 object-contain">
          <Suspense
            fallback={
              <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                <Loader />
              </div>
            }
          >
            <ProductCoursel
              data={productData3}
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
              data={productData4}
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

export default Mens;
