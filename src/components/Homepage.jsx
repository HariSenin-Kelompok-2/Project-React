import "../assets/homepage.css"
import "../assets/style.css"
import steamLogo from "../assets/images/steamlogo.png"
import valveLogoFooter from "../assets/images/logo_valve_footer.png"
import steamLogoFooter from "../assets/images/logo_steam_footer.png"

const Homepage = () => {
    return (
        <>
            {/* header */}
            <div className="bg-[#171a21] h-full p-2 md:p-5 w-full">
                <div className="grid grid-cols-10 lg:grid-cols-4 text-center text-white justify-between">
                    <div className="lg:hidden col-span-1 flex justify-center items-center">
                        {/* Hamburger Button */}
                        <button id="hamburger-btn" className="text-white focus:outline-none">
                            <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
                        </button>
                    </div>
                    <div className="flex justify-center items-center lg:justify-end col-span-9 lg:col-span-1">
                        <img src={steamLogo} className="w-[9vh] sm:w-[10vh] md:w-[20vh]" alt="" />
                    </div>
                    <div className="lg:block md-[18px] text-[0.8rem] mt-[0.5vh] md:text-[2vw] lg:text-[1.2vw] lg:col-span-2 hidden sm:hidden md:hidden">
                        <a href="" className="mr-2 hover:text-[#38a4d2]">
                            STORE
                        </a>
                        <a href="" className="mr-2 hover:text-[#38a4d2]">
                            COMMUNITY
                        </a>
                        <a href="" className="mr-2 hover:text-[#38a4d2]">
                            ABOUT
                        </a>
                        <a href="" className="mr-2 hover:text-[#38a4d2]">
                            SUPPORT
                        </a>
                    </div>
                    <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block">
                        <div className="flex justify-start space-x-2">
                            <button className="bg-[#5c7e10] p-1 px-2 text-black">
                                <i className="fa-solid fa-download mr-2" />
                                install steam
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
                    <a href="login.html" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                        Login
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
                {/* Footer */}
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
                {/* Footer end */}
            </div>
            {/* Hamburger Menu end */}
            {/* Andi */}
            <div className="flex justify-center items-center flex-col text-white bg-no-repeat bg-[#1b2838]">
                {/* Cart */}
                <div className="md:w-4/5 md:mt-2 flex justify-end text-sm">
                    <a href="cart.html" className="bg-[#5c7e10] px-6 py-1 text-center hover:bg-[#7ea64b]">
                        <i className="fa-sharp fa-solid fa-cart-shopping" /> <span>Cart (1)</span>
                    </a>
                </div>
                {/* End Cart */}
                {/* Feature: NavBar */}
                <nav className="md:w-4/5 w-full md:mt-1 bg-gradient-to-r from-sky-700 via-sky-700 to-blue-950">
                    <div className="md:flex md:justify-between">
                        <ul className="p-0 md:flex md:items-center -z-1 md:z-auto md:static">
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    Your store
                                </a>
                            </li>
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    New &amp; Noteworthy
                                </a>
                            </li>
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    Categories
                                </a>
                            </li>
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    Points Shop
                                </a>
                            </li>
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    News
                                </a>
                            </li>
                            <li className="px-4 h-full content-center md:my-0">
                                <a href="#" className="text-white">
                                    Labs
                                </a>
                            </li>
                        </ul>
                        <div className="relative text-white md:w-auto w-full my-2 mr-1">
                            <input
                                className="w-full border border-cyan-400 bg-cyan-800 bg-opacity-95 h-10 pl-3 pr-16 rounded-md text-sm focus:outline-none shadow-inner hover:border-white hover:border-32 italic"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute right-0 top-0 my-2 mr-1 shadow-2xl">
                                <svg className="text-transparent h-6 w-6 fill-current" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={53} height={52} rx="1.5" fill="#63B5E4" stroke="#84C8EE" />
                                    <path d="M25 32.2166L33.3018 25L42.4866 35.5659C43.2113 36.3996 43.123 37.6628 42.2893 38.3875L37.0064 42.9799C36.1727 43.7045 34.9095 43.6162 34.1848 42.7826L25 32.2166Z" fill="#2A3E5A" />
                                    <circle cx={21} cy={19} r={11} stroke="#2A3E5A" strokeWidth={2} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* End feature: navbar */}
                {/* Feature: Recommended */}
                <div className="mt-7 w-4/5">
                    <h2 className="text-white mb-2">FEATURED &amp; RECOMMENDED</h2>
                    <div className="flex flex-row h-full content-center w-full">
                        <div className="lg:w-2/3">
                            <a href="product-detail/apexProdDetail.html">
                                <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1710268442" alt="Game Apex Legend" />
                            </a>
                        </div>
                        <div className="bg-[#0B151E] md:block hidden lg:w-1/3">
                            <h3 className="text-white my-3 ml-3">Apex Legends™</h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mr-2">
                                <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_b5051a24edf949582756c313eebf6f61582ce25f.116x65.jpg?t=1708706824" />
                                <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_215051168b1b52177d802ab36e40a6f874db404a.116x65.jpg?t=1708706824" />
                                <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_a47a8c9b09393bd4cddfeb2891beb4d1eafb2897.116x65.jpg?t=1708706824" />
                                <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_c75144f4a9c3771806a72ff939752c15456aa557.116x65.jpg?t=1708706824" />
                            </div>
                            <h4 className="mt-2 ml-3">Now Available</h4>
                            <p className="mt-1 ml-3">Free to Play</p>
                        </div>
                    </div>
                </div>
                {/* End feature: Recommended */}
                {/* Feature: Special Offers */}
                <div className="mt-5 w-4/5">
                    <h2 className="mb-2">SPECIAL OFFERS</h2>
                    <div className="grid grid-cols-2 w-full gap-5 md:grid-cols-3">
                        <a href="product-detail/cs2ProdDetail.html" className="bg-gradient-to-tl from-sky-600 to-sky-700">
                            <img className="w-full h-3/5 object-cover" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631" alt="Spesial Offers" />
                            <div className="p-2">
                                <h4>MIDWALK DEAL</h4>
                                <p>Offers ends 30 mar @ 12.00am</p>
                            </div>
                        </a>
                        <a href="product-detail/pubgProdDetail.html" className="bg-gradient-to-tl from-sky-600 to-sky-700">
                            <img className="w-full h-3/5 object-cover" src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_616x353.jpg?t=1710727439" alt="Spesial Offers" />
                            <div className="p-2">
                                <h4>MIDWALK DEAL</h4>
                                <p>Offers ends 30 mar @ 12.00am</p>
                            </div>
                        </a>
                        <div className="flex flex-col gap-3">
                            <a href="product-detail/kofProdDetail.html" className="bg-[#ACDBF4] text-black md:block hidden">
                                <img className="w-full h-4/5 object-cover" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_616x353.jpg?t=1701397336" alt="" />
                                <h5 className="my-1 p-2">Today&apos;s Deal!</h5>
                            </a>
                            <a href="product-detail/kofProdDetail.html" className="bg-[#ACDBF4] text-black md:block hidden">
                                <img className="w-full h-4/5 object-cover" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_616x353.jpg?t=1701397336" alt="" />
                                <h5 className="my-1 p-2">Today&apos;s Deal!</h5>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Feature: Special Offers */}
            </div>
            {/* Fariz */}
            <div className="bg-[#1b2838] pt-10 px-6">
                {/* Feature: Browse by Category */}
                <div className="max-w-[1100px] text-white mx-auto mb-16 relative">
                    <h2 className="uppercase mb-5 tracking-wider">Browse by Category</h2>
                    <div className="absolute gradient-arrow-left top-1/2 bottom-1/2 -translate-y-1/2 -left-[3.9rem] flex py-[4.2rem] px-4 justify-center items-center cursor-pointer">
                        <div>
                            <i className="fa-solid fa-chevron-left text-white text-5xl" />
                        </div>
                    </div>
                    <div className="absolute gradient-arrow-right top-1/2 bottom-1/2 -translate-y-1/2 -right-[3.9rem] flex py-[4.2rem] px-4 justify-center items-center cursor-pointer">
                        <div>
                            <i className="fa-solid fa-chevron-right text-white text-5xl" />
                        </div>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-5 tracking-widest text-lg font-semibold relative">
                        <a href="#" className="block grow relative shrink-0">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=english" alt="" className="w-full h-full" />
                            <div className="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                                <span className="drop-shadow-lg">Racing</span>
                            </div>
                            <div className="absolute top-0 right-0 left-0 bottom-0 gradient-red"></div>
                        </a>
                        <a href="#" className="block grow relative shrink-0">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=english" alt="" className="w-full h-full" />
                            <div className="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                                <span className="drop-shadow-lg">Anime</span>
                            </div>
                            <div className="absolute top-0 right-0 left-0 bottom-0 gradient-blue"></div>
                        </a>
                        <a href="#" className="block grow relative shrink-0">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=english" alt="" className="w-full h-full" />
                            <div className="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                                <span className="drop-shadow-lg">Action</span>
                            </div>
                            <div className="absolute top-0 right-0 left-0 bottom-0 gradient-yellow"></div>
                        </a>
                        <a href="#" className="block grow relative shrink-0">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=english" alt="" className="w-full h-full" />
                            <div className="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                                <span className="drop-shadow-lg">Simulation</span>
                            </div>
                            <div className="absolute top-0 right-0 left-0 bottom-0 gradient-green"></div>
                        </a>
                    </div>
                    <div className="carousel-thumbs flex gap-1 justify-center mt-3">
                        <div className="carousel-thumb focus w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                    </div>
                </div>
                {/* END Feature: Browse by Category */}
                {/* Feature: Sign In */}
                <div className="max-w-[1100px] mx-auto text-center bg-[#00000033] p-6 mb-10 rounded-sm text-[#8f98a0] font-normal">
                    <span className="block mb-4">Sign in to view personalized recommendation</span>
                    <a href="login.html" className="inline-block rounded-sm sign-in-btn text-[#D2E885] mb-6 p-[1px] hover:text-white">
                        <span className="block rounded-t-[0.25rem] px-4 py-1">Sign In</span>
                    </a>
                    <span className="block">
                        Or{" "}
                        <a href="register.html" className="text-white hover:text-[#66c0f4]">
                            sign up
                        </a>{" "}
                        and join Steam for free
                    </span>
                </div>
                {/* END Feature: Sign In */}
                {/* Feature: Browse Steam (CATEGORY BY NEW RELEASE, SPECIALS, ETC)*/}
                <div className="max-w-[1100px] text-white mx-auto tracking-wider">
                    <h2 className="uppercase mb-2">Browse Steam</h2>
                    <div className="grid grid-cols-cards gap-3 text-center font-semibold lgNewRelease:grid-cols-2">
                        <a href="#" className="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg shadow-sm">
                            New Releases
                        </a>
                        <a href="#" className="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg shadow-sm">
                            Specials
                        </a>
                        <a href="#" className="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg shadow-sm">
                            Free Games
                        </a>
                        <a href="#" className="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg shadow-sm">
                            By User Tags
                        </a>
                    </div>
                </div>
                {/* END Feature: Browse Steam */}
                {/* Feature: Under 90k */}
                <div className="max-w-[1100px] text-white mx-auto mt-10 relative">
                    <div className="flex justify-between items-end mb-1.5">
                        <h2 className="uppercase tracking-wider flex-1">Under RP 90 000</h2>
                        <div className="flex-1 text-right">
                            <button className="uppercase border border-[#ffffff66] px-3 py-0.5 text-sm hover:border-white">Under RP 90 000</button>
                            <button className="uppercase border border-[#ffffff66] px-3 py-0.5 text-sm hover:border-white">Under Rp 45 000</button>
                        </div>
                    </div>
                    <div className="absolute gradient-arrow-left top-1/2 bottom-1/2 -translate-y-1/2 flex py-[3.9rem] px-3 -left-[3.3rem] justify-center items-center cursor-pointer">
                        <div>
                            <i className="fa-solid fa-chevron-left text-white text-5xl" />
                        </div>
                    </div>
                    <div className="absolute gradient-arrow-right top-1/2 bottom-1/2 -translate-y-1/2 flex py-[3.9rem] px-3 -right-[3.4rem] justify-center items-center cursor-pointer">
                        <div>
                            <i className="fa-solid fa-chevron-right text-white text-5xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-cards gap-3 overflow-x-auto pb-3">
                        <div className="relative gradient-game-cards group/game-card text-xs">
                            <a href="product-detail/ohDeerProdDetail.html">
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/2708450/header_292x136.jpg?t=1710877806" alt="" />
                                <div className="p-1 flex">
                                    <div className="px-1 py-0.5 text-discount bg-[#4c6b22]">
                                        <span className=" ">-20%</span>
                                    </div>
                                    <div className="px-1 py-0.5 bg-[#141f2c66]">
                                        <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice">
                                            Rp 90 999
                                        </span>
                                        <span className="text-discount">Rp 72 799</span>
                                    </div>
                                </div>
                            </a>
                            <button
                                id="gameCardMoreBtn"
                                className="absolute flex bg-white transition opacity-0 translate-x-1 right-1.5 top-1.5 px-2 py-[0.33rem] rounded-[0.15rem] shadow-moreMenu text-black gap-[0.15rem] group-hover/game-card:translate-x-0 group-hover/game-card:opacity-100 hover:bg-[#67c1f5] group/more-menu"
                            >
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                            </button>
                        </div>
                        <div className="relative gradient-game-cards group/game-card text-xs">
                            <a href="product-detail/phasmoProdDetail.html">
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/739630/header_292x136.jpg?t=1702309974" alt="" />
                                <div className="p-1 flex">
                                    <div className="px-1 py-0.5 bg-[#141f2c66]">
                                        <span className="text-white">Rp 89 999</span>
                                    </div>
                                </div>
                            </a>
                            <button className="absolute flex bg-white transition opacity-0 translate-x-1 right-1.5 top-1.5 px-2 py-[0.33rem] rounded-[0.15rem] shadow-moreMenu text-black gap-[0.15rem] group-hover/game-card:translate-x-0 group-hover/game-card:opacity-100 hover:bg-[#67c1f5] group/more-menu">
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                            </button>
                        </div>
                        <div className="relative gradient-game-cards group/game-card text-xs">
                            <a href="product-detail/starwarsProdDetail.html">
                                <img src="https://cdn.akamai.steamstatic.com/steam/subs/401587/header_292x136.jpg?t=1574100600" alt="" />
                                <div className="p-1 flex">
                                    <div className="px-1 py-0.5 text-discount bg-[#4c6b22]">
                                        <span className=" ">-90%</span>
                                    </div>
                                    <div className="px-1 py-0.5 bg-[#141f2c66]">
                                        <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice">
                                            Rp 569 000
                                        </span>
                                        <span className="text-discount">Rp 56 900</span>
                                    </div>
                                </div>
                            </a>
                            <button className="absolute flex bg-white transition opacity-0 translate-x-1 right-1.5 top-1.5 px-2 py-[0.33rem] rounded-[0.15rem] shadow-moreMenu text-black gap-[0.15rem] group-hover/game-card:translate-x-0 group-hover/game-card:opacity-100 hover:bg-[#67c1f5] group/more-menu">
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                            </button>
                        </div>
                        <div className="relative gradient-game-cards group/game-card text-xs">
                            <a href="product-detail/backroomProdDetail.html">
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1943950/header_292x136.jpg?t=1710893725" alt="" />
                                <div className="p-1 flex">
                                    <div className="px-1 py-0.5 bg-[#141f2c66]">
                                        <span className="text-white">Rp 69 999</span>
                                    </div>
                                </div>
                            </a>
                            <button className="absolute flex bg-white transition opacity-0 translate-x-1 right-1.5 top-1.5 px-2 py-[0.33rem] rounded-[0.15rem] shadow-moreMenu text-black gap-[0.15rem] group-hover/game-card:translate-x-0 group-hover/game-card:opacity-100 hover:bg-[#67c1f5] group/more-menu">
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                                <div className="w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white" />
                            </button>
                        </div>
                    </div>
                    <div className="carousel-thumbs flex gap-1 justify-center mt-3">
                        <div className="carousel-thumb focus w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                        <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                    </div>
                </div>
                {/* END Feature: Under 90k */}
            </div>
            {/* Syawal */}
            <div className="bg-[#1B2838] pt-10">
                <div className="container w-4/5 mx-auto pb-10">
                    <section>
                        <div className="flex justify-between mb-2">
                            <h1 className="text-xl font-light text-white">POPULAR VR GAMES</h1>
                            <div className="text-xl font-light text-white border p-1">
                                <span>BROWSE ALL</span>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full overflow-x-auto">
                            <a href="product-detail/pistolWhipProdDetail.html" className="card w-1/4">
                                <div className="card-image">
                                    <img className="w-full" src="./assets/img/popular/image1.jpg" />
                                </div>
                                <div className="bg-[#3D7593] pl-2 pt-2 pb-2 w-full">
                                    <div className="card-harga bg-[#28435B] w-28 p-1 rounded-sm">
                                        <span className="text-white">Rp. 206.999</span>
                                    </div>
                                </div>
                            </a>
                            <a href="product-detail/skyrimProdDetail.html" className="card w-1/4">
                                <div className="card-image">
                                    <img className="w-full" src="./assets/img/popular/image2.jpg" />
                                </div>
                                <div className="bg-[#3D7593] pl-2 pt-2 pb-2 w-full">
                                    <div className="card-harga bg-[#28435B] w-28 p-1 rounded-sm">
                                        <span className="text-white">Rp. 114.999</span>
                                    </div>
                                </div>
                            </a>
                            <a href="product-detail/bladeSorceryProdDetail.html" className="card w-1/4">
                                <div className="card-image">
                                    <img className="w-full" src="./assets/img/popular/image3.jpg" />
                                </div>
                                <div className="bg-[#3D7593] pl-2 pt-2 pb-2 w-full">
                                    <div className="card-harga bg-[#28435B] w-28 p-1 rounded-sm">
                                        <span className="text-white">Rp. 135.999</span>
                                    </div>
                                </div>
                            </a>
                            <a href="product-detail/kayakVRProdDetail.html" className="card w-1/4">
                                <div className="card-image">
                                    <img className="w-full" src="./assets/img/popular/image4.jpg" />
                                </div>
                                <div className="bg-[#3D7593] pl-2 pt-2 pb-2 w-full">
                                    <div className="card-harga bg-[#28435B] w-28 p-1 rounded-sm">
                                        <span className="text-white">Rp. 799.999</span>
                                    </div>
                                </div>
                            </a>
                            <a href="product-detail/kayakVRProdDetail.html" className="card w-1/4">
                                <div className="card-image">
                                    <img className="w-full" src="./assets/img/popular/image4.jpg" />
                                </div>
                                <div className="bg-[#3D7593] pl-2 pt-2 pb-2 w-full">
                                    <div className="card-harga bg-[#28435B] w-28 p-1 rounded-sm">
                                        <span className="text-white">Rp. 206.999</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 gap-1">
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                            <div className="w-6 hover:bg-gray-200 bg-gray-400 h-4 rounded-sm" />
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-col bg-black mt-8 py-8 items-center">
                            <p className="text-3xl text-[#67C1F5] smFooter:text-2xl">Looking for recomendations ?</p>
                            <p className="text-gray-400">Sign in to view personalized recomendations</p>
                            <a href="login.html">
                                <button className="bg-[#729105] p-2 w-28 text-white rounded-sm">Sign In</button>
                            </a>
                            <span className="text-gray-400">
                                Or{" "}
                                <a href="register.html" className="text-white">
                                    sign up
                                </a>{" "}
                                and join Steam for free
                            </span>
                        </div>
                    </section>
                </div>
                {/* Footer */}
                <div className="bg-[#171A21] pb-10 px-10 smFooter:hidden font-sans">
                    <section>
                        <div className="h-[2rem]" />
                        <hr className="mb-2" />
                    </section>
                    <section>
                        <div className="flex h-[4rem] gap-1 bg-[171A21]">
                            <div className="w-1/6 my-auto">
                                <div className="mr-3">
                                    <img src={valveLogoFooter} />
                                </div>
                            </div>
                            <div className="w-4/6">
                                <div className="text-gray-400">
                                    © 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. VAT included in all prices where applicable.
                                </div>
                            </div>
                            <div className="w-1/6 my-auto">
                                <div className="flex justify-end">
                                    <img src={steamLogoFooter} />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-8" />
                    </section>
                    <section>
                        <div className="flex justify-between mt-4">
                            <div className="hover:text-white border-r-2 border-gray-600 text-gray-400 text-center w-full">About Valve</div>
                            <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">Steamworks</div>
                            <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">Jobs</div>
                            <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">Support</div>
                            <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">Gift Cards</div>
                            <div className="hover:text-white border-r-2 border-gray-600 w-full text-gray-400 text-center">Steam</div>
                            <div className="hover:text-white w-full text-center text-gray-400">@steam</div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Homepage;
