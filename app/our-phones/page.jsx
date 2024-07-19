import { client } from "@/app/lib/sanity";
import PhoneCategories from "@/components/PhoneCategories";

const getData = async () => {
  const query = `*[_type == 'product']{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug":slug.current,
          "brands":brands[]-> {
          name
          }
      }`;
  const data = await client.fetch(query);
  return data;
};

const OurPhones = async () => {
  const phones = await getData();
  return (
    <div>
      <PhoneCategories phones={phones} />
    </div>
  );
};

export default OurPhones;
