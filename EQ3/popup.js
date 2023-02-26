var sliders = document.querySelectorAll(".slider");

for (var i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("input", function(event) {
    var slider = event.target;
    var band = parseInt(slider.id.replace("slider", ""));
    var gain = parseInt(slider.value);
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function(band, gain) {
          var context = new AudioContext();
          var filters = [
            context.createBiquadFilter(),
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
          gains[band] = gain;
          for (var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            filter.gain.value = gains[i];
          }
        },
        args: [band, gain]
      });
    });
  });
}
