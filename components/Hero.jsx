import Image from "next/image";
import Link from "next/link";
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

const Hero = () => {
  return (
    <section
      className=" py-48 md:py-0 md:h-[820px] relative
     overflow-hidden"
    >
      <div className=" container mx-auto">
        <div className="flex items-center justify-between">
          <div
            className="w-full xl:max-w-[580px] md:h-[820px]
           flex flex-col justify-center items-start"
          >
            <h1 className=" text-center xl:text-left mb-6">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p
              className=" mb-10 text-lg max-w-[508px] mx-auto 
            text-center xl:text-left xl:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora omnis ipsum alias dolorum, sint excepturi esse sapiente
              animi consequuntur in ipsa quasi maiores. Molestias modi
              reprehenderit temporibus sint quos.
            </p>
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href="/our-phones" className="mx-auto md:mx-0">
                <button className=" btn btn-primary">Shop Now</button>
              </Link>
              <Link href="/our-phones" className="mx-auto md:mx-0">
                <button className=" btn btn-accent">Our Phones</button>
              </Link>
            </div>
          </div>
          <div className=" hidden xl:flex">
            <Image
              src="/hero/phone.png"
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default Hero;
