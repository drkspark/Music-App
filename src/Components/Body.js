import Navigation from "./Navigation";
import Card from "./Card";
import { MusicCardData } from "../Constants/musicTracks";
import { EffectCardData } from "../Constants/effectTracks";
import React, { useState } from "react";

export default function Body() {
    const [selectedMusicIndex, setSelectedMusicIndex] = useState(-1);
    const [selectedEffectIndex, setSelectedEffectIndex] = useState(-1);

    const [music, setMusic] = useState();
    const [musicPlaying, setMusicPlaying] = useState(false);

    const [effect, setEffect] = useState();
    const [effectPlaying, setEffectPlaying] = useState(false);

    const pause = () => {
        setMusicPlaying(false);
        setSelectedMusicIndex(-1);
    };

    const songPlayer = (sound_track, indexPlaying) => {
        if (musicPlaying && music != sound_track) {
            setMusic(sound_track);
            setSelectedMusicIndex(indexPlaying);
        } else if (musicPlaying === false) {
            setMusic(sound_track);
            setMusicPlaying(true);
            setSelectedMusicIndex(indexPlaying);
        } else {
            setMusic();
            setMusicPlaying(false);
            setSelectedMusicIndex(-1);
        }
    };

    const effectPlayer = (effect_track, indexPlaying) => {
        if (effectPlaying && effect != effect_track) {
            setEffect(effect_track);
            setSelectedEffectIndex(indexPlaying);
        } else if (effectPlaying === false) {
            setEffect(effect_track);
            setEffectPlaying(true);
            setSelectedEffectIndex(indexPlaying);
        } else {
            setEffect();
            setEffectPlaying(false);
            setSelectedEffectIndex(-1);
        }
    };

    return (
        <div className='body'>
            <Navigation musicPlaying={musicPlaying === true} pause={pause} />
            <div className='heading'>Sound</div>
            <div className='tracks'>
                {MusicCardData.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            title={card.title}
                            img_url={card.url}
                            play={() => {
                                songPlayer(card.sound_track, index);
                            }}
                            cname={
                                selectedMusicIndex === index
                                    ? "card-selected"
                                    : "card"
                            }
                        />
                    );
                })}
            </div>
            {musicPlaying && <audio src={music} autoPlay />}
            <div className='heading'>Effect</div>
            <div className='effects'>
                {EffectCardData.map((card, id) => {
                    return (
                        <Card
                            key={id}
                            title={card.title}
                            img_url={card.url}
                            cname={
                                selectedEffectIndex === id
                                    ? "card-selected"
                                    : "card"
                            }
                            sound_track={card.effect_track}
                            play={() => {
                                effectPlayer(card.effect_track, id);
                            }}
                        />
                    );
                })}
            </div>
            {effectPlaying && <audio src={effect} autoPlay loop />}
        </div>
    );
}
