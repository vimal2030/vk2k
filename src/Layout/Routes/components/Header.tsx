import { useEffect, useState } from "react";
import cartShoppingIcon from "../cart_shopping_icon.svg";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = ["Home", "Menu", "About", "Contact"];

  return (
    <nav
      className={`w-full h-40 bg-black md:h-80 md:bg-transparent flex justify-center border-b-1 border-borderBtm z-2 px-2 md:px-5 py-1.5 md:py-0.9 md:px-5 ${
        isFixed ? "fixed animate-slide-down backdrop-blur" : "absolute"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center font-semibold leading-none">
          <span className="text-16 md:text-22">THOOKU</span>
          <span className="text-14 md:text-18">BIRYANI</span>
        </div>
        <div className="hidden md:flex gap-60 items-center w-600 uppercase">
          {navLinks.map((link, index) => (
            <a
              href="#"
              key={index}
              className="no-underline text-13 hover:text-brown hover:transition-all"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-60 items-center">
            <a href="#">
              <img src={cartShoppingIcon} className="cursor-pointer" alt="Cart Icon" />
            </a>
            <a
              href="#"
              className="px-4 py-3 border border-brown bg-brown text-black rounded-3 hover:text-brown hover:bg-transparent hover:transition-all hover:border"
            >
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
