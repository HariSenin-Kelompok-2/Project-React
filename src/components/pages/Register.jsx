import "../../assets/register.css";

const Register = () => {
    return (
        <div>
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
            <div className="container-register mt-8">
                <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_email">Confirm Your Email Address:</label>
                        <input type="email" id="confirm_email" name="confirm_email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="country">Country of Residence:</label>
                        <input type="text" id="country" name="country" required />
                    </div>
                    <div className="recaptcha-container">
                        <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" />
                        <p>Please complete the reCAPTCHA verification</p>
                    </div>
                    <div className="age-checkbox-label">
                        <input type="checkbox" id="age_checkbox" name="age_checkbox" required />
                        <span style={{ fontSize: '0.8rem' }}>
                            I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve
                            Privacy Policy
                        </span>
                    </div>
                    <a href="#" className="btn">Continue</a>
                </form>
            </div>
            {/* Footer */}
            <div className="bg-[#171A21] pb-10 px-10 smFooter:hidden font-sans mt-10">
                <section>
                    <div className="h-[2rem]" />
                    <hr className="mb-2" />
                </section>
                <section>
                    <div className="flex h-[4rem] gap-1 bg-[171A21]">
                        <div className="w-1/6 my-auto">
                            <div className="mr-3">
                                <img src="./assets/img/logo-footer/valve.png" />
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
                                <img src="./assets/img/logo-footer/logo_steam_footer.png" />
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
}
export default Register;