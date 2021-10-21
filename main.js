var song1 = " ";
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
}

function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();

     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     var poseNet = ml5.posenet(video, modelLoaded);
     poseNet = poseNet.on('pose', gotPoses);
}

function draw() {
     image(video, 0, 0, 300, 300);
}

function gotPoses(results){
     if(results.length > 0){
          rightWristX = results[0].pose.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;

          leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;

          

     }
}