import { SwiperSlide } from "swiper/react";
import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Header from "../../elements/Header/Header";
import RecommendedJumbotron from "./components/RecommendedJumbotron";
import GameCard from "./components/GameCard";
import CategoryCard from "./components/CategoryCard";
import BrowseSteam from "./components/BrowseSteam";
import FeatureContainer from "./components/FeatureContainer";
import { VRGameDatas, categories, midweekSpecialOffersData, todaySpecialOffersData, under90kGameDatas } from "../../../utils/datas";
import Footer from "../../elements/Footer/Footer";
import SignInBox from "./components/SignInBox";
import SignInBoxFooter from "./components/SignInBoxFooter";
import usePageTitle from "../../../hooks/usePageTitle";
import { useSelector } from "react-redux";

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

const HomePage = () => {
  const isLogin = useSelector((state) => state.auth.isLogin );
  
  usePageTitle("Welcome to Steam");

  return (
    <>
      <Header />
      <CartAndNavbar />
      <div className="bg-[#1b2838] pt-5 pb-10 px-4">
        {/* Feature: Recommended */}
        <FeatureContainer title="Featured & Recommended" slidesPerView={1} isUsingArrow={false}>
          <SwiperSlide>
            <RecommendedJumbotron />
          </SwiperSlide>
        </FeatureContainer>

        {/* Feature: Special Offers */}
        <FeatureContainer title="SPECIAL OFFERS" classProps="mb-4" slidesPerView={3} breakpoints={breakpoints} slidesPerGroup={3}>
          {midweekSpecialOffersData.map((data, index) => (
            <SwiperSlide key={index}>
              <GameCard id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              {todaySpecialOffersData.map((data, index) => (
                <GameCard key={index} id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
              ))}
            </div>
          </SwiperSlide>
          {midweekSpecialOffersData.map((data, index) => (
            <SwiperSlide key={index}>
              <GameCard id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              {todaySpecialOffersData.map((data, index) => (
                <GameCard key={index} id={data.id} type={data.type} image={data.image} discountValue={data.discountValue} discountedPrice={data.discountedPrice} price={data.price} />
              ))}
            </div>
          </SwiperSlide>
        </FeatureContainer>

        {/* Feature: Browse by Category */}
        <FeatureContainer title={"Browse by Category"} classProps="mb-7">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard image={category.image} bgColor={category.bgColor}>
                {category.name}
              </CategoryCard>
            </SwiperSlide>
          ))}
        </FeatureContainer>

        {/* Sign In */}
        {!isLogin && <SignInBox />}

        {/* Feature: Browse Steam*/}
        <FeatureContainer title="Browse Steam" isUsingArrow={false}>
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
        {!isLogin && <SignInBoxFooter />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
