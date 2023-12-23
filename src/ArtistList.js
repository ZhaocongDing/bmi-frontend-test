// import { useState } from "react";
// import Artist from "./Artist";

const ArtistList = ({ artists, selected, onClick }) => {
  const getSelectedArtist = (id) => (selected === id ? "selectedArtist" : "");

  return (
    <div className="artistListSection">
      <div className="artistList">
        {artists.map((artist, key) =>
          <div 
            className={`artistSection ${getSelectedArtist(artist.id)}`}
            onClick={() => onClick(artist.id)}
            key={key}
          >
            <p>Name: {artist.name}</p>
            <p>Nationality: {artist.nationality}</p>
            <p>Age: {artist.age}</p>
          </div>
        )}
      </div>

      <div className="buttons">
        <button className="button">add artist</button>
        <button className="button">remove artist</button>
      </div>

    </div>

  );
}

export default ArtistList;