import HeadingFeatures from "../HeadingFeatures";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../assets/swiper.css";
import OutlineButton from "./OutlineButton";
import PropTypes from "prop-types";

const FeatureContainer = ({ title, children, button = null, button2 = null,  classProps = "" }) => {
    const pagination = {
        clickable: true,
    };

    return (
        <div className={`max-w-[1100px] text-white mx-auto relative ${classProps}`}>
            <HeadingFeatures title={title}>
                {button && (
                    <>
                        <OutlineButton>{button}</OutlineButton>
                        {button2 && <OutlineButton classProps="ml-2">{button2}</OutlineButton>}
                    </>
                )}
            </HeadingFeatures>
            <Swiper loop navigation modules={[Navigation, Pagination]} spaceBetween={8} slidesPerView={4} pagination={pagination}>
                {children}
            </Swiper>

            {/* <div className="absolute gradient-arrow-left top-1/2 bottom-1/2 -translate-y-1/2 flex py-[3.9rem] px-3 -left-[3.3rem] justify-center items-center cursor-pointer">
                <div>
                    <i className="fa-solid fa-chevron-left text-white text-5xl" />
                </div>
            </div>
            <div className="absolute gradient-arrow-right top-1/2 bottom-1/2 -translate-y-1/2 flex py-[3.9rem] px-3 -right-[3.4rem] justify-center items-center cursor-pointer">
                <div>
                    <i className="fa-solid fa-chevron-right text-white text-5xl" />
                </div>
            </div> */}

            {/* <div className="grid grid-cols-cards gap-3 overflow-x-auto pb-3">
                {under90kGameDatas.map((game, index) => (
                    <GameCard key={index} image={game.image} price={game.price} isDiscount={game.isDiscount} discountedPrice={game.discountedPrice} discountValue={game.discountValue} />
                ))}
            </div> */}
            {/* <div className="swiper-button-prev flex items-center justify-center w-10 h-10 bg-black rounded-full text-white">Prev</div>
                <div className="swiper-button-next flex items-center justify-center w-10 h-10 bg-black rounded-full text-white">Next</div> */}
            {/* <div className="carousel-thumbs flex gap-1 justify-center mt-3">
                <div className="carousel-thumb focus w-4 h-2 rounded-sm cursor-pointer" />
                <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
                <div className="carousel-thumb w-4 h-2 rounded-sm cursor-pointer" />
            </div> */}
        </div>
    );
};

FeatureContainer.propTypes = {
    title: PropTypes.string,
    button: PropTypes.string,
    button2: PropTypes.string,
    children: PropTypes.node,
    classProps: PropTypes.string,
};

export default FeatureContainer;
