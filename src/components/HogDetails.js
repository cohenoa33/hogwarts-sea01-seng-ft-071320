import React from 'react';


const HogDetails = (props) => {
    return (
        <div className="meta">
            <p>Weight: {props.hog.weight}</p>
            <p>Highest medal achieved: {props.hog["highest medal achieved"]}</p>
            <p>Specialty: {props.hog.specialty}</p>
        </div>
    )
}

export default HogDetails 