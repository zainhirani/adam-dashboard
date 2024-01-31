import React from "react";

interface ReddyScoreCardProps {
    daysTitle: string;
    daysCount: string;
    days: string;
    RoiTitle: string;
    RoiAmount: string;
  }

const ReddyScoreCard = ({
    daysTitle,
    daysCount,
    days,
    RoiTitle,
    RoiAmount,
  }: ReddyScoreCardProps) => {
  return (
    <div className="grid grid-cols-3 py-6">
      <div className="col-span-2">
        <h3 className="text-[10px] pb-1">{daysTitle}</h3>
        <p className="text-base">
          <span className="font-bold mr-1">{daysCount}</span>{days}
        </p>
      </div>
      <div className="text-right">
        <h3 className="text-[10px] pb-1">{RoiTitle}</h3>
        <p className="text-base font-bold">{RoiAmount}</p>
      </div>
    </div>
  );
};

export default ReddyScoreCard;
