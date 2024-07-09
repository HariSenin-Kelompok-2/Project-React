import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";
import RegisterSelectBox from "./components/RegisterSelectBox";
import RegisterButton from "./components/RegisterButton";
import RegisterAgeCheck from "./components/RegisterAgeCheck";
import usePageTitle from "../../../hooks/usePageTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/slices/authSlice";

const RegisterPage = () => {
  usePageTitle("Create Your Account");
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    region: "Indonesia",
  })
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = async (e) => {
    try {
      e.preventDefault()
      await dispatch(registerUser(registerForm)).unwrap();
      navigate('/');
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLogin) navigate("/");
  }, [isLogin, navigate]);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-[#212429] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg')] bg-cover bg-left bg-no-repeat justify-between smFooter:justify-normal lg:pt-5 pb-10">
        <div className="mx-auto px-8 pb-10 pt-5" style={{}}>
          <h2 className="text-4xl font-thin my-8 tracking-wider text-white">CREATE YOUR ACCOUNT</h2>
          <form className="text-[#b8b6b4] flex flex-col gap-8" onSubmit={register}>
            <div>
              <label htmlFor="username" className="block text-base">
                Account Name
              </label>
              <input type="text" id="username" name="username" required className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="email" className="block text-base">
                Email Address
              </label>
              <input type="email" id="email" name="email" required className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="region" className="block text-base">
                Country of Residence
              </label>
              <RegisterSelectBox registerForm={registerForm} setRegisterForm={setRegisterForm} />
            </div>
            <div>
              <label htmlFor="password" className="block text-base">
                Password
              </label>
              <input type="password" id="password" name="password" required className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="email" className="block text-base">
                Confirm Password
              </label>
              <input type="password" id="confirm_password" name="confirm_password" required className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" onChange={(e) => setRegisterForm({ ...registerForm, passwordConfirm: e.target.value })}/>
            </div>
            
            <RegisterAgeCheck />
            <RegisterButton />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RegisterPage;
