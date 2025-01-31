const video = document.querySelector('#video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){

    const constraints = {
        video: true,
        audio: false
    }

    navigator.mediaDevices.getUserMedia(constraints).then (stream => video.srcObject = stream);
}

// check compatibility
if (!("BarcodeDetector" in globalThis)) {
    console.log("Barcode Detector is not supported by this browser.");
  } else {
    console.log("Barcode Detector supported!");
  
    // create new detector
    const barcodeDetector = new BarcodeDetector({
      formats: ["code_39", "codabar", "ean_13"],
    });
  }
  

// const qrDetector = new BarcodeDetector({formats: ['qr_code']});

// const detectCode = () =>{
//     qrDetector.detect(video).then(codes => {

//         if(codes.length ==0) return;

//         for(const qrcode of codes){
//             console.log(qrcode)
//         }
//     }).catch(err=>{
//         console.log(err);
//     })
// }

// setInterval(detectCode, 100);