/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { addToCart } from "../../../../API/cart";

const formatPrice = (price) => {
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
};

const ProdDetailOffers = (props) => {
  const [addToCartMessage, setAddToCartMessage] = useState("");

  const reloadPage = () => {
    window.location.reload();
  };

  const handleAddToCart = async (offerIndex) => {
    try {
      const response = await addToCart(offerIndex);
      console.log(response)
      setAddToCartMessage(`Added to cart!`);
      alert(`Added to cart!`);
      reloadPage();
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to add item to cart.";
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

  // Punya mas der
  const product = props.product;
  const PriceList = product?.PriceLists;
  const discount = (discountValue, normalPrice) => {
    // {((offer?.discount / 100) * offer?.price )}
    return (discountValue / 100) * normalPrice;
  };

  console.log(PriceList);

  const offersElements = PriceList?.map((offer, index) => (
    <div className="card p-4 mt-6 mb-2 rounded relative w-full" key={index}>
      <p className="text-2xl font-semibold">
        Buy {product?.name} {offer?.offerName}
      </p>
      <div className="text-base text-right absolute right-1">
        <div className="pl-3 pr-0 bg-black rounded text-sm">
          <span>
            {/* {formatPrice(offer?.price)}; */}
            {offer?.discount > 0 ? (
              <>
                <span className="bg-lime-300 p-2 text-lg text-green-500">{offer?.discount} % </span>
                <span className="line-through ">{formatPrice(offer?.price)} </span>
                <span className="text-discount"> {formatPrice(offer?.price - discount(offer?.discount, parseInt(offer?.price)))} </span>
              </>
            ) : (
              <span>{formatPrice(offer?.price)}</span>
            )}
            <button className="m-1 bg-buyBg py-2 px-4 rounded" onClick={() => handleAddToCart(offer.id)}>
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
