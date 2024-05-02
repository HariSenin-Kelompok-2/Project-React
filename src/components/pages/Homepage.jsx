import { useEffect, useRef, useState } from "react";
import "../../assets/homepage.css";
import "../../assets/style.css";
import steamLogo from "../../assets/images/steamlogo.png";
import valveLogoFooter from "../../assets/images/logo_valve_footer.png";
import SignInBox from "../elements/SignInBox/SignInBox";
import FeatureContainer from "../elements/FeatureContainer/FeatureContainer";
import { VRGameDatas, categories, under90kGameDatas } from "../../utils/datas";
import SignInBoxFooter from "../elements/SignInBoxFooter/SignInBoxFooter";
import { SwiperSlide } from "swiper/react";
import Footer from "../elements/Footer/Footer";
import CategoryCard from "../elements/CategoryCard";
import GameCard from "../elements/GameCard";
import RecommendedJumbotron from "../elements/RecommendedJumbotron/RecommendedJumbotron";
import BrowseSteam from "../elements/BrowseSteam/BrowseSteam";

const Homepage = () => {
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
      {/* Andi */}
      <div className="flex items-center flex-col text-white bg-no-repeat bg-[#1b2838] md:px-2">
        {/* Cart */}
        <div className="text-sm hidden md:mt-2 md:max-w-[1100px] md:flex md:w-full">
          <a
            href="cart.html"
            className="block bg-[#5c7e10] px-6 py-1 hover:bg-[#7ea64b] ml-auto"
          >
            <i className="fa-sharp fa-solid fa-cart-shopping" />{" "}
            <span>Cart (1)</span>
          </a>
        </div>

        {/* Feature: NavBar */}
        <nav className="w-full bg-gradient-to-r from-sky-700 via-sky-700 to-blue-950 md:max-w-[1100px] md:mt-1">
          <div className="md:flex md:justify-between">
            <ul className="p-0 md:flex md:items-center -z-1 md:z-auto md:static">
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  Your store
                </a>
              </li>
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  New &amp; Noteworthy
                </a>
              </li>
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  Categories
                </a>
              </li>
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  Points Shop
                </a>
              </li>
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  News
                </a>
              </li>
              <li className="px-4 h-full content-center md:my-0">
                <a href="#" className="text-white">
                  Labs
                </a>
              </li>
            </ul>
            <div className="relative text-white md:w-auto w-full my-2 mr-1">
              <input
                className="w-full border border-cyan-400 bg-cyan-800 bg-opacity-95 h-10 pl-3 pr-16 rounded-md text-sm focus:outline-none shadow-inner hover:border-white hover:border-32 placeholder:italic placeholder:text-black"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 my-2 mr-1 shadow-2xl"
              >
                <svg
                  className="text-transparent h-6 w-6 fill-current"
                  viewBox="0 0 54 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={53}
                    height={52}
                    rx="1.5"
                    fill="#63B5E4"
                    stroke="#84C8EE"
                  />
                  <path
                    d="M25 32.2166L33.3018 25L42.4866 35.5659C43.2113 36.3996 43.123 37.6628 42.2893 38.3875L37.0064 42.9799C36.1727 43.7045 34.9095 43.6162 34.1848 42.7826L25 32.2166Z"
                    fill="#2A3E5A"
                  />
                  <circle
                    cx={21}
                    cy={19}
                    r={11}
                    stroke="#2A3E5A"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* Fariz */}
      <div className="bg-[#1b2838] pt-5 pb-10 px-2">
        {/* Feature: Recommended */}
        <FeatureContainer title="Featured & Recommended" slidesPerView={1}>
          <SwiperSlide>
            <RecommendedJumbotron />
          </SwiperSlide>
        </FeatureContainer>

        {/* Feature: Special Offers */}
        <FeatureContainer
          title="SPECIAL OFFERS"
          classProps="mb-4"
          slidesPerView={3}
        >
          <SwiperSlide>
            <GameCard
              type="midweek deal"
              image="https://cdn.akamai.steamstatic.com/steam/spotlights/df26f523ee36ed6609a7a786/spotlight_image_english.jpg?t=1714087103"
              discountValue="-30%"
              discountedPrice="140 000"
              price="200 000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GameCard
              type="midweek deal"
              image="https://cdn.akamai.steamstatic.com/steam/spotlights/f11b6fb0223c1a2f55d07ab3/spotlight_image_english.jpg?t=1713302774"
              discountValue="-65%"
              discountedPrice="206 999"
              price="72 449"
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-4">
            <a href="#" className="drop-shadow-md">
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/600090/header.jpg?t=1712077006"
                alt=""
              />
              <div className="flex bg-[#addbf4] p-1 justify-between">
                <span className="block text-[#283846]">Today&apos;s Deal!</span>
                <div className="flex">
                  <div className="px-1 py-0.5 text-discount bg-[#4c6b22] flex">
                    <div className="my-auto block text-3xl font-[500]">
                      -65%
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-[#344654]">
                    <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice block text-xs text-right w-fit ml-auto">
                      Rp 206 999
                    </span>
                    <span className="text-discount">Rp 72 449</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="drop-shadow-md">
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1714086603"
                alt=""
              />
              <div className="flex bg-[#addbf4] p-1 justify-between">
                <span className="block text-[#283846]">Today&apos;s Deal!</span>
                <div className="flex">
                  <div className="px-1 py-0.5 text-discount bg-[#4c6b22] flex">
                    <div className="my-auto block text-3xl font-[500]">
                      -50%
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-[#344654] ">
                    <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice block text-xs text-right w-fit ml-auto">
                      Rp 699 000
                    </span>
                    <span className="text-discount">Rp 349 500</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </FeatureContainer>

        {/* Feature: Browse by Category */}
        <FeatureContainer title={"Browse by Category"} classProps="mb-7">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard
                key={index}
                image={category.image}
                bgColor={category.bgColor}
              >
                {category.name}
              </CategoryCard>
            </SwiperSlide>
          ))}
        </FeatureContainer>

        {/* Feature: Sign In */}
        <SignInBox />

        {/* Feature: Browse Steam*/}
        <FeatureContainer title="Browse Steam">
          <BrowseSteam />
        </FeatureContainer>

        {/* Feature: Under 90k */}
        <FeatureContainer
          classProps="pt-10"
          title="Under Rp 90 000"
          button="Under Rp 90 000"
          button2="Under Rp 45 000"
        >
          {under90kGameDatas.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard
                image={game.image}
                price={game.price}
                isDiscount={game.isDiscount}
                discountedPrice={game.discountedPrice}
                discountValue={game.discountValue}
              />
            </SwiperSlide>
          ))}
          {under90kGameDatas.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard
                image={game.image}
                price={game.price}
                isDiscount={game.isDiscount}
                discountedPrice={game.discountedPrice}
                discountValue={game.discountValue}
              />
            </SwiperSlide>
          ))}
        </FeatureContainer>

        {/* Feature: Popular VR Games */}
        <FeatureContainer title={"Popular VR Games"} button={"BROWSE ALL"}>
          {VRGameDatas.map((item, index) => (
            <SwiperSlide key={index}>
              <GameCard image={item.image} price={item.price} />
            </SwiperSlide>
          ))}
          {VRGameDatas.map((item, index) => (
            <SwiperSlide key={index}>
              <GameCard image={item.image} price={item.price} />
            </SwiperSlide>
          ))}
        </FeatureContainer>
      </div>
      <div className="bg-[#1B2838] pb-16">
        {/* Footer */}
        <SignInBoxFooter />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
