import threeLinesMenu from './images/three-bars.svg';
import newTab from './images/in-new-tab.svg';

const ArtistDetails = () => {
  const songLyrics = `
  [Verse 1]
  Ayy, ayy, ayy
  I got a condo in Manhattan
  Baby girl, what's happenin'?
  You and your ass invited
  So go on and get to clappin'
  So pop it for a player
  Pop, pop it for me
  Turn around and drop it for a player
  Drop, drop it for me
  I'll rent a beach house in Miami (-ami)
  Wake up with no jammies (Nope)
  Lobster tail for dinner
  Julio, serve that scampi (Julio!)
  You got it if you want it
  Got, got it if you want it
  Said, you got it if you want it
  Take my wallet if you want it now

  [Pre-Chorus]
  Jump in the Cadillac, girl, let's put some miles on it
  Anything you want, just to put a smile on it
  You deserve it, baby, you deserve it all
  And I'm gonna give it to you

  [Chorus]
  Gold jewelry shinin' so bright
  Strawberry champagne on ice
  Lucky for you, that's what I like, that's what I like
  Lucky for you, that's what I like, that's what I like
  Sex by the fire at night
  Silk sheets and diamonds all white
  Lucky for you, that's what I like, that's what I like
  Lucky for you, that's what I like, that's what I like

  [Verse 2]
  I'm talkin' trips to Puerto Rico (Bih)
  Say the word and we go (Say it)
  You can be my freaka (Brrrt!)
  Girl, I'll be your fleeko, Mamacita
  I'll never make a promise that I can't keep
  I promise that your smile ain't gon' ever leave
  Shoppin' sprees in Paris
  Everything 24 karats
  Take a look in that mirror
  Now tell me, who's the fairest?
  Is it you? (Is it you?) Is it me? (Is it me?)
  Say it's us (Say it's us) and I'll agree, baby

  [Pre-Chorus]
  Jump in the Cadillac, girl, let's put some miles on it
  Anything you want, just to put a smile on it
  You deserve it, baby, you deserve it all
  And I'm gonna give it to you

  [Chorus]
  Gold jewelry shinin' so bright
  Strawberry champagne on ice
  Lucky for you, that's what I like, that's what I like
  Lucky for you, that's what I like, that's what I like
  Sex by the fire at night
  Silk sheets and diamonds all white
  Lucky for you, that's what I like, that's what I like
  Lucky for you, that's what I like, that's what I like
  [Bridge]
  You say you want a good time
  Well, here I am, baby, here I am, baby
  Talk to me, talk to me, talk to me baby
  Tell me, what's on your mind? (What's on your mind?)
  If you want it, girl, come and get it
  All this is here for you
  Tell me, baby, tell me, tell me, baby
  What you tryna do?

  [Chorus]
  Gold jewelry shinin' so bright
  Strawberry champagne on ice
  Lucky for you, that's what I like, that's what I like (That's what I like, babe)
  Lucky for you, that's what I like, that's what I like (Oh, oh)
  Sex by the fire at night
  Silk sheets and diamonds all white (All white)
  Lucky for you, that's what I like, that's what I like (That's what I like, babe)
  Lucky for you, that's what I like, that's what I like (Ooh, ooh, ooh)`;

  const songDetails = `
  Composer: Composer 
  Name Producer: Producer Name 
  Production Date: Production Date 
  Composer: Composer 
  Name Producer: Producer Name 
  Production Date: Production Date 
  Composer: Composer 
  Name Producer: Producer Name 
  Production Date: Production Date 
  Composer: Composer 
  Name Producer: Producer Name 
  Production Date: Production Date 
  Awards: Awards`;

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