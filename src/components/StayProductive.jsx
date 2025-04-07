import React from "react";

const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div className="img">
          <img src="/images/illustration-stay-productive.png" alt="img" />
        </div>
        <div className="text-white">
          <h1 className="text-[35px] font-medium leadading-[50px]">
            Stay Productive,
            <br /> wherever you are
          </h1>
          <div className="text-sm font-normal my-[15px] tracking-[0.8px]">
            <p className="mb-[15px]">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues to ensure everyone is on the same page.
            </p>
          </div>
          <a
            href="/"
            className="flex items-center pb-[5px] w-fit gap-[15px] text-primary border-b-2 border-primary hover:text-[#42b0d1] transition-all duration-300 "
          >
            See how Fylo works
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className="w-[20px] h-[20px] animate-move-arrow"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
