import { useState } from "react";
import ArtistDetails from "../components/ArtistDetails";
import SelectSongPopup from "../components/SelectSongPopup";

const Artist = () => {
  const [artists, setArtists] = useState([
    { name: 'Bruno Mars', nationality: 'American', age: '20', songs: [{artistDetailsTitle: 'That\'s What I Like', songLyrics: '[Verse 1]', songDetails: 'Composer: Composer'}, {artistDetailsTitle: 'song2', songLyrics: 'song2', songDetails: 'song2'}] },
    { name: 'Adele', nationality: 'English', age: '21', songs: [{artistDetailsTitle: 'a2 s1', songLyrics: 'a2 s1', songDetails: 'a2 s1'}, {artistDetailsTitle: 'song2', songLyrics: 'song2', songDetails: 'song2'}] },
    { name: 'Michael Jackson', nationality: 'American', age: '19', songs: [{artistDetailsTitle: 'a3 s1', songLyrics: '[a3 s1 1]', songDetails: 'Composer: Composer'}, {artistDetailsTitle: 'a3 s2', songLyrics: 'song2', songDetails: 'song2'}] }
  ]);

  const [selected, setSelected] = useState(artists.length !== 0 ? 0 : '');
  const [song, setSong] = useState(0);
  const [songPopup, setSongPopup] = useState(false);

  const pickSong = (songTitle) => {
    let tempSong;
    for(let i = 0; i < artists[selected].songs.length; i++) {
      if(artists[selected].songs[i].artistDetailsTitle === songTitle) {
        tempSong = i
      }
    }
    setSong(tempSong);
    console.log('song: ', song);
  }

  return (
    <div className="App">
      <div className="app-content">
        <ArtistDetails 
          artists={artists}
          selected={selected}
          setTrigger={setSongPopup}
          song={song}
        />
      </div>

      <SelectSongPopup
        trigger={songPopup}
        selected={selected}
        artists={artists}
        setTrigger={setSongPopup}
        pickSong={pickSong}
      />
    </div>
  );
}
 
export default Artist;