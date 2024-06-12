"use client";
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Phone = ({ phone }) => {
  const popularPhoneCat = phone.brands.find(
    (phone) => phone.name === "popular"
  );
  return (
    <div className="group">
      <div className="border rounded-md bg-white h-[328px] mb-5 p-4 hover:scale-110 ease-in overflow-hidden relative ">
        <div
          className=" bg-primary/60 rounded-lg w-full h-full group-hover:bg-primary/10 
        transition-all duration-300 flex justify-center items-center "
        >
          {popularPhoneCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium ">
              Popular
            </div>
          )}
          <img
            src={urlFor(phone.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        <div
          className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center
         items-center gap-[10px] opacity-0 group-hover:opacity-100  transition-all"
        >
          <AddToCartBtn
           // id={phone._id}
            price_id={phone.price_id}
            name={phone.name}
            currency="USD"
            description={phone.description}
            images={phone.images}
            price={phone.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />

          <Link href={`/product/${phone.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className=" text-primary font-bold mb-2 ">
        {phone.brands[0].name}
      </h5>
      <h4 className=" mb-1 ">{phone.name}</h4>
      <div className=" text-lg font-bold text-accent ">${phone.price}</div>
    </div>
  );
};

export default Phone;
