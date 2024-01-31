import React from "react";

interface MonthlyProps {
  title: string;
  subTitle: string;
  bottonText: string;
  bottonTextPrefix: string;
}

const MonthlyReportCard = ({
  title,
  subTitle,
  bottonText,
  bottonTextPrefix,
}: MonthlyProps) => {
  return (
    <div className="border py-5 rounded-2xl divide-y transition ease-in-out hover:scale-105">
      <div className="px-5 pb-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-[18px] md:text-[22px] lg:text-[36px] font-bold">{subTitle}</p>
      </div>
      <p className="font-semibold text-xs pt-4 px-5 text-gray-400">
        <span className="font-bold text-neon-green mr-2">{bottonTextPrefix}</span>{bottonText}
      </p>
    </div>
  );
};

export default MonthlyReportCard;
