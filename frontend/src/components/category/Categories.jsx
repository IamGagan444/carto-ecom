// ... (import statements)

import { useState } from "react";
import { useGetCategoriesQuery } from "../../redux/ProductApi";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
const Categories = () => {
  const { isLoading: isLoadingCategories, data: categories } =
    useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="mt-[4.4rem]">
      <h2 className="py-8 mx-4 text-2xl font-semibold text-slate-600">
        Categories
      </h2>
      {isLoadingCategories ? (
        <div className="h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
          <Loader />
        </div>
      ) : (
        <ul className="w-[95%] cu500:w-[400px] grid  cu400:grid-cols-2 mx-auto gap-2  ">
          {categories?.map((category, index) => (
            <li
              key={index}
              onClick={() => [
                setSelectedCategory(category),
                navigate(`/products-category/${category}`),
              ]}
              className="cursor-pointer border border-slate-600 p-2 capitalize hover:border-2 flex items-center justify-between text-wrap"
            >
              {category}
              <FaChevronRight className="text-xl" />
            </li>
          ))}
        </ul>
      )}
      <br />
      <br />
    </div>
  );
};

export default Categories;
