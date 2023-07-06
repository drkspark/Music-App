import Navigation_menu from "./navigation_menu";
import Card from "./card";
import { CardData } from "../constants";
import { EffectData } from "../effectsconstants";
console.log(CardData);
export default function Body() {
    return (
        <div className='body'>
            <Navigation_menu />
            <div className='tracks'>
                {CardData.map((card, idx) => {
                    return (<Card
                        key={idx}
                        title={card.title}
                        img_url={card.url}
                    />)
                })}
            </div>
            <div className='effects'>
                {EffectData.map((card, id)=>{
                    return(<Card
                    key={id}
                    title={card.title}
                    img_url={card.url}
                    
                    />)
                })}
            </div>
            </div>
    );
};
