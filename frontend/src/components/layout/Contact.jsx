import burger from "./imgs/burger.png";
import { motion } from "framer-motion";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
const Contact = () => {
  return (
    <section className="gradient  h-screen grid place-items-center pt-[4.4rem]">
      <motion.div
        className="w-[95%] cu500:w-[400px] relative"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
      >
        
        <motion.img
          src={burger}
          alt=""
          className="absolute md:-right-[200px] top-10 "
          id=""
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
        />

        <form
          action=""
          className="  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-6 text-white "
        >
          <h2 className="text-3xl font-bold text-center my-4">Contact Us</h2>
          <p className="">Name</p>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className="!bg-transparent border border-gray-100 my-1 p-2 capitalize focus:outline-none placeholder:text-white w-full mb-4"
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="enter your email"
            className="!bg-transparent border border-gray-100 my-1 p-2 capitalize focus:outline-none placeholder:text-white w-full mb-4"
          />
          <p>message</p>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            className="!bg-transparent border border-gray-100 my-1 p-1 capitalize focus:outline-none placeholder:text-white w-full mb-4"
          />

          <button className="btn">Submit</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
