import React from "react";
import Star from './Star';

export default function Stars({count}) {
    const stars = [];
    for (let i = 0; i < count; i += 1) {
        stars.push(<Star key={Math.random()}/>);
    }
    if (count >= 1 && count <= 5) {
        return (
            <ul className="card-body-stars">
                {stars}
            </ul>
        )

    }


}
