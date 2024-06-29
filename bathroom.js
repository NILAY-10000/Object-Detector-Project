bathStatus="";
function preload(){
    bathimg=loadImage('bathroom.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(bathimg,0,0,640,420);
    objectDetectorBath=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    bathStatus=true;
    objectDetectorBath.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}