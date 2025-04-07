import React from "react";

const TestimonialsCard = ({ image, name, desc, role }) => {
  return (
    <div className="text-white bg-[#21293c] p-[30px] rounded-[5px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="mb-[30px] text-sm font-normal tracking-[0.8px]">{desc}</p>

      <div className="flex items-center gap-[15px]">
        <img
          src={`/src/assets/images/${image}`}
          alt={name}
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div>
          <strong className="block mb-[5px]">{name}</strong>
          <p className="font-normal text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
