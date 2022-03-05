import { useState } from "react";
import "./Player.css";

function Player({ytPlayerReady, videoId, uniqueKey}) {
  const [playerCreated, setPlayerCreated] = useState(false);
  const [paused, setPaused] = useState(false);

  const id = `player-${uniqueKey}`;

  const onPlayerReady = () => { console.log("ready!")}

  const onPlayerStateChange = (event) => {
    if(event.data == window.YT.PlayerState.PAUSED) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  }

  const createPlayer = () => {
    new window.YT.Player(id, {
      height: "390",
      width: "640",
      videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  if (ytPlayerReady) 
    createPlayer();


  const classes = 'overlay ' + (paused ? 'paused' : '');
  return (
    <>
      <div className={classes}></div>
      <div id={id}></div>
    </>
  );
}

export default Player;
