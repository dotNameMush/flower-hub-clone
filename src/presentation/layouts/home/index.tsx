import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: FC = () => {
  const [bgColor, setBgColor] = useState("#FFEBDB");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 790) {
        setBgColor("#FFEBDB");
      } else if (scrollY < 2800) {
        setBgColor("white");
      } else if (scrollY < 4500) {
        setBgColor("#FFEBDB");
      } else if (scrollY < 5400) {
        setBgColor("white");
      } else if (scrollY < 6000) {
        setBgColor("#F5D5D7");
      } else {
        setBgColor("#F5D5D7");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main
      className="transition duration-500"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default HomeLayout;
