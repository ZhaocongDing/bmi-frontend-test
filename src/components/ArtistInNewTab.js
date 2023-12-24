import threeLinesMenu from '../images/three-bars.svg';

const ArtistInNewTab = ({ artists, selected, setTrigger, song }) => {
  const artistDetailsTitle = artists.length && artists[selected] ? artists[selected].songs[song].artistDetailsTitle : '';
  const songLyrics = artists.length && artists[selected] ? artists[selected].songs[song].songLyrics : '';
  const songDetails = artists.length && artists[selected] ? artists[selected].songs[song].songDetails : '';

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

export default ArtistInNewTab;