import React from "react";
import scss from "./AboutSection.module.scss";
import Image from "next/image";
import about from "../../images/about.png";
const AboutSection: React.FC = () => {
  return (
    <section id="about" className={scss.AboutSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image_container}>
            <Image src={about} alt="" />
          </div>
          <div className={scss.text_wrapper}>
            <h1>Digital Experiences with Passion</h1>
            <p>
              Ever since I was young, I{"'"}ve been fascinated by the
              intersection of design and technology. This curiosity led me to
              pursue a degree in Graphic Design.
            </p>
            <p>
              where I honed my skills in visual communication and digital
              artistry. As I delved deeper into the world of design, I found my
              true calling in UI/UX design - the perfect blend of aesthetics and
              functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
