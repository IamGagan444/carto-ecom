import React, { Suspense, lazy, useState } from "react";
import Loader from "../Loader/Loader";
import { banner, otherData } from "./otherData";
import Products from "../Home/Products";
import {
  useGetMototrCycleQuery,
  useGetProdoctsCategorieQuery,
} from "../../redux/ProductApi";
const Caoursel = lazy(() => import("../Home/Caoursel"));
const ProductCoursel = lazy(() => import("../men/ProductCoursel"));
const Others = () => {
  const { isLoading, data } = useGetMototrCycleQuery();

  if (isLoading) {
    return (
      <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
        <Loader />
      </div>
    );
  }
  return (
    <div className="pt-[4rem] cu500:pt-[4.4rem]">
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={banner} />
      </Suspense>
      <div className="my-8 md:mx-8 mx-1">
        <Suspense
          fallback={
            <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
              <Loader />
            </div>
          }
        >
          <ProductCoursel
            data={otherData}
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
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Products data={data} />
      </Suspense>
    </div>
  );
};

export default Others;
