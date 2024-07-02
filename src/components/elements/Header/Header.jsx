import { useEffect, useRef, useState } from "react";
import steamLogo from "../../../assets/images/steamlogo.png";
import { Link } from "react-router-dom";
import MobileMenuFooter from "./MobileMenuFooter";

const mobileMenus = ["login", "store", "community", "support"];
const desktopMenus = ["store", "community", "about", "support"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!mobileMenuRef.current.contains(event.target) && !hamburgerBtnRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      {/* Mobile Menu */}
      <div ref={mobileMenuRef} id="mobile-menu" className={`bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50 ${isMenuOpen ? "show" : ""}`}>
        <div className="grid grid-rows-4 gap-4">
          {mobileMenus.map((menu) => {
            const login = menu === "login" ? "/login" : "/";
            return (
              <Link to={login} key={menu} className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                {menu.toUpperCase()}
              </Link>
            );
          })}
          <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">Get the Steam Mobile App</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">View Desktop website</p>
        </div>

        <MobileMenuFooter />
      </div>
      {/* Hamburger ON END */}
      {/* Hamburger Menu end */}

      {/* Header */}
      <header className="bg-[#171a21] w-full px-5 py-1 header-box-shadow">
        <div className="grid grid-cols-10 text-center text-white lg:grid-cols-4 lg:max-w-[1100px] mx-auto">
          <div className="col-span-1 flex justify-center items-center lg:hidden">
            {/* Hamburger Button */}
            <button id="hamburger-btn" ref={hamburgerBtnRef} className="text-white focus:outline-none" onClick={toggleMenu}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
            </button>
          </div>
          <div className="flex -ml-10 justify-center items-center col-span-9 lg:col-span-1 lg:justify-start my-4 lg:ml-0">
            <Link to="/">
              <img src={steamLogo} className="w-[15vh] md:w-auto" alt="steam" />
            </Link>
          </div>
          <div className="hidden text-xl mt-[0.5vh] lg:flex lg:col-span-2 lg:justify-center lg:items-center lg:font-medium lg:gap-2">
            {desktopMenus.map((menu) => {
              const login = menu === "login" ? "/login" : "/";
              return (
                <Link key={menu} to={login} className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                  {menu.toUpperCase()}
                </Link>
              );
            })}
          </div>
          <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block lg:pt-1">
            <div className="flex justify-end gap-2 text-white text-xs">
              <button className="bg-[#5c7e10] p-1 px-2 transition duration-150 hover:bg-[#7ea64b]">
                <i className="fa-solid fa-download mr-2" />
                install steam
              </button>
              <Link to="/login" className="text-[#b8b6b4] hover:text-white">
                login
              </Link>
              <span className="text-[#b8b6b4]">|</span>
              <Link to="/register" href="register.html" className="text-[#b8b6b4] hover:text-white">
                register
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};

export default Header;
