/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors cursor-pointer hover:text-p1 duration-500 max-lg:my-4 max-lg:h5">
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 bg-green600 w-full py-10">
      <div className="container flex h-14 bg-red500 items-center max-lg:px-5 ">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src="/images/xora.svg"
            width={115}
            height={55}
            alt="heder logo"
          />
        </a>
        <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-s2 max-lg:opacity-0">
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 border2 border-amber-400">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot"></div>
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll>
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot"></div>
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*  Hamburger button */}
        <button
          onClick={() => setIsOpen((prevSate) => !prevSate)}
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
        >
          <img src={`/images/${isOpen}magic.svg`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
