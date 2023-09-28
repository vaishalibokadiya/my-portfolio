import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Introduction = () => {
  return (
    <div className="h-95vh flex-center m-ve" id="intro">
      <div className="text-center flex-1 h-100">
        <div className="intro sm-intro sm-padding">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-blue m-0 overflow-y-hidden"
          >
            Hello! I am Vaishali,
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-light-blue m-0 overflow-y-hidden"
          >
            a Front-end Developer
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-blue m-0  overflow-y-hidden"
          >
            based in India.
          </motion.h1>
        </div>

        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-grey m-2rem text-large"
        >
          Welcome to my world
        </motion.p>
      </div>
    </div>
  );
};

export default Introduction;
