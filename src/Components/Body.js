import Navigation from "./NavigationMenu";
import Card from "./Card";
import { CardData } from "../Constants/constants";
import { EffectData } from "../Constants/effectsconstants";
import React, { useEffect, useLayoutEffect, useState } from "react";
ganne='card-imgg';
gane='card-img';
const [handle,setHandle]=useState("");
export default function Body() {
    const [song, setSong] = useState();
    const [playing, setPlaying] = useState(false);

    const [effect, setEffect] = useState();
    const [effectPlaying, setEffectPlaying] = useState(false);
    const songPlayer = (sound_track) => {
        if (playing && song != sound_track) {
            setSong(sound_track);
           
        } else if (playing === false) {
            setSong(sound_track);
            setPlaying(true);
           
            
        } else {
            setSong();
            setPlaying(false);
          
            
        }
    };

    
    const effectPlayer = (effect_track) => {
        if (effectPlaying && effect != effect_track) {
            setEffect(effect_track);

        } else if (effectPlaying === false) {
            setEffect(effect_track);
            setEffectPlaying(true);
            
        } else {
            setEffect();
            setEffectPlaying(false);
        }
    };

const handleRim=()=>{
    if(handle==='card-img'){
        setHandle('card-imgg');
    }
    else{
        setHandle('card-img');
    }
    };
    const pause = () => {
        setPlaying(false);
    };

    return (
        <div className='body'>
            <Navigation playing={playing === true} pause={pause} />
            <div className='heading'>Sound</div>
            <div className='tracks'>
                {CardData.map((card, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={card.title}
                            img_url={card.url}
                            cname={handle}
                            play={() => {
                                songPlayer(card.sound_track);
                                handleRim();
                            }}
                            
                        />
                    );
                })}
            </div>
            {playing && <audio src={song} autoPlay controls />}
            <div className='heading'>Effect</div>
            <div className='effects'>
                {EffectData.map((card, id) => {
                    return (
                        <Card
                            key={id}
                            title={card.title}
                            img_url={card.url}
                            cname={handle}
                            sound_track={card.effect_track}
                            play={() => {
                                effectPlayer(card.effect_track);
                               handleRim();
                            }}
                        />
                    );
                })}
            </div>
            {effectPlaying && <audio src={effect} autoPlay controls loop />}
        </div>
    );
}
