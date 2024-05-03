import { useEffect, useRef, useState } from "react";
import steamLogo from "../../../assets/images/steamlogo.png";
import valveLogoFooter from "../../../assets/images/logo_valve_footer.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hamburgerBtnRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!mobileMenuRef.current.contains(event.target) && !hamburgerBtnRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.body.addEventListener("click", handleOutsideClick);

        return () => {
            document.body.removeEventListener("click", handleOutsideClick);
        };
    }, []);



    return (
        <>
            {/* Hamburger Button */}
            {/* Mobile Menu */}
            <div ref={mobileMenuRef} id="mobile-menu" className={`bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50 ${isMenuOpen ? "show" : ""}`}>
                <div className="grid grid-rows-4 gap-4">
                    <a href="login.html" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                        LOGIN
                    </a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                        STORE
                    </a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                        COMMUNITY
                    </a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                        SUPPORT
                    </a>
                    <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
                    <p className="px-2 text-[1rem] text-[#6f7071]">Get the Steam Mobile App</p>
                    <p className="px-2 text-[1rem] text-[#6f7071]">View Desktop website</p>
                </div>

                <footer className="w-full absolute bottom-0 mb-4 p-4">
                    <div className="h-full text-[0.6rem] lg:text-[18px]">
                        <div className="w-[13vw] md:w-auto grid md:justify-end lg:mr-2">
                            <img src={valveLogoFooter} className="w-full md:w-[100px]" alt="" />
                        </div>
                        <div>
                            <p>
                                © Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                                <a href="#" className="hover:text-white">
                                    Legal
                                </a>
                                <a href="#" className="hover:text-white">
                                    Steam Subscriber Agreement
                                </a>
                                <a href="#" className="hover:text-white">
                                    Refunds
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            {/* Hamburger ON END */}
            {/* Hamburger Menu end */}

            {/* Header */}
            <div className="bg-[#171a21] w-full">
                <div className="grid grid-cols-10 text-center text-white lg:grid-cols-4 lg:max-w-[1100px] mx-auto">
                    <div className="col-span-1 flex justify-center items-center lg:hidden">
                        {/* Hamburger Button */}
                        <button id="hamburger-btn" ref={hamburgerBtnRef} className="text-white focus:outline-none" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
                        </button>
                    </div>
                    <div className="flex -ml-9 justify-center items-center col-span-9 lg:col-span-1 lg:justify-start my-4 lg:ml-0">
                        <a href="">
                            <img src={steamLogo} className="w-[15vh] md:w-auto" alt="steam" />
                        </a>
                    </div>
                    <div className="hidden text-xl mt-[0.5vh] lg:flex lg:col-span-2 lg:justify-center lg:items-center lg:font-medium lg:gap-2">
                        <a href="#" className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                            STORE
                        </a>
                        <a href="#" className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                            COMMUNITY
                        </a>
                        <a href="#" className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                            ABOUT
                        </a>
                        <a href="#" className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                            SUPPORT
                        </a>
                    </div>
                    <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block lg:pt-1">
                        <div className="flex justify-end gap-2 text-white text-xs">
                            <button className="bg-[#5c7e10] p-1 px-2">
                                <i className="fa-solid fa-download mr-2" />
                                install steam
                            </button>
                            <a href="login.html" className="text-[#b8b6b4] hover:text-white">login</a>
                            <span className="text-[#b8b6b4]">|</span>
                            <a href="register.html" className="text-[#b8b6b4] hover:text-white">register</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
        </>
    );
};

export default Header;
