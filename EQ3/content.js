let audioElement = null;
let audioContext = null;
let filters = null;
let gains = [0, 0, 0, 0, 0];
let frequencies = [60, 170, 350, 1000, 3500];
let Q = 1;

function createAudioElement() {
  audioElement = document.createElement('audio');
  audioElement.controls = true;
  audioElement.style.display = 'none';
  document.body.appendChild(audioElement);
}

function createAudioGraph() {
  audioContext = new AudioContext();
  filters = [
    audioContext.createBiquadFilter(),
    audioContext.createBiquadFilter(),
    audioContext.createBiquadFilter(),
    audioContext.createBiquadFilter(),
    audioContext.createBiquadFilter()
  ];

  for (let i = 0; i < filters.length; i++) {
    let filter = filters[i];
    filter.type = "peaking";
    filter.frequency.value = frequencies[i];
    filter.Q.value = Q;
    filter.gain.value = gains[i];
  }

  let input = audioContext.createGain();
  let output = audioContext.createGain();
  input.connect(filters[0]);
  for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }
  filters[filters.length - 1].connect(output);

  let source = audioContext.createMediaElementSource(audioElement);
  source.connect(input);
  output.connect(audioContext.destination);
}

function setGain(band, gain) {
  gains[band] = gain;
  for (let i = 0; i < filters.length; i++) {
    let filter = filters[i];
    filter.gain.value = gains[i];
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === "setGain") {
    setGain(message.band, message.gain);
  }
});

createAudioElement();
createAudioGraph();
