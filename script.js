const video = document.querySelector('#video');
const result = document.querySelector('#result');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
  const constraints = {
      video: true,
      audio: false
  }
  navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
}

if (!("BarcodeDetector" in globalThis)) {
  result.textContent = "Barcode Detector is not supported by this browser.";
} else {
  const barcodeDetector = new BarcodeDetector({
      formats: ["code_39", "codabar", "ean_13"],
  });

  const detectCode = () => {
      barcodeDetector.detect(video).then(codes => {
          if(codes.length === 0) {
              result.textContent = "No barcode detected";
              return;
          }
            
          codes.forEach(code => {
              result.textContent = `Barcode: ${code.rawValue}`;
          });
      }).catch(err => {
          result.textContent = `Error: ${err}`;
      });
  }

  // Scan every 100ms
  setInterval(detectCode, 100);
}
