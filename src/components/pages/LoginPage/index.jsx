import usePageTitle from "../../../hooks/usePageTitle";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import NewToSteamSection from "./components/NewToSteamSection";
import SignInSection from "./components/SignInSection";

const LoginPage = () => {
  usePageTitle("Sign In");
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
