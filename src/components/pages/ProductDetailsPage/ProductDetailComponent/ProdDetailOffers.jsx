import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";
import { useState, useEffect } from "react";
import { addToCart } from "../../../../API/cart";
import axios from "axios";

const ProdDetailOffers = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const gameData = steamDataSet[id];
  const offers = gameData.offers;
  const prices = gameData.price;

  const [addToCartMessage, setAddToCartMessage] = useState("");

  const reloadPage = () => {
    window.location.reload();
  };

  const handleAddToCart = async (offerIndex) => {
    try {
      const response = await addToCart(offerIndex, offers);
      setAddToCartMessage(`Added ${offers[offerIndex].name} to cart!`);
      alert(`Added ${offers[offerIndex].name} to cart!`);
      reloadPage();
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Failed to add item to cart.";
      console.error("Error adding to cart:", errorMessage);
      setAddToCartMessage(errorMessage);
      alert(errorMessage);
    }
  };

  useEffect(() => {
    if (addToCartMessage) {
      const timer = setTimeout(() => {
        setAddToCartMessage("");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [addToCartMessage]);
  
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      try {
        const productResponse = await axios.get ("http://localhost:3001/api/products/" )
          setProducts(productResponse.data.data);
          console.log(productResponse.data.data)
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    },[])
  
    const showProductData = () => {
      return products.map((product, index) => {
        return (
          <div className="card p-4 mt-6 mb-2 rounded relative" key={index}>
        <p className="text-2xl font-semibold">
          {typeof product === "object" ? product.name : "Name not available"}
        </p>
        <div className="gamePurchaseContainer text-base text-right absolute right-1">
          <div className="gamePurchaseButton pl-3 pr-0 bg-black rounded text-sm">
            <span>
              Rp.{product?.PriceLists[0]?.price || "Price not available"}{" "}
              <button
                className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded"
                onClick={() => handleAddToCart(index)}
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      </div>
        )
      })
    }
  
    return (
      <>
        {addToCartMessage && <p>{addToCartMessage}</p>}
        {showProductData()}
      </>
    );
  };

export default ProdDetailOffers;
