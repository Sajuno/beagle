import React from "react";
import { Link } from "react-router-dom";
import "./DogopediaMain.css";
import ReturnButton from '../ReturnButton'

export default function DogopediaMain(props) {
    return (
    <> 
    <ReturnButton toPath={'../home'} pageName={'Home'}/>
    <ReturnButton toPath={'../game-one'} pageName={'Game One'}/>
    <ReturnButton toPath={'../game-two'} pageName={'Game Two'}/>
    <ReturnButton toPath={'../game-three'} pageName={'Game Three'}/>
    <ReturnButton toPath={'../profile'} pageName={'Profile'}/>
    <div className="DogopediaMainDiv">
        <img alt="wiki" className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Wikipedia_logo_%28svg%29.svg" />
        <h1 className="dogopedia-h1"> Dogopedia </h1>
        <p className="wiki">the free encyclopedia that nobody can edit.</p>
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
