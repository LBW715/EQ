var context = new AudioContext();
var filters = [
  context.createBiquadFilter(),
  context.createBiquadFilter(),
  context.createBiquadFilter(),
  context.createBiquadFilter()
  ];
var gains = [0, 0, 0, 0, 0];
var frequencies = [60, 170, 350, 1000, 3500];
var Q = 1;

for (var i = 0; i < filters.length; i++) {
var filter = filters[i];
filter.type = "peaking";
filter.frequency.value = frequencies[i];
filter.Q.value = Q;
filter.gain.value = gains[i];
}

var input = context.createGain();
var output = context.createGain();
input.connect(filters[0]);
for (var i = 0; i < filters.length - 1; i++) {
filters[i].connect(filters[i + 1]);
}
filters[filters.length - 1].connect(output);

function setGain(band, gain) {
gains[band] = gain;
for (var i = 0; i < filters.length; i++) {
var filter = filters[i];
filter.gain.value = gains[i];
}
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
if (message.type === "setGain") {
setGain(message.band, message.gain);
}
});
