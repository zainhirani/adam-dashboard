import React from "react";
import SkillDevelopmentCard from "../SkillDevelopmentCard/SkillDevelopmentCard";

const Footer = () => {
  const developmentCardItems = [
    {
      id: 1,
      title: "Sales Ability",
      rating: "74%",
      icon: "/increase.svg",
    },
    {
      id: 2,
      title: "Product Knowledge",
      rating: "23%",
      icon: "/completed.svg",
    },
    {
      id: 3,
      title: "English Accent",
      rating: "14%",
      icon: "/english-language.svg",
    },
    {
      id: 4,
      title: "Active Listening",
      rating: "88%",
      icon: "/listener.svg",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 divide-y lg:divide-y-0 lg:divide-x border p-5 mt-5 rounded-2xl">
      <div className="lg:col-span-3 lg:pr-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {developmentCardItems.map((item) => (
            <SkillDevelopmentCard
              key={item.id}
              title={item.title}
              rating={item.rating}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 p-4 flex items-center lg:pl-12">
        <div className="flex flex-wrap gap-2">
          <h3 className="font-bold text-[18px]">Skill development</h3>
          <p className="text-base mb-2">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiumdod tempor incididu nt ut labore et.
          </p>
          <button className="bg-custom-purple-400 rounded-xl p-3 text-white min-w-24 font-semibold text-[11px] transition ease-in-out hover:bg-black focus:bg-black">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
