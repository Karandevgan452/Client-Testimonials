import React from 'react';

const TestimonialCard = (props) => {
    return (
        <div>
        <h2>CustomerName = {props.CustomerName}</h2>
        <h3> Review = {props.Review}</h3>
        </div>
    )
};

export default TestimonialCard;