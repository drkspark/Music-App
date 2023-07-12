import Navigation from "./NavigationMenu";
import Card from "./Card";
import { CardData } from "../Constants/constants";
import { EffectData } from "../Constants/effectsconstants";
import React, { useState } from "react";

import Navigation_menu from "./Navigation_menu";
import Card from "./card";
import { CardData } from "../constants";
import { EffectData } from "../effectsconstants";


console.log(CardData);
export default function Body() {
   
    return (
        <div className='body'>
            <Navigation_menu/>
            <div className='tracks'>
                {CardData.map((card, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={card.title}
                            img_url={card.url}
                            sound_track={card.sound_track}
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
                            sound_track={card.effect_track}
                        />
                    );
                })}
            </div>
        </div>
    );
}
