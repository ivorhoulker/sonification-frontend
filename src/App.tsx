import React, { useState } from "react";
import useApi from "./useApi";
import * as Tone from "tone";
import fakeData from "./fakeApi.json";

function charToNote(char: string) {
  const notes = [
    "A4",
    "Bb4",
    "B4",
    "C4",
    "Db4",
    "D4",
    "Eb4",
    "E4",
    "F4",
    "Gb4",
    "G4",
    "Ab4",
  ];
  const note = notes[char.charCodeAt(0) % notes.length];
  console.log(note);
  return note;
}
function sentenceToNotes(sentence: string) {
  const words = sentence
    .split("")
    .map((char, j) => {
      const time = `${Tone.Time(j / 4).toBarsBeatsSixteenths()}`;
      if (char === " ") return null;
      if (char === ".") return [time, "C0"];
      const arr = [time, charToNote(char)];
      return arr;
    })
    .filter((x) => !!x);

  return words;
}
function App() {
  const { data, refreshData } = useApi();
  const [toneInitialized, setToneInitialized] = useState(false);
  const synth = new Tone.Synth().toDestination();

  const play = async () => {
    if (!toneInitialized) {
      await Tone.start();
      console.log("audio is ready");
      setToneInitialized(true);
    }
    stop();
    const notesArray = sentenceToNotes(data);
    console.log(JSON.stringify(notesArray));

    new Tone.Part(function (time, value) {
      synth.triggerAttackRelease(value, "16n", time);
    }, notesArray).start(0);

    Tone.Transport.bpm.value = 128;
    Tone.Transport.start();
  };

  const stop = async () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
  };

  function handleRefreshData() {
    refreshData();
    stop();
    play();
  }

  return (
    <div>
      <div>
        <button onClick={play}>Start Sound</button>
        <button onClick={stop}>Stop Sound</button>
      </div>
      <div>
        <button onClick={handleRefreshData}>Get New Data</button>
        {JSON.stringify(data ?? fakeData)}
      </div>
    </div>
  );
}

export default App;
