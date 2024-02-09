import { useNavigate } from "react-router-dom";
import {
  Button,
  Radio,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../../redux/cartSlice";
import myPhote from "./img/my.jpeg";
import Loader from "../Loader/Loader";
const ConfirmOrder = () => {
  const Dispatch = useDispatch();
  const { cartSlice } = useSelector((state) => state);

  useEffect(() => {
    Dispatch(getTotals());
  }, [Dispatch]);
  console.log(cartSlice);
  const amount = Math.round(
    (cartSlice.cartTotalAmount + cartSlice.cartTotalQuantity * 20) * 100
  );
  const currency = "INR";
  const receipt = "receipt#1";
  const navigate = useNavigate();
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
  const [isLoading, setIsloading] = useState(false);
 
  const [selectedSort, setSelectedSort] = useState("");
  const order_data = JSON.parse(localStorage.getItem("cartItems"));
  const paymentHandler = async (e) => {
    if (selectedSort == 2) {
      setIsloading(true); // Set loading to true when payment process starts
      try {
        const response = await fetch(
          "https://backend-carto-api.onrender.com/order",
          {
            method: "post",
            body: JSON.stringify({ amount, currency, receipt }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const order = await response.json();
        var options = {
          key: "rzp_test_xwiFtDdURfF6Cl",
          amount,
          currency,
          name: "Gagan-carto limited",
          description: "Test Transaction",
          image: myPhote,
          order_id: order.id,
          handler: async function (response) {
            const body = {
              ...response,
            };
            const validateRes = await fetch(
              "https://backend-carto-api.onrender.com/order/validate",
              {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonRes = await validateRes.json();
            console.log("jsonres", jsonRes);
            navigate("/payment_success");
            localStorage.setItem("allOrders", JSON.stringify(order_data));
            Dispatch(clearCart());
          },
          prefill: {
            name: "", //your customer's name
            email: "gaganpalai537@gmail.com",
            contact: "7846961770", //Provide the customer's phone number for better conversion rates
          },
          notes: {
            address: "Kalajamuna,humma,ganjam",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          setIsloading(false); // Set loading to false on payment failure
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
        e.preventDefault();
        console.log("Razorpay Response:", order);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsloading(false); // Set loading to false on fetch error
      }
    } else if (selectedSort == 1) {
      navigate("/payment_success");
      localStorage.setItem("allOrders", JSON.stringify(order_data));
      Dispatch(clearCart());
    }
  };
  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center bg-white bottom-0 top-0 right-0 left-0">
        <Loader />
      </div>
    );
  }
  return (
    <section className="gradient h-screen grid place-items-center">
      <form
        action=""
        className="bg-white px-2 py-10 c500:p-10 w-full cu500:w-[470px] mx-auto  "
      >
        <h2 className="text-3xl font-semibold text-center mb-10">
          Confirm Order
        </h2>

        <div>
          {[1, 2].map((val, i) => (
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
                  className="border-gray-900/10 bg-teal-900/5 p-0 transition-all hover:before:opacity-0 flex justify-between"
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
                  ? "Cash on delivery"
                  : val === 2
                  ? "Online payment"
                  : ""}
              </Typography>
            </label>
          ))}
        </div>
        <br />
        <Button
          variant="gradient"
          size="lg"
          color="teal"
          className="w-full  "
          onClick={paymentHandler}
        >
          confirm
        </Button>
      </form>
    </section>
  );
};

export default ConfirmOrder;
