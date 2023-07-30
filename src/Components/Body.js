import Navigation from "./NavigationMenu";
import Card from "./Card";
import { CardData } from "../Constants/constants";
import { EffectData } from "../Constants/effectsconstants";
import React, { useEffect, useLayoutEffect, useState } from "react";
const rim2='card-imgg';
const rim1='card-img';

export default function Body() {

    const [ix,setIx]=useState(-1);
    const [idxeffect,setIdxeffect]=useState(-1);

    const [song, setSong] = useState();
    const [playing, setPlaying] = useState(false);

    const [effect, setEffect] = useState();
    const [effectPlaying, setEffectPlaying] = useState(false);

    const handleRim=(idg)=>{
            setIx(idg);
            
        };
        const handleRimeffect=(idgg)=>{
            setIdxeffect(idgg);
            
        };
        const pause = () => {
            setPlaying(false);
            setIx(-1);
        };
    const songPlayer = (sound_track,idxplay) => {
        if (playing && song != sound_track) {
            handleRim(idxplay);
            setSong(sound_track);
           
        } else if (playing === false) {
            setSong(sound_track);
            handleRim(idxplay);
            setPlaying(true);
           
            
        } else {
            setSong();
            setPlaying(false);
            handleRim(-1);
        }
    };

    
    const effectPlayer = (effect_track,ideffect) => {
        if (effectPlaying && effect != effect_track) {
            setEffect(effect_track);
            handleRimeffect(ideffect);

        } else if (effectPlaying === false) {
            setEffect(effect_track);
            setEffectPlaying(true);
            handleRimeffect(ideffect);
            
        } else {
            setEffect();
            setEffectPlaying(false);
            handleRimeffect(-1);
        }
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
                            play={() => {

                                songPlayer(card.sound_track,idx);
                            }}
                            cname={
                            ix===idx?rim2:rim1
                            }
                        />
                    );
                })}
            </div>
            {playing && <audio src={song} autoPlay />}
            <div className='heading'>Effect</div>
            <div className='effects'>
                {EffectData.map((card, id) => {
                    return (
                        <Card
                            key={id}
                            title={card.title}
                            img_url={card.url}
                            cname={
                                idxeffect===id?rim2:rim1
                                }
                            sound_track={card.effect_track}
                            play={() => {
                                effectPlayer(card.effect_track,id);
                            }}
                        />
                    );
                })}
            </div>
            {effectPlaying && <audio src={effect} autoPlay loop />}
        </div>
    );
}
