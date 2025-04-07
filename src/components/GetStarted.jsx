import React from "react";

const GetStarted = () => {
  return (
    <div className="container relative">
      <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] w-[865px] min-h-[275px] max-w-full rounded-[5px] element-center flex-col text-white px-[40px] text-center">
        <h3 className=" text-[25px] md:text-[35px] font-semibold mb-[15px]">
          Get early access today{" "}
        </h3>
        <p className="font-normal text-[16px] mb-[30px] w-[625px] max-w-full">
          It only takes a minute to sign up to our free starter tier is
          exteremly generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <form
          action="POST"
          className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]"
        >
          <input
            type="email"
            className="w-full md:flex-1 bg-white h-[50px] rounded-[30px] px-[20px] text-[16px] placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#42b0d1] transition-all duration-300 text-black"
            id="email"
            placeholder="email@example.com"
          />
          <button
            type="submit"
            className="w-full mb-[30px] md:mb-0 md:w-[200px] h-[50px] bg-[#42b0d1] rounded-[30px] hover:bg-[#8cdae4] transition-all duration-300"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
