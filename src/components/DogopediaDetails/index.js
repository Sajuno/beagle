import React from "react";
import { Link } from "react-router-dom";
import "./DogopediaDetails.css";

export default function DogopediaDetails(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const wikiInfo = props.wikiInfo;
  //   console.log("props in DogopediaDetails:", wikiInfo);
  //   console.log("all props: ", props);

  const images = props.images;
  const dogName = capitalizeFirstLetter(props.match.params.dogType);
  return (
    <div className="DogopediaDetailsDiv">
      <div className="textDiv">
        Here's some images of the {dogName}
        <br />
      </div>
      <div className="dogWikiDiv">{wikiInfo}</div>
      <div className="dogImageContainerDiv">
        {images &&
          images.map(url => (
            <div className="dogImageDiv" key={url}>
              <img class="Dogopedia" key={url} src={url} alt="Dog" />
            </div>
          ))}
        {!images && "Loading..."}
      </div>
      <div className="linkBackToMain">
        <Link to="/dogopedia">Go back to the list of dogs</Link>
      </div>
    </div>
  );
}
