import Navigation from "./NavigationMenu";
import Card from "./Card";
import { CardData } from "../Constants/constants";
import { EffectData } from "../Constants/effectsconstants";

console.log(CardData);
export default function Body() {
    return (
        <div className='body'>
            <Navigation />
            <div className='heading'>Sound</div>
            <div className='tracks'>
                {CardData.map((card, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={card.title}
                            img_url={card.url}
                        />
                    );
                })}
            </div>
            <div className='heading'>Effect</div>
            <div className='effects'>
                {EffectData.map((card, id) => {
                    return (
                        <Card
                            key={id}
                            title={card.title}
                            img_url={card.url}
                        />
                    );
                })}
            </div>
        </div>
    );
}
