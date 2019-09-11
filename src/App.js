import React from "react";
import "./App.css";
// import PhotoCard from "./components/PhotoCard";
import PhotoList from './components/PhotoList';

function App(props) {
  return (
    <div className="App">
      <header>
        <div className="h1-div">
          <h1>NASA Photo Of The Day</h1>
        </div>
      </header>
      <div className="photo-card">
        <PhotoList />
      </div>
      <footer>
        <p>NASA POTD - By Joe Denson 2019.</p>
      </footer>
    </div>
  );
}

export default App;
