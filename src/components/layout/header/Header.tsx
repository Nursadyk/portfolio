"use client";
import React from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Snowfall } from "react-snowfall";

const link = [
  {
    title: "ABOUT ME",
    scroll: "about",
  },
  {
    title: "EDUCATION",
    scroll: "education",
  },
  {
    title: "EXPERIENCE",
    scroll: "experience",
  },
  {
    title: "CONTACT",
    scroll: "contact",
  },
];

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>Nursadyk Kulamidinov</h1>
          </div>
          <nav>
            <ul>
              {link.map((obj, id) => (
                <li key={id}>
                  <ScrollLink
                    activeClass={scss.active}
                    to={obj.scroll}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {obj.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          <a href="/school.pdf">
            Lets Talk <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
