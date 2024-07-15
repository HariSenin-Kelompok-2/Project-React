import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";
import SignInBoxFooter from "./components/SignInBoxFooter";
import usePageTitle from "../../../hooks/usePageTitle";
import { useSelector } from "react-redux";
import HomePageMain from "./components/HomePageMain";

const HomePage = () => {
  usePageTitle("Welcome to Steam");
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <Header />
      <CartAndNavbar />
      <HomePageMain /> 
      <div className="bg-[#1B2838] pb-16">
        {!isLogin && <SignInBoxFooter />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
