import React, { useState, useEffect } from "react";
import useApi from "./useApi";
import * as Tone from "tone";
import Speech from "speak-tts";
// import fakeData from "./fakeApi.json";
import {
  getJyutping,
  getTones,
  getTonesFromOtherDictionary,
} from "./chinese/jyutpingify";

function toneNumberToNote(n: number) {
  const notes = ["C5", "B4", "G4", "D4", "F4", "E4"];
  const note = notes[n - 1];
  console.log(note);
  return note;
}

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
function chineseSentenceToNotes(sentence: string) {
  // const words = sentence.replace(
  //   /[〇一-鿿㐀-䶿豈-﫿𠀀-𪛟𪜀-𫜿𫝀-𫠟丽-𯨟⼀-⿕⺀-⻳＂＃＄％＆＇（）＊＋，－／：；＜＝＞＠［＼］＾＿｀｛｜｝～｟｠｢｣､　、〃〈〉《》「」『』【】〔〕〖〗〘〙〚〛〜〝〞〟〰〾〿–—‘’‛“”„‟…‧﹏﹑﹔·]*[！？｡。][」﹂”』’》）］｝〕〗〙〛〉】]/gi,
  //   " "
  // );

  // const tones = getTones(sentence);
  const tones = "14526123456";
  const output = tones
    .split("")
    .map((char, i) => {
      const time = `${Tone.Time(i / 2).toBarsBeatsSixteenths()}`;

      if (char.match(/[0-9]/gi)) {
        //is number
        const arr = [time, toneNumberToNote(parseInt(char))];
        return arr;
      } else {
        return null;
      }
    })
    .filter((x) => !!x);
  return output;
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
  const [speech, setSpeech] = useState(new Speech());
  const [speaking, setSpeaking] = useState(false);
  const [speechPaused, setSpeechPaused] = useState(false);
  const { data, refreshData } = useApi();
  const [toneInitialized, setToneInitialized] = useState(false);
  const synth = new Tone.Synth().toDestination();

  async function speakText(text: string) {
    try {
      setSpeaking(true);
      await speech.speak({
        text,
      });
      setSpeaking(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function pauseText() {
    try {
      await speech.pause();
      setSpeechPaused(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function resumeText() {
    try {
      await speech.resume();
      setSpeechPaused(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function cancelSpeak() {
    try {
      await speech.cancel();
      setSpeaking(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function initSpeak() {
    try {
      if (!speech) {
        setSpeech(new Speech());
      }
      const data = await speech.init({
        volume: 1,
        lang: "zh-HK",
        rate: 1,
        pitch: 1,
        splitSentences: true,
      });
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    initSpeak();
  }, []);

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
  const [sentence, setSentence] = useState(
    "呢套方案目前得到香港教育、電腦中文資訊處理等多方面嘅支持。基於粵拼嘅拼音輸入法亦都發展得相當成熟。除咗香港，台灣同日本亦都有使用呢套方案嘅輸入系統出售，內地都有民間人士據此製作嘅輸入方案。方案得到政府、商界、學界等廣泛認同。"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setSentence(e.target.value);
  };
  const handlePlaySentence = () => {
    playFromUserInput(sentence);
  };
  const playFromUserInput = async (str: string) => {
    if (!toneInitialized) {
      await Tone.start();
      console.log("audio is ready");
      setToneInitialized(true);
    }
    stop();
    const notesArray = chineseSentenceToNotes(sentence);
    console.dir(notesArray);

    new Tone.Part(function (time, value) {
      synth.triggerAttackRelease(value, "16n", time);
    }, notesArray).start(0);

    Tone.Transport.bpm.value = 70;
    Tone.Transport.start();
  };
  return (
    <div>
      {/* <div>
        <button onClick={play}>Start Sound</button>
        <button onClick={stop}>Stop Sound</button>
      </div> */}
      {/* <div>
        <button onClick={handleRefreshData}>Get New Data</button>
        {/* {JSON.stringify(data ?? fakeData)}
      </div> */}
      <div>
        <form>
          <textarea
            rows={20}
            cols={50}
            onChange={handleInputChange}
            value={sentence}
            name="sentence"
          ></textarea>
        </form>
        {/* <button onClick={handlePlaySentence}>Play sentence</button> */}

        {speaking && !speechPaused ? (
          <button onClick={() => pauseText()}>Pause sentence</button>
        ) : speaking && speechPaused ? (
          <button onClick={() => resumeText()}>Resume sentence</button>
        ) : (
          <button onClick={() => speakText(sentence)}>Speak sentence</button>
        )}
        {speaking && (
          <button onClick={() => cancelSpeak()}>Cancel sentence</button>
        )}
      </div>
    </div>
  );
}

export default App;
