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
import CartAndNavbar from "../elements/CartAndNavbar/CartAndNavbar";

const Homepage = () => {
    return (
        <>
            <Header />

            {/* Andi */}
            <CartAndNavbar />

            {/* Fariz */}
            <div className="bg-[#1b2838] pt-5 pb-10 px-4">
                {/* Feature: Recommended */}
                <FeatureContainer title="Featured & Recommended" slidesPerView={1} type={"Recommended"}>
                    <SwiperSlide>
                        <RecommendedJumbotron />
                    </SwiperSlide>
                </FeatureContainer>

                {/* Feature: Special Offers */}
                <FeatureContainer title="SPECIAL OFFERS" classProps="mb-4" slidesPerView={3} type={"recommended"}>
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
