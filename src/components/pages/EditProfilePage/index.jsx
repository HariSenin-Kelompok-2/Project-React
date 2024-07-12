import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import EditProfileForm from "./components/EditProfileForm";
import ProfileBreadcumb from "./components/ProfileBreadcumb";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin, navigate]);

  return (
    <div className="bg-[#242828]">
      <Header />
      <main className="max-w-[1100px] mx-auto text-white min-h-screen ">
        <ProfileBreadcumb />
        <EditProfileForm />
      </main>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
