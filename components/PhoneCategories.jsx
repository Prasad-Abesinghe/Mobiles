"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Phone from "./Phone";

const PhoneCategories = ({ phones }) => {
  const [brand, setBrand] = useState("all");
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = phones.filter((phone) => {
      const brandMatch =
        brand === "all"
          ? phones
          : phone.brands.some((categ) => categ.name === brand);
      const priceMatch = phone.price <= price;
      return brandMatch && priceMatch;
    });
    setFilteredPhones(filtered);
  }, [brand, price, phones]);
  // console.log(filteredPhones);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside
            className=" w-full  p-4 mb-8 xl:w-[300px] 
          xl:h-[84vh] xl:fixed"
          >
            <RadioGroup
              defaultValue="all"
              className="flex font-semibold flex-col gap-6 mb-12"
            >
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setBrand("all")}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="Samsung"
                  id="Samsung"
                  onClick={() => setBrand("Samsung")}
                />
                <label htmlFor="Samsung">Samsung</label>
              </div>
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="Apple"
                  id="Apple"
                  onClick={() => setBrand("Apple")}
                />
                <label htmlFor="Apple">Apple</label>
              </div>
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="Redmi"
                  id="Redmi"
                  onClick={() => setBrand("Redmi")}
                />
                <label htmlFor="Redmi">Redmi</label>
              </div>
            </RadioGroup>
            <div className=" max-w-56">
              <div className=" text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className=" text-accent font-semibold ml-2">
                  ${price}
                </span>
                <span className=" ml-2">
                  (
                  {filteredPhones.length > 1
                    ? `${filteredPhones.length} items`
                    : filteredPhones === 0
                      ? `${filteredPhones.length} items`
                      : `${filteredPhones.length}items`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[1000]}
                max={1500}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          <div className=" w-full xl:w-[1050px] ml-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredPhones.map((phone) => {
                return <Phone phone={phone} key={phone.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneCategories;
