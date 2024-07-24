img = "";
detections = [];

function preload(){
  img = loadImage('dog_cat.jpg');
  myModel = ml5.objectDetector("cocossd")
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  myModel.detect(img, gotDetections)
}

function gotDetections(error, results){
  if(error){
    console.log(error)
  }
  else{
   detections = results
   myModel.detect(img, gotDetections)
  }
}

function draw() {
  image(img, 0, 0, 640, 420);
  for(var i = 0; i < detections.length; i++){
     document.getElementById("status").innerHTML = "detection started"
    stroke ("green")
    strokeWeight (2)
    noFill()
    stroke ("red")
    rect(detections[i].x, detections[i].y, detections[i].width, detections[i].height)
    textSize(24)
    text(detections[i].label, detections[i].x, detections[i].y)
  }







}

