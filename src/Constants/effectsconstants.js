import pic1 from "../assets/backgroud/fire.jpg";
import pic2 from "../assets/backgroud/forest.jpg";
import pic3 from "../assets/backgroud/nightfall.jpg";
import pic4 from "../assets/backgroud/ocean_wave.jpg";
import pic5 from "../assets/backgroud/rainthunder.jpg";
import pic6 from "../assets/backgroud/urbain.jpg";

// We need to specify the  url:  before non-code imports
import track1 from "url:../assets/sound/effect/fire.mp3";
import track2 from "url:../assets/sound/effect/forest.mp3";
import track3 from "url:../assets/sound/effect/nightFall.mp3";
import track4 from "url:../assets/sound/effect/ocean-wave.mp3";
import track5 from "url:../assets/sound/effect/rain.mp3";
import track6 from "url:../assets/sound/effect/urban.mp3";

export const EffectData = [
    {
        url: pic1,
        title: "fire",
        effect_track: track1,
    },
    {
        url: pic2,
        title: "forest",
        effect_track: track2,
    },
    {
        url: pic3,
        title: "nightfall",
        effect_track: track3,
    },
    {
        url: pic4,
        title: "ocean_wave",
        effect_track: track4,
    },
    {
        url: pic5,
        title: "rainthunder",
        effect_track: track5,
    },
    {
        url: pic6,
        title: "urbain",
        effect_track: track6,
    },
];
