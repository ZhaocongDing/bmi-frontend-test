import { useState } from "react";
// import Artist from "./Artist";

const ArtistList = () => {
  const artists = [
    { name: 'Bruno Mars', nationality: 'American', age: '20', id: 0 },
    { name: 'Adele', nationality: 'English', age: '21', id: 1 },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 2 },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 3 },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 4 },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 5 },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 6 },
  ];

  const [selectArtist, setSelectArtist] = useState('');

  const handleClick = (id) => {
    setSelectArtist(id);
  }

  const getSelectedArtist = (id) => (selectArtist === id ? "selectedArtist" : "");

  return (
    <div className="artistListSection">
      <div className="artistList">
        {artists.map((artist, key) =>
          <div 
            className={`artistSection ${getSelectedArtist(artist.id)}`}
            onClick={() => handleClick(artist.id)}
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