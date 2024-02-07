import { useEffect, useState } from "react";
// import tree from "./imgs/african-american-5143919_640.png";
import { Button } from "@material-tailwind/react";
import { PiShoppingCartThin } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { PiHeartStraightThin } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LazyImage from "../Loader/LazyImage";
const CustomerProfile = () => {
  const { user, isLoading, logout } = useAuth0();

  const navigate = useNavigate();

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      name: "",
      email: "",
      phoneNumber: "",
      profile: "",
    }
  );
  useEffect(() => {
    // Check if userData is not present in local storage
    const userDataFromLocalStorage = JSON.parse(
      localStorage.getItem("userData")
    );

    // If not present, set initial userData
    if (!userDataFromLocalStorage) {
      setUserData({
        name: user?.name || "",
        email: user?.email || "",
        phoneNumber: "",
        profile: user?.picture || "",
      });
    }
  }, [user]);

  console.log(userData.profile);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          profile: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("profile updated");
  };

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="profile-bg mt-[4.4rem]">
        <div className="w-full cu500:w-[500px]  mx-auto p-2 bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 ">
          <div className="w-full h-[140px] bg-sky-300 rounded-t-xl relative">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="p-2 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-full  m-1 absolute right-0"
            >
              <CiLogout className="text-2xl rotate-180" />
            </button>
            <div className=" w-[120px] h-[120px] rounded-full border-4 border-white mx-auto  overflow-hidden hover:shadow-[0_10px_20px_#fff] duration-1000 absolute -bottom-1/3 left-1/2 transform -translate-x-1/2">
              <LazyImage
                src={userData?.profile}
                alt=""
                className=" object-contain hover:object-cover duration-1000 w-full h-full bg-white "
              />
            </div>
            <div className="absolute -bottom-1/3 left-[55%] ">
              <button
                className="p-2 bg-black text-white rounded-full border-4 border-white"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <MdOutlineAddAPhoto />
              </button>
              <input
                id="fileInput"
                style={{ display: "none" }}
                maxLength={1}
                accept="image/*"
                type="file"
                name="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <br />

          <div className="w-full mt-16 grid grid-cols-2 gap-2">
            <Button
              size="lg"
              variant="gradient"
              color="light-blue"
              className=" bg-red-500 flex items-center justify-center"
            >
              <FiTruck className="text-2xl" /> orders
            </Button>
            <Button
              size="lg"
              variant="gradient"
              color="light-blue"
              className=" bg-red-500 flex items-center justify-center"
            >
              <PiShoppingCartThin className="text-2xl" /> carts
            </Button>
            <Button
              size="lg"
              variant="gradient"
              color="light-blue"
              className=" bg-red-500 flex items-center justify-center"
              onClick={() => navigate("/checkout/wishlist")}
            >
              <PiHeartStraightThin className="text-2xl" /> wishlist
            </Button>
            <Button
              size="lg"
              variant="gradient"
              color="light-blue"
              className=" bg-black flex items-center justify-center"
              onClick={handleSave}
            >
              <CiBookmark className="text-2xl" /> Save
            </Button>
          </div>
          <br />

          <div>
            <h1 className="text-2xl font-semibold text-gray-100 my-3 text-center">
              Personal Details
            </h1>
            <form action="" className="text-gray-100 ">
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
                className="bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 capitalize "
              />
              <p className="mt-3">Email</p>
              <input
                type="text"
                name="email"
                value={userData?.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 "
              />
              <p className="mt-3">Phone Number</p>
              <input
                type="text"
                name="phoneNumber"
                value={userData?.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 "
              />
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
