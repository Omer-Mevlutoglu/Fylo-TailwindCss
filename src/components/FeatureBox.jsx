import React from "react";

const FeatureBox = ({ title, icon, desc }) => {
  return (
    <div className="element-center text-white flex-col text-center">
      <img
        src={`/src/assets/images/${icon}`}
        alt={title}
        className="w-[80px] h-[80px] object-contain"
      />

      <h3 className="text-xl font-semibold my-[15px]">{title}</h3>
      <p className="text-gray-600 text-center">{desc}</p>
    </div>
  );
};

export default FeatureBox;
