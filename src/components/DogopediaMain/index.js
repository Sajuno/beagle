import React from "react";
import { Link } from "react-router-dom";
import "./DogopediaMain.css";

export default function DogopediaMain(props) {
  return (
    <div className="DogopediaMainDiv">
      <h1>
        Dogopedia
        <br />
        <br />
      </h1>
      <div className="DogopediaListDiv">
        <ul className="DogopediaListItems">
          {props.dogTypes.map(dogType => (
            <li key={dogType}>
              <Link to={`/dogopedia/${dogType}`}>{dogType}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
