const SelectSongPopup = ({ trigger, selected, artists, setTrigger, pickSong }) => {
  return (trigger) ? (
    <div className="song-popup">
      <div className="song-popup-inner">
        <h1>Select a Song</h1>
        <div className="song-btns">
          {artists[selected] && artists[selected].songs.map((song, key) => {
            return (
              song.artistDetailsTitle !== '' &&
              <button
                key={key}
                className="song-btn"
                onClick={() => { setTrigger(false); pickSong(song.artistDetailsTitle); }}
              >
                {song.artistDetailsTitle}
              </button>
            )
          }
          )}
          <button className="close-btn" onClick={() => {setTrigger(false)}}>Close</button>
        </div>
      </div>
    </div>
  ) : '';
}

export default SelectSongPopup;