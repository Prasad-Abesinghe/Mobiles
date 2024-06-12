import React from "react";
import { FaApple} from "react-icons/fa";
import {
  SiHuawei,
  SiNokia,
  SiOneplus,
  SiOppo,
  SiSamsung,
  SiSony,
  SiXiaomi,
} from "react-icons/si";

/*const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});*/

const MobileBrands = () => {
  return (
    <div className="container">
      {/* <div>
        <h2 className=" text-center">Latest Mobile Brands</h2>
      </div> */}
      <div className="flex justify-between text-4xl my-8 items-center">
        <SiSamsung className=" text-8xl" />
        <SiHuawei />
        <FaApple />
        <SiSony className=" text-8xl"/>
        <SiXiaomi />
        <SiOppo className=" text-8xl"/>
        <SiNokia className=" text-8xl"/>
        <SiOneplus />
      </div>
    </div>
  );
};

export default MobileBrands;
