import { useDispatch, useSelector } from "react-redux";
import LoginModules from "../../login.module.css";
import { createLoginSession } from "../../../../../redux/slices/loginSlices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.status);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    dispatch(createLoginSession());
    navigate("/");
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])


  return (
    <div className="max-w-[280px] mx-auto md:m-0 md:w-full md:max-w-none">
      <form className="space-y-3" onSubmit={onSubmitFormHandler}>
        <div>
          <label htmlFor="account_name" className="text-xs text-[#1999ff] font-medium">
            SIGN IN WITH ACCOUNT NAME
          </label>
          <input type="text" id="account_name" name="account_name" className="w-full rounded-sm border-none px-3 py-2 focus-visible:outline-none bg-[#32353c] hover:bg-[#393c44]" required />
        </div>
        <div>
          <label htmlFor="password" className="text-[#afafaf] text-xs font-medium">
            PASSWORD
          </label>
          <input type="password" id="password" name="password" className="w-full rounded-sm border-none px-3 py-2 focus-visible:outline-none bg-[#32353c] hover:bg-[#393c44]" required />
        </div>
        <div>
          <label className="flex items-center relative cursor-pointer gap-1">
            <input type="checkbox" htmlFor="remember_me" className={`${LoginModules.remember_me_check} cursor-pointer rounded-sm appearance-none bg-[#32353c] w-5 h-5 hover:bg-[#393c44]`} />
            <span className={`${LoginModules.remember_me_text} text-xs text-[#afafaf]`}>Remember Me</span>
          </label>
        </div>
        <div className="md:w-4/6 md:mx-auto">
          <button type="submit" className={`${LoginModules.login_page_btn} w-full text-white rounded-sm py-2 px-4 transition duration-300`}>
            Sign in
          </button>
        </div>
      </form>
      <div className="mt-9 text-center">
        <span className="cursor-pointer underline text-[#dad9d9] font-light text-xs hover:text-white md:text-[#afafaf]">Help, I can&apos;t sign in</span>
      </div>
    </div>
  );
};

export default LoginForm;
