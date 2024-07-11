import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";

const EditProfilePage = () => {
  return (
    <div className="bg-[#242828]">
      <Header />
      <main className="max-w-[1100px] mx-auto text-white min-h-screen ">
        {/* PROFILE NAME BREADCUMB */}
        <div className="bg-[#3a3e47]/[0.5] p-4 flex items-center gap-4">
          <div className="w-[64px]">
            <img src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" alt="" className="w-full" />
          </div>
          <div className="flex gap-1">
            <h2 className="text-2xl">johndoe</h2>
            <div className="self-end">
              <span className="text-sm">
                <i className="fa-solid fa-angles-right text-[#828282] mr-1"></i>Edit Profile
              </span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="px-3 py-4">
          <div className="p-2 border-b-2 border-[#e4e4e4]/[.1]">GENERAL</div>
          <form className="p-3 text-[#acb2b8] flex flex-col gap-5">
            <div>
              <label htmlFor="username" className="block text-base">
                ACCOUNT NAME
              </label>
              <input type="text" id="username" name="username" className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none`} />
            </div>
            <div>
              <label htmlFor="email" className="block text-base">
                EMAIL ADDRESS
              </label>
              <input type="text" id="email" name="email" className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none`} />
            </div>
            <div>
              <label htmlFor="region" className="block text-base">
                COUNTRY (?)
              </label>
              <select id="region" name="region" className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0]`}>
                <option value="Indonesia">Indonesia</option>
                <option value="Thailand">Thailand</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="block text-base">
                PASSWORD
              </label>
              <input type="text" id="password" name="password" className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none`} />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="block text-base">
                CONFIRM PASSWORD
              </label>
              <input type="text" id="passwordConfirm" name="passwordConfirm" className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none`} />
            </div>
            <button
              type="submit"
              href="#"
              className={`block text-shadow text-[#c3e1f8] w-full p-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:from-sky-400 hover:to-blue-500 lg:shadow-lg`}
            >
              SAVE
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfilePage;
