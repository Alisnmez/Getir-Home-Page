import React from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
function HeroSection() {
  const [selected, setSelected] = useState("TR");


  const phones={
    US:'+1',
    TR:'+90',
    DE:'+49',
    GB:'+44',
    FR:'+33',
    IT:'+39',
    ES:'+34',
    RO:'+40',
    CH:'+41',
    IN:'+91',
    NL:'+31',
    BE:'+32',
    AT:'+43',
    LU:'+352',
    LT:'+370',
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="img1"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="img2"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="img3"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            alt="getir logo"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          />
          <h3 className="mt-4 text-4xl font-semibold text-white  ">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya Kayıt ol
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select Language"
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select bg-white"
            />
            <div className="flex-1">
              <input className="h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-color hover:border-primary-brand-color focus:border-primary-brand-color outline-none" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
