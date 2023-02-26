var sliders = document.querySelectorAll(".slider");
for (var i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("input", function(event) {
    var slider = event.target;
    var band = parseInt(slider.id.replace("slider", ""));
    var gain = parseInt(slider.value);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      chrome.tabs.executeScript(tab.id, { code: "chrome.runtime.sendMessage({ type: 'setGain', band: " + band + ", gain: " + gain + " });" });
    });
  });
}

