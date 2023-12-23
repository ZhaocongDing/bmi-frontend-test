import threeLinesMenu from './images/three-bars.svg';
import newTab from './images/in-new-tab.svg';

const ArtistDetails = ({ artists, selected }) => {

  return (
    <div className="artistDetailsSection">
      <header className="artistTitle">
        <img
          src={threeLinesMenu}
          alt="menu-of-three-lines-icon"
          className="three-lines"
        />
        <p className="artistDetailsTitle">
          {selected !== '' ? artists[selected].artistDetailsTitle : ''}
        </p>
        <img
          src={newTab}
          alt="new-tab-icon"
          className="new-tab"
        />
      </header>

      <div className="songLyrics">
        <p>{selected !== '' ? artists[selected].songLyrics : ''}</p>
      </div>
      
      <div className="songDetails">
        <p>{selected !== '' ? artists[selected].songDetails : ''}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;