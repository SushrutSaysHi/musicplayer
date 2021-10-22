var song1 = " ";
var song2 = " ";
var canvas = " ";
var video = " " ;
var rightWristX = 0;
var rightWristY = 0;
var leftWristX = 0;
var leftWristY = 0;
var scoreLeftWrist = 0;
var scoreRightWrist = 0;

function preload() {
     song1 = loadSound("music.mp3");
     song2 = loadSound("song2.mp3");
}

function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();

     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     var poseNet = ml5.poseNet(video, modelLoaded);
     poseNet = poseNet.on('pose', gotPoses);
}

function draw() {
     image(video, 0, 0, 300, 300);
     fill("#000");
     stroke("#000");

     if(rightWristY > 100){
          song2.stop();
          song1.play();
          song1.rate(1);
     }
     if(leftWristY >100){
          song1.stop();
          song2.play();
          song2.rate(1);
     }
}

function modelLoaded() {
     console.log("Model loaded");
}

function gotPoses(results){
     if(results.length > 0){
          

          rightWristX =results[0].pose.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;

          leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;

          

     }
}
