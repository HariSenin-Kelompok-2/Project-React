import { Link } from "react-router-dom";
import GameTag from "./GameTag";

const recommended4ImageDatas = [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.600x338.jpg?t=1720454875",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.600x338.jpg?t=1720454875",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.600x338.jpg?t=1720454875",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.600x338.jpg?t=1720454875",
];

const RecommendedJumbotron = () => {
    return (
        <Link to="product/1" className="flex justify-center">
            <div className="w-full shadow-card lg:shadow-none lg:w-2/3">
                <div className="w-full">
                    <img className="w-full" src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1720454875" alt="Apex Legends Header Thumbnail" />
                </div>
                <div className="lg:hidden gradient-recommended p-1.5">
                    <h3 className="font-semibold text-xl">God Of War</h3>
                    <p className="p-2 font-extralight text-sm">Rp 729 000</p>
                </div>
            </div>
            <div className=" bg-[url('https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg')] bg-cover hidden lg:flex lg:flex-col lg:w-1/3">
                <div className="h-[85px] flex items-center px-4">
                    <h3 className="text-3xl">God Of War</h3>
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
                    <span className="text-sm mt-auto font-light">Rp 729 000</span>
                </div>
            </div>
        </Link>
    );
};

export default RecommendedJumbotron;
