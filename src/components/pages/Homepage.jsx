import "../../assets/homepage.css";
import "../../assets/style.css";

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
import Header from "../elements/Header/Header";

const Homepage = () => {
    const navbarMenus = ["Your Store", "New & Noteworthy", "Categories", "Points Shop", "News", "Labs"];
    return (
        <>
            <Header />

            {/* Andi */}
            <div className="flex items-center flex-col text-white bg-no-repeat bg-[#1b2838] lg:px-2">
                {/* Cart */}
                <div className="text-sm hidden lg:mt-2 lg:max-w-[1100px] lg:flex lg:w-full">
                    <a href="cart.html" className="block bg-[#5c7e10] px-6 py-1 hover:bg-[#7ea64b] ml-auto">
                        <i className="fa-sharp fa-solid fa-cart-shopping" /> <span>Cart (1)</span>
                    </a>
                </div>

                {/* Feature: NavBar */}
                <nav className="w-full bg-gradient-to-r from-sky-700 via-sky-700 to-blue-950 lg:max-w-[1100px] lg:mt-1">
                    <div className="lg:flex lg:justify-between">
                        <ul className="lg:flex lg:items-center -z-1 lg:z-auto lg:static">
                            {navbarMenus.map((menu, index) => (
                                <li key={index} className="px-4 h-full content-center lg:my-0">
                                    <a href="#" className="text-white">
                                        {menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="relative text-white md:w-auto w-full my-2 mr-1">
                            <input
                                className="w-full border border-cyan-400 bg-cyan-800 bg-opacity-95 h-10 pl-3 pr-16 rounded-md text-sm focus:outline-none shadow-inner hover:border-white hover:border-32 placeholder:italic placeholder:text-black"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute right-0 top-0 my-2 mr-1 shadow-2xl">
                                <svg className="text-transparent h-6 w-6 fill-current" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={53} height={52} rx="1.5" fill="#63B5E4" stroke="#84C8EE" />
                                    <path d="M25 32.2166L33.3018 25L42.4866 35.5659C43.2113 36.3996 43.123 37.6628 42.2893 38.3875L37.0064 42.9799C36.1727 43.7045 34.9095 43.6162 34.1848 42.7826L25 32.2166Z" fill="#2A3E5A" />
                                    <circle cx={21} cy={19} r={11} stroke="#2A3E5A" strokeWidth={2} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Fariz */}
            <div className="bg-[#1b2838] pt-5 pb-10 px-4">
                {/* Feature: Recommended */}
                <FeatureContainer title="Featured & Recommended" slidesPerView={1}>
                    <SwiperSlide>
                        <RecommendedJumbotron />
                    </SwiperSlide>
                </FeatureContainer>

                {/* Feature: Special Offers */}
                <FeatureContainer title="SPECIAL OFFERS" classProps="mb-4" slidesPerView={3}>
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
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/600090/header.jpg?t=1712077006" alt="" />
                            <div className="flex bg-[#addbf4] p-1 justify-between">
                                <span className="block text-[#283846]">Today&apos;s Deal!</span>
                                <div className="flex">
                                    <div className="px-1 py-0.5 text-discount bg-[#4c6b22] flex">
                                        <div className="my-auto block text-3xl font-[500]">-65%</div>
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
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1714086603" alt="" />
                            <div className="flex bg-[#addbf4] p-1 justify-between">
                                <span className="block text-[#283846]">Today&apos;s Deal!</span>
                                <div className="flex">
                                    <div className="px-1 py-0.5 text-discount bg-[#4c6b22] flex">
                                        <div className="my-auto block text-3xl font-[500]">-50%</div>
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
                            <CategoryCard key={index} image={category.image} bgColor={category.bgColor}>
                                {category.name}
                            </CategoryCard>
                        </SwiperSlide>
                    ))}
                </FeatureContainer>

                {/* Feature: Sign In */}
                <SignInBox />

                {/* Feature: Browse Steam*/}
                <FeatureContainer title="Browse Steam" type="browse steam">
                    <BrowseSteam />
                </FeatureContainer>

                {/* Feature: Under 90k */}
                <FeatureContainer classProps="mt-20" title="Under Rp 90 000" button="Under Rp 90 000" button2="Under Rp 45 000">
                    {under90kGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
                        </SwiperSlide>
                    ))}
                    {under90kGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
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
