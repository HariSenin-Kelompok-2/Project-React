import { Link } from "react-router-dom";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";

const LoginPage = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col justify-between h-screen">
      <Header />
      <div className="mx-auto mt-7 p-8 lg:w-2/3">
        {/* Login Container */}
        <div className="login-container flex flex-col md:flex-row">
          <div className="login-form w-full md:mr-6">
            <h2>Sign In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="account_name">Sign in with Account Name:</label>
                <input
                  type="text"
                  id="account_name"
                  name="account_name"
                  className="w-full rounded-md bg-gray-700 border-none px-4 py-2"
                  placeholder="Enter your account name"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded-md bg-gray-700 border-none px-4 py-2"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          {/* Sign in with QR */}
          <div className="login-with-qr flex flex-col justify-center items-center mt-6 md:mt-0">
            <p className="text-blue-400">Or</p>
            <a href="#" className="text-blue-400 hover:underline">
              Sign in with QR
            </a>
            {/* QR Code Image */}
            <div>
              <img
                src="https://www.hallmarknameplate.com/wp-content/uploads/2022/08/qr-code-print5-293x300.png"
                alt="QR Code"
              />
            </div>
            {/* Paragraf for Mobile App */}
            <p className="text-white mt-4">
              Use the{" "}
              <a href="#" className="underline">
                Steam Mobile App
              </a>{" "}
              to sign in via QR code
            </p>
          </div>
        </div>
        {/* Register Section */}
        <div className="register-section mt-8 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-white text-center md:text-left">
            <p>Don&apos;t have an account?</p>
            <Link to="/register">
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300">
                Create one now!
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 text-white text-center md:text-right mt-4 md:mt-0">
            <p>
              It&apos;s free and easy. Discover thousands of games to play with
              millions of new friends.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
