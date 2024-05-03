import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";

const ProdDetailBody = () => {
  const params = useParams();
  const id = params.id
  const gameData = steamDataSet[id];
  
  return(
    <>
  <div id="wrapper">
    <div className="prodSideBar flex-col mt-6 ml-4 max-w-2/6 max-h-full">
      <div id="reasonHeader" className="text-lg py-2 px-4 bg-black">
        <p>
          Is this game relevant to you?
        </p>
      </div>
      <div id="recommendationReasons" className="text-sm p-4 mb-2">
        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
          <span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_info.png" className="mt-3" /></span>
          998 hours played
        </p>
        <hr />
        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
          <span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" /></span>
          User reviews: 
          <span className="text-buttonColor">
            Very Positive
          </span>
        </p>
        <hr />
        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
          <span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" /></span>
          In the top sellers
        </p>
        <hr />
        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
          <span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" /></span>
          Recommended by 44 friends
        </p><div className="friendBlocks flex gap-2 mb-4 mb-4 ml-4">
          <img src="https://avatars.cloudflare.steamstatic.com/0bfd6a007df7f197f6b622848c60547bc3e611a0.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/775cd934d94b7e916caefbe3e64ba50191564162.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/18d4e24e9a47d8b6f2c93cb8a902799a86fc4ec8.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/d13fe8eea64ea4d1bc9e12bdf13d4862cd75adff.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/29479a0ba0b91fcd9a1074e38cf5193991baec33.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/c871b186688af8421ee26d93323cdfb059efe23e.jpg" />
        </div>
        <p />
        <hr />
        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
          <span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_info.png" className="mt-3" /></span>
          <span className="text-buttonColor">
            141 friends
          </span> 
          have played this game:
        </p><div className="friendBlocks flex gap-2 mb-4 ml-4">
          <img src="https://avatars.cloudflare.steamstatic.com/0bfd6a007df7f197f6b622848c60547bc3e611a0.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/775cd934d94b7e916caefbe3e64ba50191564162.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/18d4e24e9a47d8b6f2c93cb8a902799a86fc4ec8.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/d13fe8eea64ea4d1bc9e12bdf13d4862cd75adff.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/29479a0ba0b91fcd9a1074e38cf5193991baec33.jpg" />
          <img src="https://avatars.cloudflare.steamstatic.com/c871b186688af8421ee26d93323cdfb059efe23e.jpg" />
        </div>
        <p />
      </div>
      {/* product detail feature content */}
      <div className="prodFeat flex p-4 max-w-2/6 max-h-2/5">
        <div className="prodIconHead flex flex-col">
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_workshop.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cart.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vac.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_stats.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
          <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_remote_play.png" />
        </div>
        <div className="prodFeatHead w-full flex flex-col">
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Cross-Platform Multiplayer
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Steam Trading Cards
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Steam Workshop
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                In-App Purchases
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Valve Anti-Cheat Enabled
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Stats
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Remote Play on Phone
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Remote Play on Tablet
              </a>
            </span>
          </div>
          <div className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full h-full max-w-full max-h-full text-buttonColor bg-blueItemBg">
            <span>
              <a href>
                Remote Play on TV
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* game languages */}
      <div className="prodLang my-2 p-4 text-fontColor text-xs max-w-full max-h-screen">
        <p>Languages</p>
        <table>
          <tbody><tr>
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
          </tbody></table>
      </div>
      {/* game achievement */}
      <div className="gameAchievement p-4 text-greyFontColor text-xs">
        <p>Include {gameData.achievement_count} Steam Achievements</p>
        {gameData.achievement_images.map((_, index) => {
        return <img src={gameData.achievement_images[index]} className="mt-4 w-16 h-16"/>
        })}
      </div>
      <div className="pointShop max-w-full max-h-screen my-2 p-4">
        <div className="pointShopHeader flex mb-4 text-xs w-full">
          <p>Points Shop Items Available</p>
        </div>
        <div className="pointShopImg flex gap-1 w-16 h-16">
        {gameData.point_shop_images.map((_, index) => {
        return <img src={gameData.point_shop_images[index]} className="bg-black" />
        })}
          <a href className="flex justify-center items-center bg-blueItemBg text-buttonColor rounded-sm text-sm text-center min-w-14 min-h-16">
            View all {gameData.point_shop_count}
          </a>
        </div>
      </div>
      {/* game genre */}
      <div className="prodGenre p-5 w-full text-xs">
        <p className="text-headerFontColor leading-6"><span className="text-fontColor uppercase">Title:</span> {gameData.game_name}</p>
        <p className="text-headerFontColor leading-6"><span className="text-fontColor uppercase">Genre:</span>        
        {gameData.genres.map((_, index) => {
        return <span>{gameData.genres[index]}</span>
        })}</p>
        <p className="text-headerFontColor leading-6"><span className="text-fontColor uppercase">Developer:</span>{gameData.developers}</p>
        <p className="text-headerFontColor leading-6"><span className="text-fontColor uppercase">Publisher:</span>{gameData.publishers}</p>
        <p className="text-headerFontColor leading-6"><span className="text-fontColor uppercase">Release Date:</span>{gameData.release_date}</p>
        <div className="genreButtonHeader">
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">Visit the website</a></span>
          </div>
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">View update history</a></span>
          </div>
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">Read related news</a></span>
          </div>
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">View discussions</a></span>
          </div>
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">Visit the Workshop</a></span>
          </div>
          <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
            <span><a href className="text-buttonColor">Find Community Groups</a></span>
          </div>
        </div>
      </div>
      <div className="shareEmbedRow p-4 my-2  min-w-full">
        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4"><button>Share</button></span>
        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4"><button>Embed</button></span>
        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">⚑</span>
      </div>
      {/* gameAwards */}
      <div className="gameAwards">
        <p>Awards</p>
        <div className="gameAwardsBannerBG">
          <a href="https://store.steampowered.com/steamawards/2020">
            <div className="gameAwardsBannerEvent">
              <div className="gameAwardsBannerAwards">The Steam Awards&nbsp;</div>
              <div className="gameAwardsBannerYear">2020</div>
            </div>
            <div className="gameAwardsBannerContents">
              <div className="gameAwardsBannerLeft">
                <span className="gameAwardsBannerWinner">Winner</span>
                <div className="gameAwardsBannerDesc">Labor of Love <span>Award</span></div>
              </div>
              <div className="gameAwardsBannerRight">
                <img src="https://cdn.cloudflare.steamstatic.com/store/promo/steamawards2020/trophy2020.png?v=3" />
              </div>
            </div>
          </a>
          </div>
          <a href="https://store.steampowered.com/steamawards/2020">
        </a>
      </div>
    </div>
    {/* Game buying options */}
    <div id="cardWrapper">
      <div className="card p-4 mt-6 mb-2 rounded relative">
        <h2 className="text-2xl font-semibold">{gameData.offers[0]}</h2>
        <div className="gamePurchaseContainer text-base text-right absolute right-1">
          <div className="gamePurchaseButton py-2.5 pl-4 pr-0 bg-black rounded">
            <span>{gameData.price[0]} <span className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded">{gameData.price[1]}</span></span>
          </div>
        </div>
      </div>
      <div className="card p-4 mt-6 rounded relative">
        <h3 className="text-2xl font-semibold">{gameData.offers[1]}</h3>
        <p className="text-sm">{gameData.offers_desc[0]}</p>
        <br />
        <p className="text-sm">{gameData.offers_desc[1]}</p>
        <div className="gamePurchaseContainer text-base text-right absolute right-1">
          <div className="gamePurchaseButton py-2.5 pl-4 pr-0 bg-black rounded">
            <span>{gameData.price[2]}<span className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded"><a href>Add To Cart</a></span></span>
          </div>
        </div>
      </div>
      <div className="disclaimer p-6">
        <p className="text-sm text-right rounded-sm">This product is not eligible for refund. <a href className="underline">Learn more</a></p>
      </div>
      <div className="card p-4 mt-6 rounded relative">
        <h4 className="text-2xl font-semibold">{gameData.offers[2]} <span className="bundle text-buttonColor font-extralight">Bundle <span className="tooltip text-greyFontColor text-xs">(?)</span></span></h4>    
        <p className="text-sm">{gameData.offers_desc[2]}</p>
        <div className="bundleImg flex overflow-clip bg-black">
        {gameData.bundle_images.map((_, index) => {
        return <img src={gameData.bundle_images[index]} className="bg-black" />
        })}
        </div>
        <div className="bundleInfo text-sm rounded-sm py-2 px-4 absolute m-1 right-[20vw]">
          <span>Bundle info</span>
        </div>
        <div className="gamePurchaseContainer text-base text-right absolute right-1">
          <div className="gamePurchaseButton m-1 py-2 px-2 bg-black rounded">
            <span>{gameData.price[2]}<span className="gamePurchase m-1 bg-buyBg py-2 px-4 rounded">Add To Cart</span></span>
          </div>
        </div>
      </div>
      <div className="contentHeader mt-24 text-sm font-medium uppercase">
        <span>Content for this game <span className="browseButton py-0.5 px-2 mb-0.5 text-xs float-right capitalize"><a href>Browse all (1)</a></span></span> 
      </div>
      <div className="content text-xs">
        <a href className="ml-4">Counter-Strike 2 Soundtrack<span className="float-right mr-4">Free</span></a>
      </div>
      {/* game events */}
      <div className="eventHeader mt-24 text-sm font-medium uppercase">
        <span>Recent Events &amp; Announcements <span className="browseButton py-0.5 px-2 mb-0.5 text-xs float-right capitalize">View All</span></span>
      </div>
      <div id="wrapper">
        <div className="w-full h-full">
          <img src="https://clan.cloudflare.steamstatic.com/images/3381077/7ef81aae3930cd6fb1f1fe16864b1c2ec82d9940_400x225.png" alt="" />
        </div>
        <div className="w-full h-full">
          <img src="https://clan.cloudflare.steamstatic.com/images/3381077/55f43a9845a5d85219965c6016fb4a122549cbd7_400x225.png" alt="" />
        </div>
      </div>
      <div className="moreButton flex mt-4 mb-8">
        <svg height="100px" width="100px" viewBox="0 0 100 100" fill="currentColor" className="w-6 h-6">
          <g>
            <path d="M34.367,31.803c0.49,0.443,1.228,0.404,1.698-0.06c3.869-3.823,8.894-6.045,14.425-6.337   
                c11.044-0.495,20.558,7.281,22.518,17.866c0.133,0.717-0.429,1.379-1.157,1.413l-4.83,0.223c-1.092,0.05-1.578,1.397-0.769,2.133   
                l13.999,12.733c0.502,0.456,1.279,0.419,1.734-0.084L94.68,45.676c0.733-0.809,0.123-2.1-0.967-2.048l-6.486,0.309   
                c-1.82-18.94-18.238-33.327-37.455-32.439c-9.122,0.484-17.619,4.28-23.984,10.844c-0.48,0.495-0.439,1.299,0.072,1.762   
                L34.367,31.803z">
            </path>
            <path d="M6.229,53.869h6.11c0.622,0,1.132,0.468,1.207,1.085c1.029,8.437,4.787,16.288,10.854,22.357   
                c7.249,7.217,16.85,11.23,27.047,11.23c9.778,0.07,19.009-3.568,26.131-10.258c0.502-0.471,0.502-1.276,0.015-1.763l-9.587-9.587   
                c-4.379,4.389-10.288,6.838-16.559,6.838c-6.224,0-12.068-2.506-16.541-6.934c-3.179-3.179-5.282-7.178-6.168-11.481   
                c-0.154-0.746,0.447-1.436,1.209-1.436h5.183c1.092,0,1.639-1.319,0.869-2.092L21.572,37.352c-0.478-0.48-1.255-0.481-1.734-0.003   
                L5.363,51.773C4.589,52.545,5.135,53.869,6.229,53.869z">
            </path>
          </g>
        </svg>
        <a href><p className="text-xs rounded-sm py-0.5 px-4 ml-2">See all updates (Latest∶ Mar 9)</p></a>
      </div>
      {/* game description */}
      <div className="gameDesc text-greyFontColor">
        <span className="text-white text-xl">About this game</span>
        <hr />
        <p className="text-base mt-4 mb-6">For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from 
          across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.
        </p>
        <p className="text-base mt-4 mb-6">A free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. 
          Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, 
          state of the art networking, and upgraded Community Workshop tools.
        </p>
        <p className="text-base mt-4 mb-6">
          In addition to the classic objective-focused gameplay that Counter-Strike pioneered in 1999, Counter-Strike 2 features:
        </p>
        <ul className="ml-4 mb-12 leading-8">
          <li>All-new CS Ratings with the updated Premier mode</li>
          <li>Global and Regional leaderboards</li>
          <li>Upgraded and overhauled maps</li>
          <li>Game-changing dynamic smoke grenades</li>
          <li>Tick-rate-independent gameplay</li>
          <li>Redesigned visual effects and audio</li>
          <li>All items from CS:GO moving forward to CS2</li>
        </ul>
        <span className="text-white text-xl">Mature Content Description</span>
        <hr />
        <p className="text-base mt-4 mb-6">The developers describe the content like this∶</p>
        <p className="text-base mt-4 mb-6"><i>Includes intense violence and blood</i></p>
      </div>
      {/* game system requirement */}
      <div className="max-w-4xl rounded">
        <div className="text-base font-light uppercase">
          System Requirements
        </div>
        <hr />
        <div className="sysReqTabs flex gap-6 text-xs p-0.5">
          <div className="tabs text-greyFontColor bg-iconBg py-0.5 px-3 mt-2 ml-2">
            Windows
          </div>
          <div className="tabs text-greyFontColor py-0.5 px-3 mt-2 ml-2">
            SteamOS + Linux
          </div>
        </div>
      </div>
      <div className="sysReqContainer">
        <div>
          <div className="windowsReq text-xs text-headerFontColor leading-4 mt-4">Minimum</div>
          <ul className="windowsReq text-xs leading-6 l">
            <li className="list-none "><span className="text-greyFontColor">OS:</span> Windows 10</li>
            <li className="list-none "><span className="text-greyFontColor">Processor:</span> 4 hardware CPU threads - Intel® Core™ i5 750 or higher</li>
            <li className="list-none"><span className="text-greyFontColor">Memory:</span> 8 GB RAM</li>
            <li className="list-none"><span className="text-greyFontColor">Graphics:</span> Video card must be 1 GB or more and should be a DirectX 11-compatible with support for Shader Model 5.0</li>
            <li className="list-none"><span className="text-greyFontColor">DirectX:</span> Version 11</li>
            <li className="list-none"><span className="text-greyFontColor">Storage:</span> 85 GB available space</li>
          </ul>
        </div>
        <div className="hidden">
          <div className="otherReq text-xs text-headerFontColor leading-4 mt-4">Minimum</div>
          <ul className="otherReq text-xs leading-6">
            <li className="list-none"><span className="text-greyFontColor">OS:</span> Ubuntu 20.04</li>
            <li className="list-none"><span className="text-greyFontColor">Processor:</span> 4 hardware CPU threads - Intel® Core™ i5 750 or higher</li>
            <li className="list-none"><span className="text-greyFontColor">Memory:</span> 8 GB RAM</li>
            <li className="list-none"><span className="text-greyFontColor">Graphics:</span> AMD GCN+ or NVIDIA Kepler+ with up-to-date Vulkan drivers. 
              Support for VK_EXT_graphics_pipeline_library highly recommended.</li>
            <li className="list-none"><span className="text-greyFontColor">Storage:</span> 85 GB available space</li>
            <li className="list-none"><span className="text-greyFontColor">Sound Card:</span> Highly recommended</li>
          </ul>
        </div>
      </div>
      {/* similar game recommendation */}
      <div className="max-w-4xl mt-12 rounded">
        <div className="text-base font-semibold uppercase">
          More like this
        </div>
        <hr />
        <div className="flex justify-between gap-1 mt-1 overflow-scroll">
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_184x69.jpg?t=1710500518" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/440/capsule_184x69.jpg?t=1695767057" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_184x69.jpg?t=1710727439" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/444200/capsule_184x69.jpg?t=1710331913" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/686810/capsule_184x69.jpg?t=1709289198" />
        </div>
      </div>
    </div>
  </div>
  </>
)
}
export default ProdDetailBody;