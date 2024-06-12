import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularPhoneCarousel from "./PopularPhoneCarousel";

//get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'brand' && name =='popular']._id, brands)]{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug":slug.current,
          "brands":brands[]->{
          name
          }
      }`;
  const data = await client.fetch(query);
  return data;
};

const PopularPhones = async () => {
  const phones = await getData();
 // console.log(phones);
  return (
    <section className="py-24">
      <div className=" container mx-auto">
        <h2 className=" text-center">Most Popular Smart Phones</h2>
        <p className=" text-center mb-[30px]">
          The World's Premium Brands In One Destination.
        </p>
        <PopularPhoneCarousel phones={phones} />
        <Link href="/our-phones">
          <button className="btn btn-accent mx-auto">See all Phones</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularPhones;
