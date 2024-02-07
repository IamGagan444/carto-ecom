import React, { Suspense, useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/ProductApi";
import Loader from "../Loader/Loader";
import { AiOutlineSwap } from "react-icons/ai";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Radio,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";
import { FiChevronDown } from "react-icons/fi";
import Products from "./Products";
const AllProducts = () => {
  const { isLoading, data } = useGetProductsQuery();
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-full w-full scale-105"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const [openPopover2, setOpenPopover2] = useState(false);
  const [selectedSort, setSelectedSort] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const triggers2 = {
    onMouseEnter: () => setOpenPopover2(true),
    onMouseLeave: () => setOpenPopover2(false),
  };

  useEffect(() => {
    if (data && data.products) {
      let sortedData = [...data.products];

      // Sort the data based on the selected sorting criteria
      if (selectedSort === 1) {
        sortedData.sort((a, b) => b.rating - a.rating);
      } else if (selectedSort === 2) {
        sortedData.sort((a, b) => b.stock - a.stock);
      } else if (selectedSort === 3) {
        sortedData.sort((a, b) => b.price - a.price);
      } else if (selectedSort === 4) {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (selectedSort === 5) {
        sortedData.sort((a, b) => b.discountPercentage - a.discountPercentage);
      }

      setFilteredData(sortedData);
    }
  }, [data, selectedSort]);

  if (isLoading) {
    return (
      <div className="h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
        <Loader />
      </div>
    );
  }
  return (
    <div className="pt-[4rem] cu500:pt-[4.4rem]">
      <div className="text-xl sm:text-2xl md:text-3xl m-6 font-bold flex items-center ">
        <h1>All Products</h1> <AiOutlineSwap className="text-2xl mx-1" />
        <span className="font-semibold text-slate-500 text-xl">
          {filteredData.length} items
        </span>
      </div>
      {/* Filters */}
      <div className="w-full flex justify-end sm:pr-8">
        <div className="w-fit   ">
          <Popover open={openPopover2} handler={setOpenPopover2}>
            <PopoverHandler {...triggers2}>
              <Button
                variant="outlined"
                size="sm"
                className="w-full flex justify-between items-center rot-btn rounded-sm hover:bg-red-100 hover:text-red-500 hover:border-red-500 focus:outline-none capitalize text-sm focus:ring-0 font-medium"
              >
                Sort by : &nbsp;
                <span className="font-semibold text-black">
                  
                  {selectedSort === 1
                    ? "relevance"
                    : selectedSort === 2
                    ? "popularity"
                    : selectedSort === 3
                    ? "Price high to low"
                    : selectedSort === 4
                    ? "price low to high"
                    : selectedSort == 5
                    ? "Discount: high to low"
                    : ""}{" "}
                </span>
                <FiChevronDown className="text-2xl rot-main mx-2 " />
              </Button>
            </PopoverHandler>

            <PopoverContent {...triggers2} className="min-w-[250px] p-0 m-0 ">
              {[1, 2, 3, 4, 5].map((val, i) => (
                <label
                  htmlFor={`vertical-list-react${i}`}
                  className="flex flex-row-reverse w-full justify-between cursor-pointer items-center pl-3 hover:bg-red-100"
                  key={i}
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="vertical-list"
                      id={`vertical-list-react${i}`}
                      ripple={false}
                      icon={<Icon />}
                      className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0 flex justify-between"
                      onChange={() => setSelectedSort(val)}
                      checked={selectedSort === val} // Highlight the selected radio button
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className={`text-slate-700 hover:text-black  duration-200 capitalize ${
                      selectedSort === val ? "text-red-500 font-medium" : ""
                    }`}
                  >
                    {val === 1
                      ? "relevance"
                      : val === 2
                      ? "popularity"
                      : val === 3
                      ? "Price high to low"
                      : val === 4
                      ? "price low to high"
                      : val == 5
                      ? "Discount: high to low"
                      : ""}
                  </Typography>
                </label>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
            <Loader />
          </div>
        }
      >
        <Products data={{ products: filteredData }} />
      </Suspense>
    </div>
  );
};

export default AllProducts;
