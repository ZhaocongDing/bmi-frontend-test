import { useState } from "react";
import ArtistList from "./ArtistList";
import ArtistDetails from "./ArtistDetails";

function App() {
  const [artists, setArtists] = useState([
    { name: 'Bruno Mars', nationality: 'American', age: '20', artistDetailsTitle: 'Bruno Mars: That\'s What I Like', songLyrics: '[Verse 1]', songDetails: 'Composer: Composer' },
    { name: 'Adele', nationality: 'English', age: '21', artistDetailsTitle: '1', songLyrics: '1', songDetails: '1' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', artistDetailsTitle: '2', songLyrics: '2', songDetails: '2' }
  ]);

  const [selected, setSelected] = useState(artists.length !== 0 ? 0 : '');

  const pickArtist = (index) => {
    setSelected(index);
  }

  const addArtist = () => {
    console.log('add artist');
  }

  const removeArtist = (selected) => {
    const filteredList = artists.filter((artist) => artists.indexOf(artist) !== selected);
    setArtists(filteredList);
    setSelected(artists.length !== 0 ? 0 : '');
  }

  return (
    <div className="App">
      <div className="app-content">
        <ArtistList 
          artists={artists}
          selected={selected}
          pickArtist={pickArtist}
          addArtist={addArtist}
          removeArtist={removeArtist}
        />
        <ArtistDetails 
          artists={artists}
          selected={selected}
        />
      </div>
    </div>
  );
}

export default App;
