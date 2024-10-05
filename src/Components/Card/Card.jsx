import { FaStar } from "react-icons/fa6";


const Card = ({card}) => {
    console.log(card)
    const {name, image, price, rating, votes, popular} = card;
    return (
        <div>
            <div>
            <img  className="rounded-2xl" src={image} alt="" />
            <div className="text-white font-semibold mt-3 flex justify-between">
                <h3>{name}</h3>
                <p className="px-2 text-black rounded bg-[#BEE3CC]">{price}</p>
            </div>
            <div className="flex items-center mt-3 space-x-1">
             <FaStar />
            <p className="text-white">{rating ? `${rating}   (${votes})`: "No rating"}</p>
            </div>
            <h5 className="rounded-2xl w-16 mt-6 px-2 bg-[#F6C768]">{popular ? `Popular` : ''}</h5>
            </div>
        </div>
    );
};

export default Card;