import React from "react";

// Naming Convention: CardMember, CardBody
export default function Card(props) {
    const { title, img_url } = props;

    return (
        <div className='card'>
            <img
                className='card-img'
                src={img_url}
            />
            <div class='bottom-left'>{title}</div>
        </div>
    );
}
