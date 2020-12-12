const jyutping = require("./data/jyutping.json");
const pyJyut = require("./data/pyJyut.json");
interface Character {
  CH: string;
  UCODE: string;
  JP: string;
  INIT: string;
  FINL: string;
  TONE: string;
}
function jyutpingify(s: string, isToned = true) {
  if (typeof s !== "string") throw new TypeError("String required");
  let hasJP = true;
  return s.split("").reduce((str, el) => {
    const cResult = jyutping[el] as Character;
    let char =
      (cResult &&
        cResult.INIT + cResult.FINL + (isToned ? cResult.TONE : "")) ||
      el;
    let newStr = (str && str + (hasJP || cResult ? ` ${char}` : char)) || char;
    hasJP = typeof cResult !== "undefined";
    return newStr;
  }, "");
}

function getTones(s: string) {
  console.log("string", s);
  const output = s
    .split("")
    .map((char) => jyutping[char]?.TONE ?? char)
    .join("");
  console.log("output", output);
  return output;
}

function getTonesFromOtherDictionary(s: string) {
  console.log("string", s);
  const output = s
    .split("")
    .map((char) => pyJyut[char.charCodeAt(0).toString(16)] ?? char)
    .join("");
  console.log("output", output);
  return output;
}

function getJyutping(s: string) {
  const output = s
    .split("")
    .map((char) => jyutping[char]?.JP ?? char)
    .join("");
  return output;
}

export { getTones, getJyutping, getTonesFromOtherDictionary };
