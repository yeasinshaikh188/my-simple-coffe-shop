import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    
    const [cards, setCards] = useState([]); 

    useEffect(() =>{
        fetch('./Coffe.json')
        .then(res => res.json())
        .then(data => setCards(data)); 

    },[]); 

    return (
        <div className="flex justify-center mt-9 md:mt-16">
        <div className="grid gap-16 grid-cols-1 md:grid-cols-3">
            {
                cards.map(card =><Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;