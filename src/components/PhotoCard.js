import React from "react";


const PhotoCard = props => {
  return (
    <div className="photo-card">
      <h2>{props.title}</h2>
      <img className="nasa-photo" alt="pic of the day" src={props.url} />
      <h3>{props.explanation}</h3>
      <h4>Copyright: {props.copyright}</h4>
    </div>
  );
};

export default PhotoCard;
