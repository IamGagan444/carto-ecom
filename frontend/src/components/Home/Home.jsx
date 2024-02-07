import Loader from "../Loader/Loader";
import { TechBanner, techData3 } from "../Tech/TechData";
import { productData, productData2, productData4 } from "../men/MenSwiperData";
import ProductCoursel from "../men/ProductCoursel";
import { otherData } from "../others/otherData";
import { Banner, womenData3, womenData4 } from "../women/WomenData";
import { HomeSwiperData } from "./HomeSwiperData";
import { Suspense, lazy } from "react";

const Caoursel = lazy(() => import("./Caoursel"));
const Service = lazy(() => import("./Service"));
const Home = () => {
  return (
    <div className=" pt-[4rem] cu500:pt-[4.4rem]">
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={HomeSwiperData} />
        <Service />
      </Suspense>
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
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Caoursel data={TechBanner} />
      </Suspense>
      <br />
      <h1 className="text-2xl text-slate-700 font-semibold uppercase mx-2 sm:mx-8 ">
        Grab Now or gone now
      </h1>
      <p className="text-base font-semibold capitalize text-slate-500 mx-2 sm:mx-8">
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
    </div>
  );
};

export default Home;
