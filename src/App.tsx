import React, { useState } from "react";
import useApi from "./useApi";
import * as Tone from "tone";
import fakeData from "./fakeApi.json";
function App() {
  const { data } = useApi();
  const [toneInitialized, setToneInitialized] = useState(false);
  const synth = new Tone.Synth().toDestination();
  const bassSynth = new Tone.MembraneSynth().toDestination();

  const play = async () => {
    if (!toneInitialized) {
      await Tone.start();
      console.log("audio is ready");
      setToneInitialized(true);
    }

    const loop = new Tone.Loop((time) => {
      synth.triggerAttackRelease("G2", "4n", time);
      bassSynth.triggerAttackRelease("c0", "16n", time);
    }, "4n").start(0);
    Tone.Transport.bpm.value = 128;
    Tone.Transport.start();
    // const now = Tone.now();
    // synth.triggerAttackRelease("C4", "8n", now);
    // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    // synth.triggerAttackRelease("G4", "8n", now + 1);
  };

  const stop = async () => {
    Tone.Transport.stop();
  };

  return (
    <div>
      <div>
        <button onClick={play}>Start Sound</button>
        <button onClick={stop}>Stop Sound</button>
      </div>
      <div>{JSON.stringify(data ?? fakeData)}</div>
    </div>
  );
}

export default App;
