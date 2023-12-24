// import { useState } from "react";
// import Artist from "./Artist";

const ArtistList = ({ artists, selected, pickArtist, addArtist, removeArtist }) => {
  const getSelectedArtist = (index) => (selected === index ? "selectedArtist" : "");

  return (
    <div className="artistListSection">
      <div className="artistList">
        {artists.map((artist, key) =>
          <div 
            className={`artistSection ${getSelectedArtist(key)}`}
            onClick={()=>pickArtist(key)}
            key={key}
          >
            <p>Name: {artist.name}</p>
            <p>Nationality: {artist.nationality}</p>
            <p>Age: {artist.age}</p>
          </div>
        )}
      </div>

      <div className="buttons">
        <button className="button" onClick={()=>addArtist()}>add artist</button>
        <button className="button" onClick={()=>removeArtist(selected)}>remove artist</button>
      </div>

    </div>

  );
}

export default ArtistList;