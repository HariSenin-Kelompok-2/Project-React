import ProdDetailBody from "./ProductDetailComponent/ProdDetailBody";
import ProdDetailHeader from "./ProductDetailComponent/ProdDetailHeader";

import Header from "../../elements/Header/Header";
import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Footer from "../../elements/Footer/Footer";

const ProductDetailsPage = () => {
    return (
        <div className="bg-steamBg">
            <Header />
            <CartAndNavbar />
            <div className="px-4">
                <main className="bg-steamBg text-headerFontColor max-w-[1100px] mx-auto mb-16 mt-5">
                    <ProdDetailHeader />
                    <ProdDetailBody />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
