import "../../assets/homepage.css";
import "../../assets/style.css";

import SignInBox from "../elements/SignInBox/SignInBox";
import FeatureContainer from "../elements/FeatureContainer/FeatureContainer";
import { VRGameDatas, categories, midweekSpecialOffersData, todaySpecialOffersData, under90kGameDatas } from "../../utils/datas";
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
                <FeatureContainer title="SPECIAL OFFERS" classProps="mb-4" slidesPerView={3}>
                    {midweekSpecialOffersData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="flex flex-col gap-2">
                        {todaySpecialOffersData.map((data, index) => (
                            <GameCard key={index} id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
                        ))}
                    </SwiperSlide>
                    {midweekSpecialOffersData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="flex flex-col gap-2">
                        {todaySpecialOffersData.map((data, index) => (
                            <GameCard key={index} id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
                        ))}
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

                {/* Sign In */}
                <SignInBox />

                {/* Feature: Browse Steam*/}
                <FeatureContainer title="Browse Steam" type="browse steam">
                    <BrowseSteam />
                </FeatureContainer>

                {/* Feature: Under 90k */}
                <FeatureContainer classProps="mt-20" title="Under Rp 90 000" button="Under Rp 90 000" button2="Under Rp 45 000">
                    {under90kGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={game.id} image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
                        </SwiperSlide>
                    ))}
                    {under90kGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={game.id} image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
                        </SwiperSlide>
                    ))}
                </FeatureContainer>

                {/* Feature: Popular VR Games */}
                <FeatureContainer title={"Popular VR Games"} button={"BROWSE ALL"}>
                    {VRGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={game.id} image={game.image} price={game.price} />
                        </SwiperSlide>
                    ))}
                    {VRGameDatas.map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard id={game.id} image={game.image} price={game.price} />
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
