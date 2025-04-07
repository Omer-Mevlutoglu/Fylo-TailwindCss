import { useState } from "react";
import FeatureBox from "./FeatureBox";
const Features = () => {
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acess your files,anywhaer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real time collaberation",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nis  temporibus neque consectetur similique harum ad repellat id inciduntvoluptatibus amet unde at perferendis corporis",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[865px] mx-auto max-w-full">
          {item.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
