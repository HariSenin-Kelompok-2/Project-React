import { useSelector } from "react-redux";
import usePageTitle from "../../../hooks/usePageTitle";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import NewToSteamSection from "./components/NewToSteamSection";
import SignInSection from "./components/SignInSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  usePageTitle("Sign In");
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate])

  return (
    <>
      <Header />

      {/* Sign in Section */}
      <SignInSection />

      {/* New to Steam Section (Register) */}
      <NewToSteamSection />

      {/* Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
