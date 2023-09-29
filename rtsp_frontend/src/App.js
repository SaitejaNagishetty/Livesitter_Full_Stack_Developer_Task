import React from "react";
import "./App.css";
import OverlayManager from "./components/VideoPlayer/OverlayManager";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { OverlayProvider } from "./components/VideoPlayer/OverlayContext";

function App() {
  return (
    <div className="App">
      <h1>RTSP Streaming App</h1>
      <OverlayProvider>
        <VideoPlayer />
        <OverlayManager />
      </OverlayProvider>
    </div>
  );
}

export default App;
