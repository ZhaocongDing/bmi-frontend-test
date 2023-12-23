import threeLinesMenu from './images/three-bars.svg';
import newTab from './images/in-new-tab.svg';

const ArtistDetails = () => {
  const songLyrics = `[Verse 1]`;

  const songDetails = `Composer: Composer`;

  return (
    <div className="artistDetailsSection">
      <header className="artistTitle">
        <img
          src={threeLinesMenu}
          alt="menu-of-three-lines-icon"
          className="three-lines"
        />
        <p className="artistDetailsTitle">Bruno Mars: That's What I Like</p>
        <img
          src={newTab}
          alt="new-tab-icon"
          className="new-tab"
        />
      </header>

      <div className="songLyrics">
        <p>{songLyrics}</p>
      </div>
      
      <div className="songDetails">
        <p>{songDetails}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;