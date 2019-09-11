import React from "react";


const PhotoCard = props => {
  return (
    <div className="photo-card" key={props.id}>
      <img className="nasa-photo" alt="pic of the day" src={props.url} />
      <h2>{props.title}</h2>

    </div>
  );
};

export default PhotoCard;
