import Under90kBoxHeader from "./Under90kBoxHeader";
import { under90kGameDatas } from "../../../utils/datas";
import Under90kCard from "./Under90kCard";

const Under90kBox = () => {
    return (
        <div className="max-w-[1100px] text-white mx-auto mt-10 relative">
            <Under90kBoxHeader />
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
                {under90kGameDatas.map((game, index) => (
                    <Under90kCard key={index} image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
                ))}
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
    );
};

export default Under90kBox;
