import GameTag from "../GameTag";

const RecommendedJumbotron = () => {
    const recommended4ImageDatas = [
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_ed4087e1f7e85905df637304ac4e511def7943e7.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_a47a8c9b09393bd4cddfeb2891beb4d1eafb2897.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_b5051a24edf949582756c313eebf6f61582ce25f.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_c75144f4a9c3771806a72ff939752c15456aa557.600x338.jpg",
    ];

    return (
        <a href="#" className="flex justify-center ">
            <div className="lg:w-2/3">
                <div>
                    <img className="w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1710268442" alt="Apex Legends Header Thumbnail" />
                </div>
                <div className="lg:hidden gradient-recommended p-1.5">
                    <h3 className="font-semibold text-xl">Apex Legends™</h3>
                    <p className="p-2 font-extralight text-sm">Free to Play</p>
                </div>
            </div>
            <div className=" bg-[url('https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg')] bg-cover hidden lg:flex lg:flex-col lg:w-1/3">
                <div className="h-[85px] flex items-center px-4">
                    <h3 className="text-3xl">Apex Legends™</h3>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-3 mr-2">
                    {recommended4ImageDatas.map((image, index) => (
                        <img key={index} className="w-full brightness-75 cursor-pointer hover:brightness-100" src={image} />
                    ))}
                </div>
                <div className="grow flex flex-col justify-between pl-4 pt-3 pb-2">
                    <div>
                        <h4 className="text-2xl font-light">Now Available</h4>
                        <div>
                            <GameTag>Top Seller</GameTag>
                        </div>
                    </div>
                    <span className="text-sm mt-auto font-light">Free to Play</span>
                </div>
            </div>
        </a>
    );
};

export default RecommendedJumbotron;
