import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import portfolio from "../../images/portfolio.png";
import scss from "./HomeSection.module.scss";
import Image from "next/image";
const HomeSection = () => {
  return (
    <section id="home" className={scss.home}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.home_left}>
            <div className={scss.links}>
              <FaInstagram />
              <FaFacebookSquare />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <h1>Hey there, it{"'"}s Nursadyk Kulamidinov</h1>
            <div className={scss.text}>
              <p>
                welcome to my creative corner i am Nursadyk Kulamidinov a
                passionate Front-end developer width 3 years of experience that
                are both visually stunning and user friendly
              </p>
            </div>
            <div className={scss.buttons}>
              <button>
                Say Hello <span>→</span>
              </button>
              <button>My Portfolio</button>
            </div>
          </div>
          <div className={scss.home_right}>
            <div className={scss.image_container}>
              <Image src={portfolio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
