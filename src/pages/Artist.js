import { useState } from "react";
import ArtistDetails from "../components/ArtistDetails";
import SelectSongPopup from "../components/SelectSongPopup";

const Artist = ({ artists, selected, song, setSong }) => {
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