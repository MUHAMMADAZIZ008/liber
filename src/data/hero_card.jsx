import React from "react";

const HeroCard = ({ title, url }) => {
  return (
    <div className="rounded-[12px] overflow-hidden bg-transparent">
      <div className="w-full bg-transparent mb-[16px]">
        <img className="w-full" src={url} alt="img" />
      </div>
      <p className="text-[20px]">{title}</p>
    </div>
  );
};

export default HeroCard;
