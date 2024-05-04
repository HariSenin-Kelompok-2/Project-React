import { useState, useEffect, useRef } from "react";
import "../../assets/style.css";
import ProdDetailBody from "../elements/ProductDetailComponent/ProdDetailBody";
import ProdDetailHeader from "../elements/ProductDetailComponent/ProdDetailHeader";
import "../../assets/homepage.css";
import "../../assets/style.css";
import steamLogo from "../../assets/images/steamlogo.png";
import valveLogoFooter from "../../assets/images/logo_valve_footer.png";

const ProductDetails = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !mobileMenuRef.current.contains(event.target) &&
        !hamburgerBtnRef.current.contains(event.target)
      ) {
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
      {/* Overlay */}
      <div ref={overlayRef} className="overlay" />
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50 ${
          isMenuOpen ? "show" : ""
        }`}
      >
        <div className="grid grid-rows-4 gap-4">
          <a
            href="login.html"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            Login
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            STORE
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            COMMUNITY
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            SUPPORT
          </a>
          <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">
            Get the Steam Mobile App
          </p>
          <p className="px-2 text-[1rem] text-[#6f7071]">
            View Desktop website
          </p>
        </div>

        <footer className="w-full absolute bottom-0 mb-4 p-4">
          <div className="h-full text-[0.6rem] lg:text-[18px]">
            <div className="w-[13vw] md:w-auto grid md:justify-end lg:mr-2">
              <img
                src={valveLogoFooter}
                className="w-full md:w-[100px]"
                alt=""
              />
            </div>
            <div>
              <p>
                © Valve Corporation. All rights reserved. All trademarks are
                property of their respective owners in the US and other
                countries.
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Legal
                </a>
                <a href="#" className="hover:text-white">
                  Steam Subscriber Agreement
                </a>
                <a href="#" className="hover:text-white">
                  Refunds
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* Hamburger ON END */}

      {/* Hamburger Menu end */}
      {/* header */}
      <div className="bg-[#171a21] h-full p-2 md:p-5 w-full">
        <div className="grid grid-cols-10 lg:grid-cols-4 text-center text-white justify-between">
          <div className="lg:hidden col-span-1 flex justify-center items-center">
            {/* Hamburger Button */}
            <button
              id="hamburger-btn"
              ref={hamburgerBtnRef}
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
            </button>
          </div>
          <div className="flex justify-center items-center lg:justify-end col-span-9 lg:col-span-1">
            <img
              src={steamLogo}
              className="w-[9vh] sm:w-[10vh] md:w-[20vh]"
              alt=""
            />
          </div>
          <div className="lg:block md-[18px] text-[0.8rem] mt-[0.5vh] md:text-[2vw] lg:text-[1.2vw] lg:col-span-2 hidden sm:hidden md:hidden">
            <a href="" className="mr-2 hover:text-[#38a4d2]">
              STORE
            </a>
            <a href="" className="mr-2 hover:text-[#38a4d2]">
              COMMUNITY
            </a>
            <a href="" className="mr-2 hover:text-[#38a4d2]">
              ABOUT
            </a>
            <a href="" className="mr-2 hover:text-[#38a4d2]">
              SUPPORT
            </a>
          </div>
          <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block">
            <div className="flex justify-start space-x-2 text-white">
              <button className="bg-[#5c7e10] p-1 px-2">
                <i className="fa-solid fa-download mr-2" />
                install steam
              </button>
              <a href="login.html">Login</a>
              <a href="register.html">Register</a>
            </div>
          </div>
        </div>
      </div>
      {/* header end */}
      {/* Hamburger Menu */}
      <div
        id="mobile-menu"
        className="bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50"
      >
        <div className="grid grid-rows-4 gap-4">
          <a
            href="login.html"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            Login
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            STORE
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            COMMUNITY
          </a>
          <a
            href="#"
            className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]"
          >
            SUPPORT
          </a>
          <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">
            Get the Steam Mobile App
          </p>
          <p className="px-2 text-[1rem] text-[#6f7071]">
            View Desktop website
          </p>
        </div>
        {/* Footer */}
        <footer className="w-full absolute bottom-0 mb-4 p-4">
          <div className="h-full text-[0.6rem] lg:text-[18px]">
            <div className="w-[13vw] md:w-auto grid md:justify-end lg:mr-2">
              <img
                src={valveLogoFooter}
                className="w-full md:w-[100px]"
                alt=""
              />
            </div>
            <div>
              <p>
                © Valve Corporation. All rights reserved. All trademarks are
                property of their respective owners in the US and other
                countries.
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Legal
                </a>
                <a href="#" className="hover:text-white">
                  Steam Subscriber Agreement
                </a>
                <a href="#" className="hover:text-white">
                  Refunds
                </a>
              </p>
            </div>
          </div>
        </footer>
        {/* Footer end */}
      </div>
      {/* Hamburger Menu end */}
        <div id="container" className="bg-steamBg text-headerFontColor p-60 pt-4">
        <ProdDetailHeader/>
        <ProdDetailBody/>
        </div>
        </>
      );
    };

export default ProductDetails;