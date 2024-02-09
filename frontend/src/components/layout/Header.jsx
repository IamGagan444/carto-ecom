import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { SiCarto } from "react-icons/si";
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
// import { BsShop } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import Menus from "./Menu";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGetProductBySearchQuery } from "../../redux/ProductApi";
import { TbCategory } from "react-icons/tb";
import { BsColumnsGap } from "react-icons/bs";
import Loader from "../Loader/Loader";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const { isAuthenticated, user, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
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

  const { activeLinkParam } = useParams();
  const [activeLink, setActiveLink] = useState(activeLinkParam);

  useEffect(() => {
    setActiveLink(activeLinkParam);
  }, [activeLinkParam]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsNavigationBarVisible(true); // Show navigation bar if scrolling up
      } else {
        setIsNavigationBarVisible(false); // Hide navigation bar if scrolling down
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
        <Loader />
      </div>
    );
  }

  return (
    <div className="fixed w-full z-20 top-0 left-0 right-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      {activeLink !== "/search-products" ? (
        <motion.nav
          className="flex h-[4rem] cu500:h-[4.4rem] bg-white w-full justify-between items-center px-4 md:px-10 "
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <NavLink to={"/"}>
            <div className=" flex items-center space-x-1">
              <FaOpencart className=" text-4xl" />
              <SiCarto className="text-6xl" />
            </div>
          </NavLink>

          <div className="hidden cu500:flex flex-col relative min-w-[60%] sg:min-w-[30%]">
            <div className="hidden  cu500:flex items-center border border-gray-300 bg-white hover:border-slate-600 ">
              <CiSearch className=" text-xl mx-1" />
              <input
                type="search"
                name="search-item"
                id=""
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown} // Handle key press event
                className="w-full px-2 py-[6px] focus:outline-none"
                placeholder="Search products..."
                autoComplete="new-password"
                onFocus={(e) =>
                  e.target.setAttribute("autocomplete", "new-password")
                }
              />
            </div>
            {products?.products && searchInput && open && (
              <div
                className="w-full max-h-[250px] overflow-y-scroll bg-white border border-gray-300 hover:border-slate-500 absolute 
              top-10
             z-[9999] "
              >
                {isLoadingProducts ? (
                  <p className=" text-center w-full h-[200px] py-12">
                    loading....
                  </p>
                ) : products?.products.length > 0 && !isLoadingProducts ? (
                  products?.products.map((val, i) => {
                    return (
                      // suggetions
                      <p
                        key={i}
                        className={`${
                          i % 2 == 0
                            ? "hover:bg-slate-100"
                            : "hover:bg-gray-100"
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

          <div className="menu-header flex space-x-2 sg:space-x-8 items-center text-lg font-semibold  ">
            <NavLink
              className="hover:font-bold sky hidden sg:block"
              to="/mens-category"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "black" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  borderBottom: isActive ? "3px solid black" : "",
                };
              }}
            >
              Men
            </NavLink>
            <NavLink
              className="hover:font-bold sky hidden sg:block"
              to="/womens-category"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "black" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  borderBottom: isActive ? "3px solid black" : "",
                };
              }}
            >
              Women
            </NavLink>
            <NavLink
              className="hover:font-bold sky hidden sg:block"
              to="/tech-elctronics-category"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "black" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  borderBottom: isActive ? "3px solid black" : "",
                };
              }}
            >
              Tech
            </NavLink>
            <NavLink
              className="hover:font-bold sky hidden sg:block"
              to="/other-products-category"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "black" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  borderBottom: isActive ? "3px solid black" : "",
                };
              }}
            >
              Others
            </NavLink>
            <NavLink
              className="hover:font-bold block"
              to={isAuthenticated && "/checkout/cart"}
              onClick={() => (isAuthenticated ? "" : loginWithRedirect())}
            >
              <FiShoppingCart className="text-xl" />
            </NavLink>
            <button className="hover:font-bold block sg:hidden">
              <Menus />
            </button>
            {isAuthenticated ? (
              <button
                className="hidden sg:block bg-black text-white rounded-full"
                onClick={() =>
                  navigate(
                    user.email == "gaganpalai987@gmail.com"
                      ? "/admin-profile"
                      : "/user-profile"
                  )
                }
              >
                <FaRegUserCircle className="text-3xl" />
              </button>
            ) : (
              <Button
                className="hidden sg:block"
                onClick={() => loginWithRedirect()}
              >
                login
              </Button>
            )}
          </div>
        </motion.nav>
      ) : (
        ""
      )}

      {/* mobiles and tablets */}
      <div
        className={`flex px-6 rounded-t-3xl  justify-between sg:hidden bg-white dark:bg-black fixed bottom-0 w-full h-[4rem] cu500:h-[4.5rem] z-10 ${
          isNavigationBarVisible ? "" : "hidden"
        }`}
      >
        <NavLink
          className="hover:font-bold flex flex-col items-center pt-3 px-2 "
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          <GoHome className="text-2xl " />
          <p className="hidden cu500:block text-[10px]  my-[2px]">Home</p>
        </NavLink>
        <NavLink
          className="hover:font-bold flex flex-col items-center pt-3 px-2 cu500:hidden"
          to="/search-products"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          <CiSearch className="text-2xl " />
          <p className="hidden cu500:block text-[10px] my-[2px]">Search</p>
        </NavLink>
        <NavLink
          className="hover:font-bold hidden cu500:flex flex-col pt-3 px-2 items-center"
          to="/all-products-carto"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          <BsColumnsGap className="text-lg my-[3px]" />
          <p className="hidden cu500:block text-[10px]  my-[3px]">
            All products
          </p>
        </NavLink>
        <NavLink
          className="hover:font-bold flex flex-col pt-3 px-2 items-center"
          to="/products-category"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          <TbCategory className="text-2xl " />
          <p className="hidden cu500:block text-[10px]  my-[2px]">Category</p>
        </NavLink>

        <NavLink
          className="hover:font-bold flex flex-col pt-3 px-2 items-center "
          to={isAuthenticated && "/checkout/wishlist"}
          onClick={() => (isAuthenticated ? "" : loginWithRedirect())}
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive&&isAuthenticated ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive&&isAuthenticated ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          <IoMdHeartEmpty className="text-2xl " />
          <p className="hidden cu500:block text-[10px] my-[2px]">WishList</p>
        </NavLink>

        <NavLink
          to={
            isAuthenticated
              ? user.email == "gaganpalai987@gmail.com"
                ? "/admin-profile"
                : "/user-profile"
              : ""
          }
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive&&isAuthenticated ? "#E91E63" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderTop: isActive&&isAuthenticated ? "3px solid #E91E63" : "3px solid black",
            };
          }}
        >
          {isAuthenticated ? (
            <div className="hover:font-bold flex flex-col items-center pt-3 px-2">
              <FaRegUserCircle className="text-2xl " />{" "}
              <p className="hidden cu500:block text-[10px]  my-[2px]">
                Profile
              </p>{" "}
            </div>
          ) : (
            <div
              className="hover:font-bold flex flex-col items-center pt-3 px-2"
              onClick={() => loginWithRedirect()}
            >
              <FiLogIn className="text-2xl " />{" "}
              <p className="hidden cu500:block text-[10px]  my-[3px]"> Login</p>{" "}
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
