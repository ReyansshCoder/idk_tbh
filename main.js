msi="";

function preload(){
msi=loadImage ("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
XD=createCanvas(499,498)
XD.center()
lol=createCapture(VIDEO)
lol.hide()
mvp=ml5.poseNet(lol,modelLoaded)
mvp.on('pose',gotPoses)
}

function modelLoaded(){
console.log("model loaded")
}

nx=0;
ny=0;

function gotPoses(results){
if(results.length>0){
console.log(results)
nx=results[0].pose.nose.x-125 
console.log("x of ur nose is ",nx)
ny=results[0].pose.nose.y+10
console.log("y of ur nose is ",ny)
}}

function draw(){
image (lol, 0, 0, 499, 498)
image(msi, nx, ny, 100, 35)
} 
