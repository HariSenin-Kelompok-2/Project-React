import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001"; 

const ProdDetailOffers = () => {
  const params = useParams();
  const id = parseInt(params.id); 
  const gameData = steamDataSet[id];
  const offers = gameData.offers;
  const prices = gameData.price; 

  const [addToCartMessage, setAddToCartMessage] = useState("");
  const [refreshKey, setRefreshKey] = useState(0); 

  const reloadPage = () => {
    window.location.reload();
  };

  const addToCart = async (offerIndex) => {
    try {
      const response = await axios.post(`${API_URL}/api/carts`, {
        priceListId: gameData.priceList_id, 
      });
      console.log("Item added to cart:", response.data);
      setAddToCartMessage(`Added ${offers[offerIndex]} to cart!`);
      alert(`Added ${offers[offerIndex]} to cart!`); 
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

  const offersElements = offers.map((offer, index) => (
    <div className="card p-4 mt-6 mb-2 rounded relative" key={index}>
      <p className="text-2xl font-semibold">{offer}</p>
      <div className="gamePurchaseContainer text-base text-right absolute right-1">
        <div className="gamePurchaseButton py-2.5 pl-4 pr-0 bg-black rounded">
          <span>
            {prices[index] || "Price not available"}{" "}
            <button
              className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded"
              onClick={() => addToCart(index)}
            >
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {addToCartMessage && <p>{addToCartMessage}</p>}
      {offersElements}
    </>
  );
};

export default ProdDetailOffers;
