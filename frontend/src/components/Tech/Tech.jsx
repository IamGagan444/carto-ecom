import React, { Suspense, lazy } from "react";
import Loader from "../Loader/Loader";
const Caoursel = lazy(() => import("../Home/Caoursel"));
import { TechBanner, techData, techData2, techData3 } from "./TechData";
const ProductCoursel = lazy(() => import("../men/ProductCoursel"));
const Tech = () => {
  return <section className="pt-[4rem] cu500:pt-[4.4rem]">
          <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={TechBanner} />
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
              data={techData}
              breakPoint={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 3,
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
              data={techData2}
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            />
          </Suspense>
        </div>
        <div className="my-8  h-[300px] cu500:h-[340px] sg:h-[360px] object-contain">
          <Suspense
            fallback={
              <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                <Loader />
              </div>
            }
          >
            <ProductCoursel
              data={techData3}
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            />
          </Suspense>
        </div>
      
      </div>

  </section>;
};

export default Tech;
