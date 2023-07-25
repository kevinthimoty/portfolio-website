import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
// import Image3 from "../../assets/service-3.svg";

const data = [
    {
        id: 1,
        image: Image2,
        title: "Web Development",
        description:
          "I offer a comprehensive range of web development services that cater to diverse client needs. Whether it's building a dynamic e-commerce platform, crafting an engaging blog, or developing custom web solutions, I am driven by a constant pursuit of excellence in the ever-evolving world of web development.",
      },
    {
      id: 2,
      image: Image1,
      title: "UI/UX design",
      description:
        "Through self-guided learning, I have honed my skills in understanding user behaviors, wireframing, prototyping, and creating visually appealing interfaces. While I may not have prior project experience in UI/UX design, my passion for the field drives me to embrace every opportunity to explore and grow",
    },
  ];

  
const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return(
                        <div className="services__card" id={id}>
                            <img src={image} alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Services;