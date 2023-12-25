import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import { useState, useEffect } from "react";

function App() {
  const [artists, setArtists] = useState([]);
  const [selected, setSelected] = useState('');
  const [song, setSong] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/artists')
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch the data...')
        }
        return res.json();
      })
      .then(data => {
        setArtists(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Home
              artists={artists}
              setArtists={setArtists}
              selected={selected}
              setSelected={setSelected}
              song={song}
              setSong={setSong}
              error={error}
              setError={setError}
            />} />
          <Route path="/artist" element={
            <Artist
              artists={artists}
              setArtists={setArtists}
              selected={selected}
              setSelected={setSelected}
              song={song}
              setSong={setSong}
            />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
