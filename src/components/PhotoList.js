import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoList() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=SQJhqir0uqTQe0oUqB6G3TAKRy84CW4uC59IbCbm")
      .then(response => {

        const photo = response.data.url;

        setPhoto(photo);
      })
      .catch(error => {
        console.log('No data received', error);
      })
  }, []);

  return (
    <div className="photo-card">
      <h3>Title Goes Here</h3>
      <PhotoCard url={photo} />
    </div>
  )
}



export default PhotoList;
