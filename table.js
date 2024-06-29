tableStatus="";
function preload(){
    tableimg=loadImage('bathroom.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(tableimg,0,0,640,420);
    objectDetectorTable=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    tableStatus=true;
    objectDetectorTable.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}