let scale = 2;

//canvas created in js
let onScreenCVS = document.createElement("canvas");
onScreenCVS.width = 360;
onScreenCVS.height = 360;
document.body.prepend(onScreenCVS);
//canvas created in html
// let onScreenCVS = document.querySelector(".canvas");
let onScreenCTX = onScreenCVS.getContext("2d");
let ocWidth = onScreenCVS.width;
let ocHeight = onScreenCVS.height;
onScreenCVS.style.width = `${ocWidth}px`;
onScreenCVS.style.height = `${ocHeight}px`;

let sharpnessDisplay = document.querySelector(".sharpness");
let sharpSlider = document.querySelector("#sharpSlider");

sharpSlider.addEventListener('input', updateSharpness);

function updateSharpness() {
  scale = sharpSlider.value/4;
  sharpnessDisplay.textContent = scale;
  window.setTimeout(draw, 1);
}

function draw() {
  onScreenCVS.width = ocWidth * scale;
  onScreenCVS.height = ocHeight * scale;

  onScreenCTX.scale(scale, scale);
  
  onScreenCTX.clearRect(0,0,ocWidth,ocHeight);
  
  //coordinates remain analogous to styling, so divide it by the scale to stay within the visible canvas
  onScreenCTX.fillStyle = "red";
  onScreenCTX.fillRect(
    onScreenCVS.width/scale-40, 
    onScreenCVS.height/scale-40, 
    30, 
    30
  );
  
  onScreenCTX.fillStyle = "black";
  onScreenCTX.fillRect(50, 50, 40, 40);
  
  onScreenCTX.strokeStyle = "black";
  
  //box outlines
  onScreenCTX.beginPath();
  onScreenCTX.rect(40, 40, 60, 60);
  onScreenCTX.lineWidth = 2;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.rect(30, 30, 80, 80);
  onScreenCTX.lineWidth = 1;
  onScreenCTX.stroke();

  onScreenCTX.beginPath();
  onScreenCTX.rect(20, 20, 100, 100);
  onScreenCTX.lineWidth = 0.5;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.rect(10, 10, 120, 120);
  onScreenCTX.lineWidth = 0.25;
  onScreenCTX.stroke();
  
  //diagonals
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(140, 10);
  onScreenCTX.lineTo(260, 130);
  onScreenCTX.lineWidth = 2;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(150, 10);
  onScreenCTX.lineTo(270, 130);
  onScreenCTX.lineWidth = 1;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(160, 10);
  onScreenCTX.lineTo(280, 130);
  onScreenCTX.lineWidth = 0.5;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(170, 10);
  onScreenCTX.lineTo(290, 130);
  onScreenCTX.lineWidth = 0.25;
  onScreenCTX.stroke();
  
  //densely packed lines
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(300, 10);
  onScreenCTX.lineTo(300, 130);
  onScreenCTX.moveTo(302, 10);
  onScreenCTX.lineTo(302, 130);
  onScreenCTX.lineWidth = 1;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(304, 10);
  onScreenCTX.lineTo(304, 130);
  onScreenCTX.moveTo(305, 10);
  onScreenCTX.lineTo(305, 130);
  onScreenCTX.lineWidth = 0.5;
  onScreenCTX.stroke();
  
  onScreenCTX.beginPath();
  onScreenCTX.moveTo(306, 10);
  onScreenCTX.lineTo(306, 130);
  onScreenCTX.moveTo(306.5, 10);
  onScreenCTX.lineTo(306.5, 130);
  onScreenCTX.lineWidth = 0.25;
  onScreenCTX.stroke();
  
  let hummer = new Image();
  hummer.src = "https://i.imgur.com/QxEUIOI.jpg";
  hummer.onload = () => {
    onScreenCTX.drawImage(hummer,10,150,302,200);
  }
}

draw();