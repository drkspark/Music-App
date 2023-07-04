import Card from "./Card";
import { CardData } from "../constants";

console.log(CardData);
export default function Body() {
    return (
        <div className='body'>
            <div className='tracks'>
                {CardData.map((card, idx) => {
                    return (<Card
                        key={idx}
                        title={card.title}
                        img_url={card.url}
                    />)
                })}
            </div>
            <div className='effects'>Here we will have Effect Cards</div>
        </div>
    );
}
