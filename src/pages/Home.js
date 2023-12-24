import { useState } from "react";
import ArtistList from "../components/ArtistList";
import ArtistDetails from "../components/ArtistDetails";
import AddArtistPopup from "../components/AddArtistPopup";
import SelectSongPopup from "../components/SelectSongPopup";
import ArtistInNewTab from "../components/ArtistInNewTab";

const Home = () => {
  const [artists, setArtists] = useState([
    { name: 'Bruno Mars', nationality: 'American', age: '20', songs: [{artistDetailsTitle: 'That\'s What I Like', songLyrics: '[Verse 1]', songDetails: 'Composer: Composer'}, {artistDetailsTitle: 'song2', songLyrics: 'song2', songDetails: 'song2'}] },
    { name: 'Adele', nationality: 'English', age: '21', songs: [{artistDetailsTitle: 'a2 s1', songLyrics: 'a2 s1', songDetails: 'a2 s1'}, {artistDetailsTitle: 'song2', songLyrics: 'song2', songDetails: 'song2'}] },
    { name: 'Michael Jackson', nationality: 'American', age: '19', songs: [{artistDetailsTitle: 'a3 s1', songLyrics: '[a3 s1 1]', songDetails: 'Composer: Composer'}, {artistDetailsTitle: 'a3 s2', songLyrics: 'song2', songDetails: 'song2'}] }
  ]);

  const [selected, setSelected] = useState(artists.length !== 0 ? 0 : '');
  const [song, setSong] = useState(0);
  const [addArtistPopup, setAddArtistPopup] = useState(false);
  const [songPopup, setSongPopup] = useState(false);

  // select artist to highlight
  const pickArtist = (index) => {
    setSelected(index);
    setSong(0);
  }

  // open add artist popup
  const addArtist = () => {
    setAddArtistPopup(true);
  }

  // add a new artist to list 
  const addToList = (data) => {
    // add blank artist details to new artist
    data.songs = [{
      artistDetailsTitle: '',
      songLyrics: '',
      songDetails: ''
    }];

    setAddArtistPopup(false);
    setArtists([...artists, data]);
    setSelected(artists.length);
    setSong(0);
  }

  const removeArtist = (selected) => {
    const filteredList = artists.filter((artist) => artists.indexOf(artist) !== selected);
    setArtists(filteredList);
    setSelected(artists.length !== 0 ? 0 : '');
  }

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
          setTrigger={setSongPopup}
          song={song}
        />
      </div>

      <AddArtistPopup 
        trigger={addArtistPopup}
        setTrigger={setAddArtistPopup}
        addToList={addToList}
      />

      <SelectSongPopup
        trigger={songPopup}
        selected={selected}
        artists={artists}
        setTrigger={setSongPopup}
        pickSong={pickSong}
      />

      {null && <ArtistInNewTab
        selected={selected}
        artists={artists}
      />}
    </div>
  );
}
 
export default Home;