import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";
import ProdDetailOffers from "./ProdDetailOffers";

const ProdDetailBody = () => {
    const params = useParams();
    const id = params.id;
    const gameData = steamDataSet[id];

    return (
        <>
            <div id="wrapper">
                <div className="prodSideBar flex-col mt-6 ml-4 max-w-2/6 max-h-full">
                    {/* product detail feature content */}
                    <div className="prodFeat flex p-4 max-w-2/6 max-h-2/5">
                        <div className="prodIconHead flex flex-col">
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_workshop.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cart.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vac.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_stats.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
                            <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
                        </div>
                        <div className="prodFeatHead w-full flex flex-col">
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Cross-Platform Multiplayer</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Steam Trading Cards</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Steam Workshop</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>In-App Purchases</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Valve Anti-Cheat Enabled</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Stats</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Remote Play on Phone</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Remote Play on Tablet</a>
                                </span>
                            </div>
                            <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
                                <span>
                                    <a href>Remote Play on TV</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* game languages */}
                    <div className="prodLang my-2 p-4 text-fontColor text-xs max-w-full max-h-screen">
                        <p>Languages</p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Interface</th>
                                    <th>Full Audio</th>
                                    <th>Subtitles</th>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>✔</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Czech</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Danish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Dutch</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Finnish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>French</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>German</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Hungarian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Italian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Japanese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Korean</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Norwegian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Polish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Portuguese - Portugal</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Portuguese - Brazil</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Romanian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Russian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Simplified Chinese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Spanish - Spain</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Swedish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Thai</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Traditional Chinese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Turkish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Bulgarian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Ukrainan</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Greek</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Spanish - Latin America</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Vietnamese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* game achievement */}
                    <div className="gameAchievement p-4 text-greyFontColor text-xs">
                        <p>Include {gameData.achievement_count} Steam Achievements</p>
                        {gameData.achievement_images.map((_, index) => {
                            return <img key={index} src={gameData.achievement_images[index]} className="mt-4 w-16 h-16" />;
                        })}
                    </div>
                    <div className="pointShop max-w-full max-h-screen my-2 p-4">
                        <div className="pointShopHeader flex mb-4 text-xs w-full">
                            <p>Points Shop Items Available</p>
                        </div>
                        <div className="pointShopImg flex gap-1 w-16 h-16">
                            {gameData.point_shop_images.map((_, index) => {
                                return <img key={index} src={gameData.point_shop_images[index]} className="bg-black" />;
                            })}
                            <a href className="flex justify-center items-center bg-blueItemBg text-buttonColor rounded-sm text-sm text-center min-w-14 min-h-16">
                                View all {gameData.point_shop_count}
                            </a>
                        </div>
                    </div>
                    {/* game genre */}
                    <div className="prodGenre p-5 w-full text-xs">
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Title:</span> {gameData.game_name}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Genre:</span>
                            {gameData.genres.map((_, index) => {
                                return <span key={index}>{gameData.genres[index]}</span>;
                            })}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Developer:</span>
                            {gameData.developers}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Publisher:</span>
                            {gameData.publishers}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Release Date:</span>
                            {gameData.release_date}
                        </p>
                        <div className="genreButtonHeader">
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Visit the website
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        View update history
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Read related news
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        View discussions
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Visit the Workshop
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Find Community Groups
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="shareEmbedRow p-4 my-2  min-w-full">
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">
                            <button>Share</button>
                        </span>
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">
                            <button>Embed</button>
                        </span>
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">⚑</span>
                    </div>
                </div>
                {/* Game buying options */}
                <div id="cardWrapper">
                    <ProdDetailOffers/>
                    {/* game events */}
                    <div className="eventHeader mt-24 text-sm font-medium uppercase">
                        <span>
                            Recent Events &amp; Announcements <span className="browseButton py-0.5 px-2 mb-0.5 text-xs float-right capitalize">View All</span>
                        </span>
                    </div>
                    <div id="wrapper">
                        {gameData.event_images.map((_, index) => {
                            return (
                                <div key={index} className="w-full h-full">
                                    <img src={gameData.event_images[index]} alt="" className="w-full" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="moreButton flex mt-4 mb-8">
                        <svg height="100px" width="100px" viewBox="0 0 100 100" fill="currentColor" className="w-6 h-6">
                            <g>
                                <path
                                    d="M34.367,31.803c0.49,0.443,1.228,0.404,1.698-0.06c3.869-3.823,8.894-6.045,14.425-6.337   
                c11.044-0.495,20.558,7.281,22.518,17.866c0.133,0.717-0.429,1.379-1.157,1.413l-4.83,0.223c-1.092,0.05-1.578,1.397-0.769,2.133   
                l13.999,12.733c0.502,0.456,1.279,0.419,1.734-0.084L94.68,45.676c0.733-0.809,0.123-2.1-0.967-2.048l-6.486,0.309   
                c-1.82-18.94-18.238-33.327-37.455-32.439c-9.122,0.484-17.619,4.28-23.984,10.844c-0.48,0.495-0.439,1.299,0.072,1.762   
                L34.367,31.803z"
                                ></path>
                                <path
                                    d="M6.229,53.869h6.11c0.622,0,1.132,0.468,1.207,1.085c1.029,8.437,4.787,16.288,10.854,22.357   
                c7.249,7.217,16.85,11.23,27.047,11.23c9.778,0.07,19.009-3.568,26.131-10.258c0.502-0.471,0.502-1.276,0.015-1.763l-9.587-9.587   
                c-4.379,4.389-10.288,6.838-16.559,6.838c-6.224,0-12.068-2.506-16.541-6.934c-3.179-3.179-5.282-7.178-6.168-11.481   
                c-0.154-0.746,0.447-1.436,1.209-1.436h5.183c1.092,0,1.639-1.319,0.869-2.092L21.572,37.352c-0.478-0.48-1.255-0.481-1.734-0.003   
                L5.363,51.773C4.589,52.545,5.135,53.869,6.229,53.869z"
                                ></path>
                            </g>
                        </svg>
                        <a href>
                            <p className="text-xs rounded-sm py-0.5 px-4 ml-2">See all updates (Latest:{gameData.latest_update})</p>
                        </a>
                    </div>
                    {/* game description */}
                    <div className="gameDesc text-greyFontColor">
                        <span className="text-white text-xl">About this game</span>
                        <hr />
                        {gameData.about_the_game_img.map((_, index) => {
                            return <img key={index} src={gameData.about_the_game_img} className="w-full" />;
                        })}
                        {gameData.about_the_game.map((_, index) => {
                            return <p key={index} className="text-base mt-4 mb-6">{gameData.about_the_game[index]}</p>;
                        })}
                        <ul className="ml-4 mb-12 leading-8">
                            {gameData.about_the_game_list.map((_, index) => {
                                return <li key={index} className="">{gameData.about_the_game_list[index]}</li>;
                            })}
                        </ul>
                    </div>
                    {/* game system requirement */}
                    <div className="max-w-4xl rounded">
                        <div className="text-base font-light uppercase">System Requirements</div>
                        <hr />
                        <div className="sysReqTabs flex gap-6 text-xs p-0.5">
                            <div className="tabs text-greyFontColor bg-iconBg py-0.5 px-3 mt-2 ml-2">Windows</div>
                            <div className="tabs text-greyFontColor py-0.5 px-3 mt-2 ml-2">SteamOS + Linux</div>
                        </div>
                    </div>
                    <div className="sysReqContainer">
                        <div>
                            <div className="windowsReq text-xs text-headerFontColor leading-4 mt-4">Minimum</div>
                            <ul className="windowsReq text-xs leading-6 l">
                                <li className="list-none ">
                                    <span className="text-greyFontColor">OS:</span> Windows 10
                                </li>
                                <li className="list-none ">
                                    <span className="text-greyFontColor">Processor:</span> 4 hardware CPU threads - Intel® Core™ i5 750 or higher
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Memory:</span> 8 GB RAM
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Graphics:</span> Video card must be 1 GB or more and should be a DirectX 11-compatible with support for Shader Model 5.0
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">DirectX:</span> Version 11
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Storage:</span> 85 GB available space
                                </li>
                            </ul>
                        </div>
                        <div className="hidden">
                            <div className="otherReq text-xs text-headerFontColor leading-4 mt-4">Minimum</div>
                            <ul className="otherReq text-xs leading-6">
                                <li className="list-none">
                                    <span className="text-greyFontColor">OS:</span> Ubuntu 20.04
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Processor:</span> 4 hardware CPU threads - Intel® Core™ i5 750 or higher
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Memory:</span> 8 GB RAM
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Graphics:</span> AMD GCN+ or NVIDIA Kepler+ with up-to-date Vulkan drivers. Support for VK_EXT_graphics_pipeline_library highly recommended.
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Storage:</span> 85 GB available space
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Sound Card:</span> Highly recommended
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProdDetailBody;
