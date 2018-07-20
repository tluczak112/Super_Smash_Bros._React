import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div onClick={() => props.Selected(props.id)} className = "card">
        <div className = "img-container">
            <img className = "responsive-img" src = {props.image} alt = "Smash Bros"/>
            </div>
    </div>
);

export default ImageCard;