import React from "react";
import { Link } from "react-router-dom";

export default function DogopediaMain(props) {
  return (
    <div>
      <h1>
        Dogopedia
        <br />
        <br />
      </h1>
      <div>
        <ul>
          {props.dogTypes.map(dogType => (
            <li key={dogType}>
              {/* {dogType} */}
              <Link to={`/dogopedia/${dogType}`}>{dogType}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
