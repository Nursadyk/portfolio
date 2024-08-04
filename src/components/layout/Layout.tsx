import React, { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Snowfall } from "react-snowfall";
interface Iprops {
  children: ReactNode;
}
const Layout: FC<Iprops> = ({ children }) => {
  const [snowCount, setSnowCount] = React.useState<number>(50);
  React.useEffect(() => {
    const changeShowCount = () => {
      if (window.innerWidth < 700) {
        setSnowCount(200);
      } else {
        setSnowCount(50);
      }
    };
    const handleResize = () => {
      changeShowCount();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="snowfall-container">
        <Snowfall color="purple" snowflakeCount={snowCount} />
      </div>
      <div className={scss.Layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
