import HeadingFeatures from "../HeadingFeatures";
import BrowseSteamButton from "./BrowseSteamButton";

const browseSteamLists = ["new releases", "specials", "free games", "by user tags"];

const BrowseSteamBox = () => {
    return (
        <div className="max-w-[1100px] text-white mx-auto">
            <HeadingFeatures title={"Browse Steam"}></HeadingFeatures>
            <div className="grid grid-cols-cards gap-3 text-center font-semibold lgNewRelease:grid-cols-2">
                {browseSteamLists.map((item) => (
                    <BrowseSteamButton key={item}>{item}</BrowseSteamButton>
                ))}
            </div>
        </div>
    );
};

export default BrowseSteamBox;
