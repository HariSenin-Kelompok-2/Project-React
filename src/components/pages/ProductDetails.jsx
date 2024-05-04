import ProdDetailBody from "../elements/ProductDetailComponent/ProdDetailBody";
import ProdDetailHeader from "../elements/ProductDetailComponent/ProdDetailHeader";

import Header from "../elements/Header/Header";
import CartAndNavbar from "../elements/CartAndNavbar/CartAndNavbar";

const ProductDetails = () => {
    return (
        <>
            <Header />
            <CartAndNavbar />
            <div id="container" className="bg-steamBg text-headerFontColor p-60 pt-4">
                <ProdDetailHeader />
                <ProdDetailBody />
            </div>
        </>
    );
};

export default ProductDetails;
