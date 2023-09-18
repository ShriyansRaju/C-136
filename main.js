//video=""
statuss=""

function preload(){
    video=createVideo("video.mp4")
}

function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video.hide()
}

function draw(){
    image(video,0,0,480,380)
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("accuracy").innerHTML="Detecting Objects..."
}

function modelLoaded(){
    console.log("Model is Loaded")
    statuss=true
    video.loop()
    video.speed(1)
    video.volume(0)
}