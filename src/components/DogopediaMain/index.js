import React from "react";
import { Link } from "react-router-dom";
import "./DogopediaMain.css";
import ReturnButton from '../ReturnButton'

export default function DogopediaMain(props) {
  return (
    <> 
    <ReturnButton toPath={'../'} pageName={'Landing page'}/>
    <ReturnButton toPath={'../game-one'} pageName={'Game One'}/>
    <div className="DogopediaMainDiv">
      <h1>
        Dogopedia
        <br />
        <br />
      </h1>
      <div className="DogopediaListDiv">
        <ul className="DogopediaListItems">
          {props.dogTypes.map(dogType => (
            <li class="Dogopedia" key={dogType}>
              <Link to={`/dogopedia/${dogType}`}>{dogType}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div> </>
  );
}
