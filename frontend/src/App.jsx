import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Header = lazy(() => import("./components/layout/Header"));
const Home = lazy(() => import("./components/Home/Home"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Contact = lazy(() => import("./components/layout/Contact"));
const Cart = lazy(() => import("./components/cart/Cart"));
const WishList = lazy(() => import("./components/wishlist/WishList.jsx"));
const Shiping = lazy(() => import("./components/my-order/Shiping.jsx"));
const ConfirmOrder = lazy(() => import("./components/cart/ConfirmOrder"));
const PaymentSucess = lazy(() => import("./components/cart/PaymentSucess"));
const Login = lazy(() => import("./components/layout/Contact.jsx"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Myorder = lazy(() => import("./components/my-order/Myorder"));
const OrderDetails = lazy(() =>
  import("./components/my-order/ProductDetails.jsx")
);
const Dashboard = lazy(() => import("./components/Admin/Dashboard"));
const Orders = lazy(() => import("./components/Admin/Orders"));
const Aboutus = lazy(() => import("./components/layout/Aboutus"));
const PageNotFound = lazy(() => import("./components/layout/PageNotFound"));
const CustomerProfile = lazy(() =>
  import("./components/layout/CustomerProfile")
);
const Categories = lazy(() => import("./components/category/Categories.jsx"));
const Mens = lazy(() => import("./components/men/Mens"));
const SearchedProduct = lazy(() =>
  import("./components/search/SearchedProduct")
);
const AllProducts = lazy(() => import("./components/Home/AllProducts.jsx"));
const MenProducts = lazy(() => import("./components/men/MenProducts"));
const Search = lazy(() => import("./components/Home/Search.jsx"));
const OrderStepper = lazy(() =>
  import("./components/my-order/OrderStepper.jsx")
);
const Womens = lazy(() => import("./components/women/Women.jsx"));
const Tech = lazy(() => import("./components/Tech/Tech.jsx"));
const Others = lazy(() => import("./components/others/Others.jsx"));
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Suspense
        fallback={
          <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
            <Loader />
          </div>
        }
      >
        <Header />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0">
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/mens-category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Mens />
            </Suspense>
          }
        />
        <Route
          path="/womens-category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Womens />
            </Suspense>
          }
        />
        <Route
          path="/tech-elctronics-category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Tech />
            </Suspense>
          }
        />
        <Route
          path="/other-products-category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Others />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/checkout/order-movement-details"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <OrderStepper />
            </Suspense>
          }
        />

        <Route
          path="/about-us"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Aboutus />
            </Suspense>
          }
        />
        <Route
          path="/search-products"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/checkout/cart"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/all-products-carto"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <AllProducts />
            </Suspense>
          }
        />

        <Route
          path="/checkout/wishlist"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <WishList />
            </Suspense>
          }
        />
        <Route
          path="/checkout/shipping-address-details"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Shiping />
            </Suspense>
          }
        />
        <Route
          path="/checkout/confirm-order-details"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <ConfirmOrder />
            </Suspense>
          }
        />
        <Route
          path="/payment_success"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <PaymentSucess />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Login />
            </Suspense>
          }
        />
        {/* admin profiles */}
        <Route
          path="/admin-profile"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/admin/all-orders"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Myorder />
            </Suspense>
          }
        />

        <Route
          path="/product_details/:product_id"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <OrderDetails />
            </Suspense>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/admin/dashboard/orders"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Orders />
            </Suspense>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <CustomerProfile />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <PageNotFound />
            </Suspense>
          }
        />
        <Route
          path="/products-category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <Categories />
            </Suspense>
          }
        />
        {/* this is for product by selectedCategory */}
        <Route
          path="/products-category/:selected_category"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <MenProducts />
            </Suspense>
          }
        />
        {/* this is for SearchedProduct */}
        <Route
          path="/catlogsearch/result:/:searched_value"
          element={
            <Suspense
              fallback={
                <div className=" h-screen w-full grid place-items-center bg-white absolute z-20 top-0 bottom-0 left-0 right-0">
                  <Loader />
                </div>
              }
            >
              <SearchedProduct />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
