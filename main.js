noseX=0;
noseY=0;
function preload(){
pose_nose=loadImage("https://i.postimg.cc/YCrxyc7r/download-2.jpg");
}
function draw(){
    image(video,0,0,300,300);
    image(pose_nose,noseX,noseY,30,20);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet model is initialized!");
}
function take_snapshot(){
    save('Photo.png');
}
function gotPoses(results){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+results[0].pose.nose.x);
    console.log("noseY="+results[0].pose.nose.y);
}