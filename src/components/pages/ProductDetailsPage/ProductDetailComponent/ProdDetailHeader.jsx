import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const ProdDetailHeader = () => {
    const params = useParams();
    const id = params.id;
    const gameData = steamDataSet[id];

const [mainContent, setMainContent] = useState({
        src: gameData.movies, 
        type: 'video'
    });

const handleThumbnailClick = (src, type) => {
        setMainContent({ src, type });
    };

    return (
        <>
            {/* product detail directory */}
            <div id="directory" className="text-fontColor text-sm">
                <p>{gameData.directory}</p>
            </div>
            {/* game title*/}
            <div id="gameName" className="flex justify-between">
                <h1 className="text-3xl mb-4">{gameData.game_name}</h1>
                <a href>
                    <button className="bg-buttonColorBg text-buttonColor pt-2 pr-4 pb-2 pl-4 rounded-sm">Community Hub</button>
                </a>
            </div>
            {/* product detail side desc */}
            <div id="headerBg" className="flex flex-row-reverse pb-4 max-w-full max-h-full">
                <div id="sideDesc" className="ml-4 min-w-60 w-screen max-w-full max-h-full">
                    <img src={gameData.header_image} alt="header" className="min-w-full" />
                    <p className="mobileH1 text-3xl mt-4">{gameData.game_name}</p>
                    <div className="quickDesc">
                        <p className="text-sm my-2">{gameData.short_description}</p>
                    </div>
                    {/* game ratings */}
                    <div className="reviews flex text-xs">
                        <div className="reviewsHeader flex-col text-fontColor">
                            <p>
                                <a href>Recent Reviews:</a>
                            </p>
                            <p>
                                <a href>All Reviews:</a>
                            </p>
                            <p className="leading-8">
                                <a href>Release Date:</a>
                            </p>
                            <p>
                                <a href>Developer:</a>
                            </p>
                            <p>
                                <a href>Publisher:</a>
                            </p>
                        </div>
                        <div className="reviewsScore ml-4 text-buttonColor flex flex-col">
                            <span>{gameData.Recent_Reviews}</span>
                            <span>{gameData.All_Time_Reviews}</span>
                            <span className="text-fontColor leading-8">{gameData.release_date}</span>
                            <span>{gameData.developers}</span>
                            <span>{gameData.publishers}</span>
                        </div>
                    </div>
                    {/* game tags */}
                    <div className="genreTag mt-2 mb-2 text-xs w-full">
                        <p className="text-fontColor">Popular user-defined tags for this product:</p>
                        {gameData.categories.map((_, index) => {
                            return <span key={index} className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5 mr-0.5">{gameData.categories[index]} </span>;
                        })}
                    </div>
                </div>
                {/* game preview */}
                <div id="mainVideo">
                {mainContent.type === 'video' ? (
                        <video controls>
                            <source src={mainContent.src} type="video/webm" />
                        </video>
                    ) : (
                        <img src={mainContent.src} alt="Main Preview" />
                    )}
                    <div className="thumbnails flex justify-between gap-1 mt-1 w-full h-18">
                        <Swiper 
                            modules={[
                                        Navigation, 
                                        Pagination, 
                                        Scrollbar, 
                                        A11y]} 
                            slidesPerView={5} 
                            className="lg:w-prodSliderSize lg:h-auto" 
                            scrollbar={{ draggable: true }}>
                            {gameData.screenshots.map((_, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img 
                                            src={gameData.screenshots[index]} 
                                            onclick = {()=> handleThumbnailClick(src, "image")}/>
                                    </SwiperSlide>
                                );
                            })}
                           {gameData.screenshots.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={src}
                                        alt={`Screenshot ${index + 1}`}
                                        className="thumbnail"
                                        onClick={() => handleThumbnailClick(src, 'image')}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* sign in question */}
            <div id="question" className="bg-greyBg text-sm p-3">
                <p>
                    <a href className="text-white">
                        Sign In
                    </a>
                    to add this item to your wishlist, follow it, or mark it as ignored
                </p>
            </div>
        </>
    );
};

export default ProdDetailHeader;
