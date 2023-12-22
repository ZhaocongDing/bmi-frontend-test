import Artist from "./Artist";

const ArtistList = () => {
  const artists = [
    { name: 'Bruno Mars', nationality: 'American', age: '20' },
    { name: 'Adele', nationality: 'English', age: '21' },
    { name: 'Michael Jackson', nationality: 'American', age: '19' },
  ];

  return (
    <div className="artistListSection">
      <ul className="artistList">
        {artists.map((artist) =>
          <Artist
            name={artist.name}
            nationality={artist.nationality}
            age={artist.age}
          />
        )}
      </ul>

      <button className="button">add artist</button>
      <button className="button">remove artist</button>
    </div>

  );
}

export default ArtistList;