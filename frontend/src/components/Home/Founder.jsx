import { motion } from "framer-motion";
import profile from "./imgs/gagan.jpg";
const Founder = () => {
  const motionOpt = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition:{
        delay:0.3
    }
  };
  return (
    <section className="h-screen bg-black flex place-items-center">
      <motion.div {...motionOpt} 
       className="w-full md:w-[50%] mx-auto  text-center  text-white"
      >
        <img src={profile} alt="Founder" className="w-[200px] h-[200px] rounded-full border-[8px] border-white mx-auto"/>
        <h3 className=" my-3 font-bold  text-2xl">Dv. Gagan Pallai</h3>
        <p className="capitalize text-sm">
          hey everyone, iam gagan pallai the founder of Carto <br />
          Our Aim to make shoping easier and faster
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
