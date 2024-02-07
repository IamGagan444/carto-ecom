import {
  FaOpencart,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { SiCarto } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <motion.footer className="bg-gray-900 py-20 sg:py-10 "
   initial={{x:"-100%",opacity:0}}
   whileInView={{x:0,opacity:1}}
   
   >
     <h2 className="text-center bg-white font-bold text-2xl p-1 text-yellow-600"> Welcome to our<span className="text-yellow-600"> carto</span></h2>
    <div className="text-white p-7  flex justify-around flex-col sm:flex-row place-items-center text-center sm:text-left ">
      <div className=" ">
        <div className="flex items-center space-x-1 mx-auto">
          <FaOpencart className=" text-4xl" />
          <SiCarto className="text-6xl" />
        </div>
        <h2 className="text-2xl">
         
        </h2>
        <p className=" text-sm ">
          Don`t think about <span className="text-yellow-600"> Money</span>{" "}
          think <br /> product Qualit trust us baby
        </p>
      </div>

      <div className="my-3 ">
        <h6 className="fs-17 fw-6">Policies</h6>
        <ul>
          <li>
            <a href="/terms" className="fs-15">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/cookies" className="fs-15">
              Cookies Policy
            </a>
          </li>
          <li>
            <a href="/policy" className="fs-15">
              Data Policy
            </a>
          </li>
        </ul>
      </div>

      <div className=" my-3">
        <div className="text-2xl  flex space-x-8">
          <FaInstagram />
          <FaSquareFacebook />
          <FaSquareXTwitter />
        </div>
        <ul className="my-2">
          <li>
            <a href="/terms" className="fs-15">
              Company Info
            </a>
          </li>
          <li>
            <Link to={"/contact"} className="fs-15">
             contact us
            </Link>
          </li>
          <li>
            <a href="/policy" className="fs-15">
              Store
            </a>
          </li>
        </ul>
      </div>
    
    </div>
    <h2 className="text-center bg-white font-bold text-xl text-yellow-600 p-1">Gagan Pallai ❤️ 2023</h2>
   </motion.footer>
  );
};

export default Footer;
