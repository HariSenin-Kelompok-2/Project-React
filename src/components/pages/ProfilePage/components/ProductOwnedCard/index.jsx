// eslint-disable-next-line react/prop-types
const ProductOwnedCard = ({ gameName }) => {
  return (
    <div className="bg-black/[0.3] rounded-sm p-2 flex items-center gap-3">
      <div>
        <a href="">
          <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/761890/capsule_184x69.jpg?t=1715004564" alt="" />
        </a>
      </div>
      <div className="truncate">
        <a href="" className="text-sm hover:text-[#66C0F4] truncate">
          {gameName}
        </a>
      </div>
    </div>
  );
};

export default ProductOwnedCard;
