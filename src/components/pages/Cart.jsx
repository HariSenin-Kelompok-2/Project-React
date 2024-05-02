import "../../assets/cart.css";

const Cart = () => {
    return (
        <div className="lg:flex lg:flex-col lg:justify-between lg:min-h-screen">
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
                            <button className="bg-[#5c7e10] p-1 px-2 text-black">
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
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">Login</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">STORE</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">COMMUNITY</a>
                    <a href="#" className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">SUPPORT</a>
                    <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
                    <p className="px-2 text-[1rem] text-[#6f7071]">
                        Get the Steam Mobile App
                    </p>
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
                                © Valve Corporation. All rights reserved. All trademarks
                                are property of their respective owners in the US and other
                                countries.
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
            <main>
                {/* Cart */}
                <div className="flex justify-end text-xs mb-1 mx-[2vh] lg:mx-[10vh] xl:mx-[20vh] mt-[1rem]">
                    <a href="cart.html" className="bg-[#5c7e10] px-6 py-1 text-center hover:bg-[#7ea64b] text-white">
                        <i className="fa-sharp fa-solid fa-cart-shopping" /> <span>Cart (1)</span>
                    </a>
                </div>
                {/* End Cart */}
                {/* container start */}
                <div className="bg-[#234282] text-white text-[0.4rem] md:text-sm mx-[2vh] lg:text-md lg:mx-[10vh] xl:mx-[20vh]">
                    <div className="grid grid-cols-3 p-1 md:p-4">
                        <div className="col-span-2">
                            <a href className="mr-2 hover:text-[#38a4d2]">Your Store</a>
                            <a href className="mr-2 hover:text-[#38a4d2]">New &amp; Noteworthy</a>
                            <a href className="mr-2 hover:text-[#38a4d2]">Categories</a>
                            <a href className="mr-2 hover:text-[#38a4d2]">Point Shop</a>
                            <a href className="mr-2 hover:text-[#38a4d2]">News</a>
                            <a href className="mr-2 hover:text-[#38a4d2]">Labs</a>
                        </div>
                        <div className="grid justify-end h-1">
                            <button type="submit" className="bg-[#2682a9] md:p-1">
                                <input type="text" placeholder="search" className="focus:outline-none text-white bg-[#2682a9]" />
                                <i className="fas fa-search" style={{ color: 'black' }} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* container end */}
                {/* FEATURE : CART */}
                <div className="container_content">
                    <div className="breadcrumb_container">
                        <a href="#">Home <span className="span_breadcrumb">&gt; Your Shopping Cart</span></a>
                    </div>
                    <div className="container_title">Your Shopping Cart</div>
                    <div className="content_cart">
                        <div className="left_col">
                            <div className="game_card_container">
                                <div className="game_card">
                                    <div className="img_games">
                                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/307690/header.jpg?t=1602800785" alt="sleeping dogs" />
                                    </div>
                                    <div className="detail_games">
                                        <div className="games_details">
                                            <div className="titles">
                                                Sleeping Dogs: Definitive Edition
                                            </div>
                                            {/* Icon windows & mac os */}
                                            <div className="row_notes row_icon">
                                                <div className="icon_container">
                                                    <span className="icon">
                                                        <span className="windows_icon"><i className="fab fa-windows" /></span>
                                                        <span className="apple_icon"><i className="fab fa-apple" /></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="price_container">
                                                <span className="games_price">
                                                    <div className="price">Rp 114 999</div>
                                                </span>
                                            </div>
                                            {/* Button in details games card */}
                                            <div className="row_notes layout_dd">
                                                <div className="dropdown_container">
                                                    <div className="dropdown_layout dd_dialog_box dd_dialog_input">
                                                        <div className="dropdown">
                                                            <select name="option_gift" id="option_gift">
                                                                <option value="#">For my account</option>
                                                                <option value="#">
                                                                    For my account: private
                                                                </option>
                                                                <option value="#">This is a gift</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="crud_btn btn_add_rem">
                                                    <div className="add_btn">Add</div>
                                                    |
                                                    <div className="remove_btn">Remove</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="interaction_btn">
                                <button className="button_container">Continue Shopping</button>
                                <div className="remove_container_btn">Remove all items</div>
                            </div>
                        </div>
                        <div className="right_col">
                            {/* Payment Card */}
                            <div className="payment_card_container">
                                <div className="row mb-10">
                                    <div className="estimatetotal">Estimate total</div>
                                    <div className="totalestimateprice">Rp 114 999</div>
                                </div>
                                <div className="row mb-10 notePayment">
                                    Sales tax will be calculated during checkout where applicable
                                </div>
                                <button className="payment_btn">Continue to payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full lg:block hidden">
                <div className="bg-[#2a475e] h-full p-4 text-[8px] lg:text-[18px]">
                    {/* baris satu */}
                    <div className="grid grid-cols-7 md:grid-cols-4 lg:grid-cols-4 lg:justify-end text-center text-white">
                        <div className="w-[50px] md:w-auto grid md:justify-end lg:mr-2">
                            <img src="assets/footer/logo_valve_footer.png" className="w-full md:w-[100px]" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-2 lg:col-span-2">
                            <p>
                                © Valve Corporation. All rights reserved. All trademarks
                                are property of their respective owners in the US and other
                                countries. VAT included in all prices where applicable.
                            </p>
                        </div>
                        <div className="grid md:ml lg:ml-4 w-[50px] md:w-[200px]">
                            <img src="assets/footer/logo_steam_footer.png" className="w-full md:w-[100px]" alt="" />
                        </div>
                    </div>
                    {/* baris satu end */}
                    {/* baris dua */}
                    <div className="text-center mb-2 text-white mt-2">
                        <a href className="mr-2 hover:text-[#38a4d2]">Privacy Policy</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Legal</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Steam Subscriber</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Agreement</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Refunds</a>
                    </div>
                    {/* baris dua end */}
                    {/* baris ketiga */}
                    <div className="bg-white w-full h-[1px] mx-auto mt-2" />
                    {/* baris ketiga end */}
                    {/* baris keempat */}
                    <div className="text-center mb-2 text-white mt-2">
                        <a href className="mr-2 hover:text-[#38a4d2]">About Valve</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Steamworks</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Jobs</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Steam Distribution</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Gifts Cards</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">Steam</a>
                        <a href className="mr-2 hover:text-[#38a4d2]">@steam-games</a>
                    </div>
                    {/* baris keempat end */}
                </div>
            </footer>
        </div>
    );
};

export default Cart