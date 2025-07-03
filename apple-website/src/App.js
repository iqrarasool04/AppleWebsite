import React from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import FeatureTextSection from "./components/FeatureTextSection";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <FeatureTextSection/>
      <InfoSection/>
    </div>
  );
}

export default App;
