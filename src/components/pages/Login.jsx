const Login = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* header */}
            <div className="bg-[#171a21] h-full p-2 md:p-5 w-full">
                <div className="grid grid-cols-10 lg:grid-cols-4 text-center text-white justify-between">
                    <div className="lg:hidden col-span-1 flex justify-center items-center">
                        {/* Hamburger Button */}
                        <button id="hamburger-btn" className="text-white focus:outline-none">
                            <i className="fa-solid fa-bars" style={{ color: '#ffffff' }} />
                        </button>
                    </div>
                    <div className="flex justify-center items-center lg:justify-end col-span-9 lg:col-span-1">
                        <img src="assets/login/steamlogo.png" className="w-[9vh] sm:w-[10vh] md:w-[20vh]" alt="" />
                    </div>
                    <div className="lg:block md-[18px] text-[0.8rem] mt-[0.5vh] md:text-[2vw] lg:text-[1.2vw] lg:col-span-2 hidden sm:hidden md:hidden">
                        <a href="homepage.html" className="mr-2 hover:text-[#38a4d2]">STORE</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">COMMUNITY</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">ABOUT</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">SUPPORT</a>
                    </div>
                    <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block">
                        <div className="flex justify-start space-x-2">
                            <button className="green-install p-1 px-2 text-black">
                                <i className="fa-solid fa-download mr-2" />install steam
                            </button>
                            <a href="login.html">Login</a>
                            <a href="register.html">Register</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
            {/* Hamburger Menu */}
            <div id="mobile-menu" className="bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50">
                <div className="grid grid-rows-4 gap-4">
                    <a href="login.html" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">Login</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">STORE</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">COMMUNITY</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">SUPPORT</a>
                    <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
                    <p className="px-2 text-[1rem] text-[#6f7071]">Get the Steam Mobile App</p>
                    <p className="px-2 text-[1rem] text-[#6f7071]">View Desktop website</p>
                </div>
                {/* Footer */}
                <footer className="w-full absolute bottom-0 mb-4 p-4">
                    <div className="h-full text-[0.6rem] lg:text-[18px]">
                        <div className="w-[13vw] md:w-auto grid md:justify-end lg:mr-2">
                            <img src="assets/footer/logo_valve_footer.png" className="w-full md:w-[100px]" alt="" />
                        </div>
                        <div>
                            <p>
                                © Valve Corporation. All rights reserved. All trademarks are
                                property of their respective owners in the US and other countries.
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                                <a href="#" className="hover:text-white">Legal</a>
                                <a href="#" className="hover:text-white">Steam Subscriber Agreement</a>
                                <a href="#" className="hover:text-white">Refunds</a>
                            </p>
                        </div>
                    </div>
                </footer>
                {/* Footer end */}
            </div>
            {/* Hamburger Menu end */}
            <div className="container mx-auto mt-7 p-8 lg:w-2/3">
                {/* Login Container */}
                <div className="login-container flex flex-col md:flex-row">
                    <div className="login-form w-full md:mr-6">
                        <h2>Sign In</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="account_name">Sign in with Account Name:</label>
                                <input type="text" id="account_name" name="account_name" className="w-full rounded-md bg-gray-700 border-none px-4 py-2" placeholder="Enter your account name" required />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" className="w-full rounded-md bg-gray-700 border-none px-4 py-2" placeholder="Enter your password" required />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300">Sign
                                In</button>
                        </form>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    {/* Sign in with QR */}
                    <div className="login-with-qr flex flex-col justify-center items-center mt-6 md:mt-0">
                        <p className="text-blue-400">Or</p>
                        <a href="#" className="text-blue-400 hover:underline">Sign in with QR</a>
                        {/* QR Code Image */}
                        <div>
                            <img src="https://www.hallmarknameplate.com/wp-content/uploads/2022/08/qr-code-print5-293x300.png" alt="QR Code" />
                        </div>
                        {/* Paragraf for Mobile App */}
                        <p className="text-white mt-4">Use the <a href="#" className="underline">Steam Mobile App</a> to sign in via QR
                            code</p>
                    </div>
                </div>
                {/* Register Section */}
                <div className="register-section mt-8 flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 text-white text-center md:text-left">
                        <p>Don't have an account?</p>
                        <a href="register.html">
                            <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300">Create
                                one now!</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 text-white text-center md:text-right mt-4 md:mt-0">
                        <p>It's free and easy. Discover thousands of games to play with millions of new friends.</p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-[#171A21] mt-10 pb-10 px-10 smFooter:hidden font-sans">
                <section>
                    <div className="h-[2rem]" />
                    <hr className="mb-2" />
                </section>
                <section>
                    <div className="flex h-[4rem] gap-1 bg-[171A21]">
                        <div className="w-1/6 my-auto">
                            <div className="mr-3">
                                <img src="./assets/img/logo-footer/valve.png" alt="" />
                            </div>
                        </div>
                        <div className="w-4/6">
                            <div className="text-gray-400">
                                © 2024 Valve Corporation. All rights reserved. All trademarks are
                                property of their respective owners in the US and other countries.
                                VAT included in all prices where applicable.
                            </div>
                        </div>
                        <div className="w-1/6 my-auto">
                            <div className="flex justify-end">
                                <img src="./assets/img/logo-footer/logo_steam_footer.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-8" />
                </section>
                <section>
                    <div className="flex justify-between mt-4">
                        <div className="hover:text-white border-r-2 border-gray-600 text-gray-400 text-center w-full">
                            About Valve
                        </div>
                        <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">
                            Steamworks
                        </div>
                        <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">
                            Jobs
                        </div>
                        <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">
                            Support
                        </div>
                        <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">
                            Gift Cards
                        </div>
                        <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">
                            Steam
                        </div>
                        <div className="hover:text-white w-full text-center text-gray-400">
                            @steam
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;