import { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const [item] = useState([
    {
      image: "profile-1.jpg",
      role: "Acess your files,anywhaer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
      name: "John Doe",
      id: 1,
    },
    {
      image: "profile-2.jpg",
      role: "Real time collaberation",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
      name: "Jane Smith",
      id: 2,
    },
    {
      image: "profile-3.jpg",
      role: "Store any type of file",
      desc: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
      name: "Anonymous",
      id: 3,
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="quote" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px] relative z-10">
          {item.map((item) => (
            <TestimonialsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
