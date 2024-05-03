import { useState, useEffect } from "react";
import "../../assets/style.css";
import ProdDetailBody from "../elements/ProductDetailComponent/ProdDetailBody";
import ProdDetailHeader from "../elements/ProductDetailComponent/ProdDetailHeader";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

      return (
        <div id="container" className="bg-steamBg text-headerFontColor p-60 pt-4">
        <ProdDetailHeader/>
        <ProdDetailBody/>
        </div>
      );
    };

export default ProductDetails;