import CartAndNavbar from "../elements/CartAndNavbar/CartAndNavbar";
import Footer from "../elements/Footer/Footer";
import Header from "../elements/Header/Header";

const Cart = () => {
    return (
        <div className="lg:flex lg:flex-col lg:justify-between lg:min-h-screen bg-[#1b2838]">
            <Header />
            <main>
                <CartAndNavbar />
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
            <Footer />
        </div>
    );
};

export default Cart