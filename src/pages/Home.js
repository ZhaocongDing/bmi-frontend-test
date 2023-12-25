import { useState, useEffect } from "react";
import ArtistList from "../components/ArtistList";
import ArtistDetails from "../components/ArtistDetails";
import AddArtistPopup from "../components/AddArtistPopup";
import SelectSongPopup from "../components/SelectSongPopup";

const Home = ({ artists, setArtists, selected, setSelected, song, setSong, error, setError }) => {
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
    setAddArtistPopup(false);
    // add blank artist details to new artist
    data.songs = [{
      artistDetailsTitle: '',
      songLyrics: '',
      songDetails: ''
    }];

    fetch('http://localhost:8000/artists', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw Error('could not post the data to database...')
        } else {
          setArtists([...artists, data]);
          setSelected(artists.length);
          setSong(0);
        }
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const removeArtist = (selected) => {
    if (artists.length !== 0) {
      const id = artists[selected].id;
      const filteredList = artists.filter((artist) => artists.indexOf(artist) !== selected);

      fetch('http://localhost:8000/artists/' + id, {
        method: 'DELETE'
      })
        .then(res => {
          if (!res.ok) {
            throw Error('could not finish delete...')
          } else {
            setArtists(filteredList);
            setSelected(artists.length !== 0 ? 0 : '');
          }
        })
        .catch(err => {
          setError(err.message);
        })
    }
  }

  const pickSong = (songTitle) => {
    let tempSong;
    for (let i = 0; i < artists[selected].songs.length; i++) {
      if (artists[selected].songs[i].artistDetailsTitle === songTitle) {
        tempSong = i
      }
    }
    setSong(tempSong);
  }

  useEffect(() => {
    localStorage.setItem('artists', JSON.stringify(artists));
    localStorage.setItem('selected', selected);
    localStorage.setItem('song', song);
  }, [artists, selected, song]);

  return (
    <div className="App">
      <div className="app-content">
        <ArtistList
          artists={artists}
          selected={selected}
          pickArtist={pickArtist}
          addArtist={addArtist}
          removeArtist={removeArtist}
          error={error}
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
    </div>
  );
}

export default Home;