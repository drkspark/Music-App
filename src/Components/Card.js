import React, { useState } from "react";

// Naming Convention: CardMember, CardBody
export default function Card(props) {
    const [song, setSong] = useState();
    const [playing, setPlaying] = useState(false);

    const { title, img_url, sound_track } = props;
    return (
        <div
            className='card'
            onClick={() => {
                if (playing === false) {
                    setSong(sound_track);
                    setPlaying(true);
                } else {
                    setSong();
                    setPlaying(false);
                }
            }}
        >
            <img
                className='card-img'
                src={img_url}
            />
            <div class='bottom-left'>{title}</div>
            {playing && (
                <audio
                    src={song}
                    autoPlay
                    controls
                />
            )}
        </div>
    );
}
