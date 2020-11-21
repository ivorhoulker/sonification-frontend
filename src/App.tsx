import React from "react";
import useApi from "./useApi";
import * as Tone from "tone";

function App() {
  const { data } = useApi();
  const synth = new Tone.Synth().toDestination();

  const play = async () => {
    await Tone.start();
    console.log("audio is ready");
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + 1);
  };

  return (
    <div>
      <div>
        {" "}
        <button onClick={play}>Start Sound</button>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
