import { useState } from "react";
import ArtistList from "./ArtistList";
import ArtistDetails from "./ArtistDetails";

function App() {
  const [artists, setArtists] = useState([
    { name: 'Bruno Mars', nationality: 'American', age: '20', id: 0, artistDetailsTitle: 'Bruno Mars: That\'s What I Like', songLyrics: '[Verse 1]', songDetails: 'Composer: Composer' },
    { name: 'Adele', nationality: 'English', age: '21', id: 1, artistDetailsTitle: '1', songLyrics: '1', songDetails: '1' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 2, artistDetailsTitle: '2', songLyrics: '2', songDetails: '2' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 3, artistDetailsTitle: '3', songLyrics: '3', songDetails: '3' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 4, artistDetailsTitle: '4', songLyrics: '4', songDetails: '4' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 5, artistDetailsTitle: '5', songLyrics: '5', songDetails: '5' },
    { name: 'Michael Jackson', nationality: 'American', age: '19', id: 6, artistDetailsTitle: '6', songLyrics: '6', songDetails: '6' }
  ]);

  const [selected, setSelected] = useState('');

  const pickArtist = (id) => {
    setSelected(id);
  }

  return (
    <div className="App">
      <div className="app-content">
        <ArtistList 
          artists={artists}
          selected={selected}
          onClick={pickArtist}
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
