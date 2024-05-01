const ProdDetailSideDesc = () => {
  <>
     {/* product detail directory */}
     <div id="directory" className="text-fontColor text-sm">
     <p><a href>All Games</a> &gt;
       <a href>Free to Play Games</a> &gt;
       <a href>Counter-Strike 2</a>
     </p>
   </div>
   {/* game title*/}
   <div id="gameName" className="flex justify-between">
     <h1 className="text-3xl mb-4">Counter-Strike 2</h1>
     <a href>
       <button className="bg-buttonColorBg text-buttonColor pt-2 pr-4 pb-2 pl-4 rounded-sm">Community Hub</button>
     </a>
   </div>
   {/* product detail side desc */}
   <div id="headerBg" className="flex flex-row-reverse pb-4 max-w-full max-h-full">
     <div id="sideDesc" className="ml-4 min-w-60 w-screen max-w-full max-h-full">
       <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1698860631" alt="header" className="min-w-full" />
       <p className="mobileH1 text-3xl mt-4">Counter-Strike 2</p>
       <div className="quickDesc">
         <p className="text-sm my-2"> For over two decades, Counter-Strike has offered an elite 
           competitive experience, one shaped by millions of players
           from across the globe. And now the next chapter in the 
           CS story is about to begin. This is Counter-Strike 2.
         </p>
       </div>
       {/* game ratings */}
       <div className="reviews flex text-xs">
         <div className="reviewsHeader flex-col text-fontColor">
           <p><a href>Recent Reviews:</a></p>
           <p><a href>All Reviews:</a></p>
           <p className="leading-8"><a href>Release Date:</a></p>
           <p><a href>Developer:</a></p>
           <p><a href>Publisher:</a></p>
         </div>
         <div className="reviewsScore ml-4 text-buttonColor flex flex-col">
           <span>Mostly Positive</span>
           <span>Very Positive</span>
           <span className="text-fontColor leading-8">22 Aug, 2012</span>
           <span>Valve</span>
           <span>Valve</span>
         </div>
       </div>
       {/* game tags */}
       <div className="genreTag mt-2 mb-2 text-xs w-full">
         <p className="text-fontColor">Popular user-defined tags for this product:</p>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>FPS</a></span>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>Shooter</a></span>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>Multiplayer</a></span>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>Competitive</a></span>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>Action</a></span>
         <span className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5"><a href>+</a></span>
       </div>
     </div>
     {/* game preview */}
     <div id="mainVideo" className="max-w-full max-h-full">
       <video controls>
         <source src="https://cdn.cloudflare.steamstatic.com/steam/apps/256972298/movie_max_vp9.webm?t=1696005467" type="video/webm" />
       </video>
       <div className="thumbnails flex justify-between gap-1 mt-1 overflow-scroll">
         <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.116x65.jpg?t=1698860631" />
         <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.116x65.jpg?t=1698860631" />
         <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.116x65.jpg?t=1698860631" />
         <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.116x65.jpg?t=1698860631" />
         <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/ss_0f8cf82d019c614760fd20801f2bb4001da7ea77.116x65.jpg?t=1698860631" />
       </div>
     </div>
   </div>
   {/* sign in question */}
   <div id="question" className="bg-greyBg text-sm p-3">
     <p><a href className="text-white">Sign In</a> to add this item to your wishlist, follow it, or mark it as ignored</p>
   </div>
   </>
}

export default ProdDetailHeader