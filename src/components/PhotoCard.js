import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const PhotoCard = props => {
  return (
    <div className="photo-card">
      <Card>
        <CardBody>
          <CardTitle className="card-title">{props.title}</CardTitle>
          <CardSubtitle className="card-date">{props.date}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.url} alt="pic of the day"></CardImg>
        <CardBody>
          <CardText className="explanation-text">{props.explanation}</CardText>
          <CardText className="card-copyright">Copyright: {props.copyright}</CardText>
        </CardBody>
      </Card>
    </div>

  )
};

export default PhotoCard;

