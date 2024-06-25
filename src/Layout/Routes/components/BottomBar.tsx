import homeIcon from '../assets/home_icon.svg';
import searchIcon from '../assets/search_icon.svg';
import mobileCartIcon from '../assets/mobile_cart.svg';
import aboutIcon from '../assets/about.jpg';

export const BottomBar = () => {
  const navLinks = [
    {
      name: 'Shop',
      icon: homeIcon,
    },
    {
      name: 'Search',
      icon: searchIcon,
    },
  ];

  return (
    <>
      {/* mobile bottom bar */}
      <div className="z-[3] p-[10px] text-[12px] flex items-center justify-evenly fixed bg-black shadow-shadow bottom-0 md:hidden w-full uppercase">
        {navLinks.map((link, index) => (
          <a
            className="flex flex-col items-center gap-[5px]"
            href="#"
            key={index}
          >
            <img
              className="h-[25px] w-[25px] bg-contain bg-no-repeat"
              src={link.icon}
              alt={link.name}
            />
            {link.name}
          </a>
        ))}
        <a href="#" className="flex flex-col items-center gap-[5px]">
          <img
            src={mobileCartIcon}
            className="h-[25px] w-[25px] bg-contain bg-no-repeat"
            alt="Cart"
          />
          <span>Cart</span>
        </a>
        <a href="#" className="text-brown flex flex-col items-center gap-[3px]">
          <span>
            <img
              src={aboutIcon}
              className="h-[25px] w-[25px] rounded-[32px]"
              alt="Account"
            />
          </span>
          Account
        </a>
      </div>
    </>
  );
};
