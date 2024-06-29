hallStatus="";
function preload(){
    hallimg=loadImage('bathroom.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(hallimg,0,0,640,420);
    objectDetectorHall=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    hallStatus=true;
    objectDetectorHall.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}