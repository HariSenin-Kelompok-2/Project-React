import { SwiperSlide } from "swiper/react";
import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Header from "../../elements/Header/Header";
import RecommendedJumbotron from "./components/RecommendedJumbotron";
import GameCard from "./components/GameCard";
import CategoryCard from "./components/CategoryCard";
import BrowseSteam from "./components/BrowseSteam";
import FeatureContainer from "./components/FeatureContainer";
import { categories, midweekSpecialOffersData, todaySpecialOffersData, under90kGameDatas } from "../../../utils/datas";
import Footer from "../../elements/Footer/Footer";
import SignInBox from "./components/SignInBox";
import SignInBoxFooter from "./components/SignInBoxFooter";
import usePageTitle from "../../../hooks/usePageTitle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

const HomePage = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [actionProducts, setActionProducts] = useState([]);
  const [openWorldProducts, setOpenWorldProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  usePageTitle("Welcome to Steam");

  const getProductsByCategory = async (id, setter) => {
    const response = await axios.get("http://localhost:3001/api/category/" + id);
    setter(response.data.category.products);
  };

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:3001/api/products");
    setAllProducts(response.data.data);
  };

  useEffect(() => {
    getProductsByCategory(3, setActionProducts);
    getProductsByCategory(1, setOpenWorldProducts);
    getAllProducts();
  }, []);

  // console.log(allProducts);

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
        <FeatureContainer title="Browse Steam" isUsingArrow={false} classProps="mb-16">
          <BrowseSteam />
        </FeatureContainer>

        {/* Feature: Under 90k */}
        {openWorldProducts?.length > 0 && (
          <FeatureContainer title={"Popular Open World Games"} button={"BROWSE ALL"}>
            {openWorldProducts?.slice().reverse().slice(0,8).map((game, index) => (
              <SwiperSlide key={index}>
                <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} />
              </SwiperSlide>
            ))}
          </FeatureContainer>
        )}

        {/* Feature: Popular Action Games */}
        {actionProducts?.length > 0 && (
          <FeatureContainer title={"Popular Action Games"} button={"BROWSE ALL"}>
            {actionProducts?.map((game, index) => (
              <SwiperSlide key={index}>
                <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} />
              </SwiperSlide>
            ))}
          </FeatureContainer>
        )}
      </div>

      <div className="bg-[#1B2838] pb-16">
        {!isLogin && <SignInBoxFooter />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
