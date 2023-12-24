import threeLinesMenu from '../images/three-bars.svg';
import newTab from '../images/in-new-tab.svg';
import { useLocation } from "react-router-dom";

const ArtistDetails = ({ artists, selected, setTrigger, song }) => {
  const artistDetailsTitle = artists.length && artists[selected] ? artists[selected].songs[song].artistDetailsTitle : '';
  const songLyrics = artists.length && artists[selected] ? artists[selected].songs[song].songLyrics : '';
  const songDetails = artists.length && artists[selected] ? artists[selected].songs[song].songDetails : '';

  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="artistDetailsSection">
      <header className="artistTitle">
        <img
          src={threeLinesMenu}
          alt="menu-of-three-lines-icon"
          className="three-lines"
          onClick={()=>setTrigger(true)}
        />

        <p className="artistDetailsTitle">
          {selected !== '' && artists[selected] ? `${artists[selected].name}: ${artistDetailsTitle}` : ''}
        </p>

        {pathname !== '/artist' && <img
          src={newTab}
          alt="new-tab-icon"
          className="new-tab"
          onClick={()=>openNewTab('http://localhost:3000/artist')}
        />}
      </header>

      <div className="songLyrics">
        <p>{selected !== '' ? songLyrics : ''}</p>
      </div>
      
      <div className="songDetails">
        <p>{selected !== '' ? songDetails : ''}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;