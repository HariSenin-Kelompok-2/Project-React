import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";
import RegisterSelectBox from "./components/RegisterSelectBox";
import RegisterButton from "./components/RegisterButton";
import RegisterAgeCheck from "./components/RegisterAgeCheck";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-[#212429] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg')] bg-cover bg-left bg-no-repeat justify-between smFooter:justify-normal lg:pt-5 pb-10">
        <div className="mx-auto px-8 pb-10 pt-5">
          <h2 className="text-4xl font-thin my-8 tracking-wider text-white">CREATE YOUR ACCOUNT</h2>
          <form className="text-[#b8b6b4] flex flex-col gap-8">
            <div>
              <label htmlFor="email" className="block text-base">
                Email Address
              </label>
              <input type="email" id="email" name="email" required="" className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" />
            </div>
            <div>
              <label htmlFor="confirm_email" className="block text-base">
                Confirm your Address
              </label>
              <input type="email" id="confirm_email" name="confirm_email" required="" className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" />
            </div>
            <div>
              <label htmlFor="country" className="block text-base">
                Country of Residence
              </label>
              <RegisterSelectBox />
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
