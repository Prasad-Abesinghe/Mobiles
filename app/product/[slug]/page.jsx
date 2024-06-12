import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";

import {
  Phone,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  PhoneIcon,
} from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
        _id,
        images,
        price,
        price_id,
        name,
        description,
        "slug":slug.current,
        "brand":brands->{name}
      }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const phone = await getData(params.slug);
  return (
    <section className="pt-24 pb-32">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center ">
            <img
              src={urlFor(phone.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=""
            />
          </div>
          <div className=" flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className=" flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to Home
            </Link>
            <div className=" flex flex-col gap-6 items-start">
              <div>
                <h3>{phone.name}</h3>
                <p className=" text-lg font-semibold">${phone.price}</p>
              </div>
              <p>{phone.description}</p>
              <AddToCartBtn
                // id={phone._id}
                price_id={phone.price_id}
                name={phone.name}
                currency="USD"
                description={phone.description}
                images={phone.images}
                price={phone.price}
                text="Add to cart"
                btnStyles="btn btn-accent"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex gap-2">
                <PackageCheck size={20} className=" text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className=" text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Phone size={20} className=" text-accent" />
                <p>
                  The phones are partially assembled and benifit from transpotr
                  insuarance
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className=" text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
