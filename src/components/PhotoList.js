import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";

function PhotoList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=SQJhqir0uqTQe0oUqB6G3TAKRy84CW4uC59IbCbm")
      .then(response => {
        const info = response.data;
        console.log(info);

        setInfo(info);
      })
      .catch(error => {
        console.log('No data received', error);
      })
  }, []);

  return (
    <div className="photo-card">
      {
        <PhotoCard url={info.url} title={info.title} explanation={info.explanation} copyright={info.copyright} date={info.date} />
      }
    </div>
  )
}



export default PhotoList;
