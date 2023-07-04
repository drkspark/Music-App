import React from "react";
import pic1 from "../assets/backgroud/1.gif";
import pic2 from "../assets/backgroud/2.gif";
export default function Card() {
    return(
<div className="frames">
    <div className="cards">
        <a href='#'>
        <img
            className='pic_1'
            alt='pic__1'
            src={pic1}
            href='#'
        />
        </a>  
    </div>
    <div className="cards">
        <a href='#'>
        <img
            className='pic_2'
            alt='pic__2'
            src={pic2}
            href='#'
        />
        </a>  
    </div>

</div>
    );
};