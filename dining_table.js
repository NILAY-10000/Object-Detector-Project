diningStatus="";
function preload(){
    diningimg=loadImage('dining_table.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(diningimg,0,0,640,420);
    objectDetectorDining=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    diningStatus=true;
    objectDetectorDining.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}