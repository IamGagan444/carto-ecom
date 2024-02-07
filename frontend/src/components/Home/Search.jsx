import { BiArrowBack } from "react-icons/bi";
import { CiSearch, CiCamera } from "react-icons/ci";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Button } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useGetProductBySearchQuery } from "../../redux/ProductApi";

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  // const { loginWithPopup, isAuthenticated, user } = useAuth0();

  const [open, setOpen] = useState(true);
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setOpen(true);
  };
  const { isLoading: isLoadingProducts, data: products } =
    useGetProductBySearchQuery(searchInput, {
      skip: !searchInput,
    });
  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      // setTimeout(() => {
      navigate(`/catlogsearch/result:/${searchInput}`);
      // }, 500);

      setOpen(false);
    }
  };
  const handleSuggestionClick = (event, suggestion) => {
    setSearchInput(suggestion);
    navigate(`/catlogsearch/result:/${suggestion}`);
    setOpen(false);
  };
  useEffect(() => {
    // if (location.pathname === '/') {
    setSearchInput("");
    // }
  }, [location.pathname]);

  return (
    <div className="h-screen relative">
      <div className=" flex justify-between items-center mx-2 my-8">
        <BiArrowBack
          className="text-xl text-[#1687a7]"
          onClick={() => navigate(-1)}
        />
        <div className="flex items-center  bg-[#5a5a5a0a] border border-slate-300 rounded-md mx-2 w-[80%] ">
          <CiSearch className="text-2xl text-[#1687a7] mx-2 " />
          <input
            type="search"
            name="search-item"
            id=""
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown} // Handle key press event
            className=" w-full rounded-lg py-2 pr-2 bg-transparent outline-none  "
            placeholder="Search products..."
            autoComplete="new-password"
            onFocus={(e) =>
              e.target.setAttribute("autocomplete", "new-password")
            }
          />
        </div>

        <Button
          variant="outlined"
          component="label"
          size="small"
          sx={{
            height: "38px",
            color: "#1687a7",
            marginTop: "4px",
            minWidth: "40px",
          }}
        >
          <CiCamera className="text-xl" />
          <input hidden accept="image/*" multiple type="file" name="file" />
        </Button>
      </div>

      {products?.products && searchInput && open && (
        <div
          className="w-full mx-auto max-h-[450px] overflow-y-scroll bg-white  hover:border-slate-500 absolute 
              top-14
             z-[9999] "
        >
          {isLoadingProducts ? (
            <p className=" text-center w-full h-[200px] py-12">loading....</p>
          ) : products?.products.length > 0 && !isLoadingProducts ? (
            products?.products.map((val, i) => {
              return (
                // suggetions
                <p
                  key={i}
                  className={`${
                    i % 2 == 0 ? "hover:bg-slate-100" : "hover:bg-gray-100"
                  } w-full px-2 py-1 focus:outline-none cursor-pointer flex items-center`}
                  onClick={(e) => handleSuggestionClick(e, val.title)}
                >
                  <CiSearch className=" text-xl mx-1" />
                  &nbsp; {val.title}
                </p>
              );
            })
          ) : (
            <p className="w-full px-4 capitalize py-2">{`No results for "${searchInput}"`}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
