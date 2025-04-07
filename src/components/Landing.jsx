import React from "react";

const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col pt-[200px]">
          <div className="image">
            <img src="/images/landing-img.png" alt="Landing" />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one location
              <br />
              accessible anywhere
            </h1>
            <p className="md:w-[600px] text-lg px-[15px] md:mx-auto font-normal max-w-full mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, nihil temporibus. Cupiditate nostrum, consequuntur
              assumenda odit praesentium delectus itaque cumque vero qui error
              voluptates, perspiciatis alias aperiam iure ipsa natus.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <img
          src="/images/bg-curvy-desktop.svg"
          alt="Background curve"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
