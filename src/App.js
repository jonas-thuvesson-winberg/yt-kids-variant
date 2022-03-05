import logo from "./logo.svg";
import "./App.css";
import Player from "./components/player/Player";
import { useState } from "react";



function App() {
  const [ytPlayerReady, setYtPlayerReady] = useState(false);

  const setUpYoutubeApi = () => {
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      console.log("loading script");

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = () => {
        //setTimeout(() => {
        if (!ytPlayerReady) {
          setYtPlayerReady(true);
        }

        console.log("loaded!");
        //});
      };
      

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      console.log("already loaded!");
      if (!ytPlayerReady) {
        setYtPlayerReady(true);
      }
    }
  };

  setUpYoutubeApi();

  return (
    <div className="App">
      <header className="App-header">
        <Player ytPlayerReady={ytPlayerReady} videoId={"M7lc1UVf-VE"} uniqueKey={1} />
        <Player ytPlayerReady={ytPlayerReady} videoId={"K7i_prMTVWE"} uniqueKey={2} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
