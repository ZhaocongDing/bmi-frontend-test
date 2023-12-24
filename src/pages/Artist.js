import { useState, useEffect } from "react";
import ArtistDetails from "../components/ArtistDetails";
import SelectSongPopup from "../components/SelectSongPopup";

const Artist = () => {
  const [artists, setArtists] = useState([]);
  const [selected, setSelected] = useState('');
  const [song, setSong] = useState(0);

  useEffect(() => {
    setArtists(JSON.parse(localStorage.getItem("artists")));
    setSelected(localStorage.getItem("selected"));
    setSong(localStorage.getItem("song"));
  }, []);

  const [songPopup, setSongPopup] = useState(false);

  const pickSong = (songTitle) => {
    let tempSong;
    for(let i = 0; i < artists[selected].songs.length; i++) {
      if(artists[selected].songs[i].artistDetailsTitle === songTitle) {
        tempSong = i
      }
    }
    setSong(tempSong);
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