import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";

const ProdDetailOffers = () => {
    const params = useParams();
    const id = params.id;
    const gameData = steamDataSet[id];
    const offers = gameData.offers;
    const price = gameData.price;
 
    const offersElements = gameData.offers.map((offer,index) => (
            <div className="card p-4 mt-6 mb-2 rounded relative" key={index}>
                        <p className="text-2xl font-semibold">{offer}</p>
                        <div className="gamePurchaseContainer text-base text-right absolute right-1">
                            <div className="gamePurchaseButton py-2.5 pl-4 pr-0 bg-black rounded">
                                <span>
                                    {price[index] || "no price is available"} <span className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded">{price[index]}</span>
                                </span>
                            </div>
                        </div>
                    </div>
        )
    );
    return <>{offersElements}</>;
}

export default ProdDetailOffers 