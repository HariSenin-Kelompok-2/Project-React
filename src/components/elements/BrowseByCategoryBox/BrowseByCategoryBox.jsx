import { categories } from "../../../utils/datas";
import CategoryCard from "./CategoryCard";

const BrowseByCategoryBox = () => {
    return (
        <div className="max-w-[1100px] text-white mx-auto mb-16 relative">
            <h2 className="uppercase mb-5 tracking-wider">Browse by Category</h2>
            <div className="absolute gradient-arrow-left top-1/2 bottom-1/2 -translate-y-1/2 -left-[3.9rem] flex py-[4.2rem] px-4 justify-center items-center cursor-pointer">
                <div>
                    <i className="fa-solid fa-chevron-left text-white text-5xl" />
                </div>
            </div>
            <div className="absolute gradient-arrow-right top-1/2 bottom-1/2 -translate-y-1/2 -right-[3.9rem] flex py-[4.2rem] px-4 justify-center items-center cursor-pointer">
                <div>
                    <i className="fa-solid fa-chevron-right text-white text-5xl" />
                </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-5 tracking-widest text-lg font-semibold relative">
                {categories.map((category, index) => (
                    <CategoryCard key={index} image={category.image} bgColor={category.bgColor}>
                        {category.name}
                    </CategoryCard>
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

export default BrowseByCategoryBox;
