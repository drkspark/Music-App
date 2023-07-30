import React, { useState } from "react";

// Naming Convention: CardMember, CardBody

export default function Card(props) {
    const { title, img_url,cname, play} = props;
    
    return (
        <div className='card' onClick={play}>
            <img className={cname} src={img_url} />
            <div className='bottom-left'>{title}</div>
        </div>
    );
}

