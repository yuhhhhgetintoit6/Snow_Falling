const Engine = Matter.Engine;
const World = Matter.World;
Bodies = Matter.Bodies;
const Contraint = Matter.Contraint;

var engine, world;
var backgroundImg;

var snow1, snow2, snow3, snow4, snow5;
var bg = "snow1.jpg";

function preload(){
snow1 = loadImage("snow1.jpg");
snow2 = loadImage("snow2.jpg");
snow3 = loadImage("snow3.jpg");
snow4 = loadImage("snow4.webp");
snow5 = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);  
  }  
  Engine.update(engine);
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJson = await response.json();
  console.log("Time, responseJson");

  var dayTime = responseJson.datetime;
  var hour = dayTime.slice(11, 13);

  console.log(hour);

  if(hour >= 4 && hour <= 6){
    bg = "snow1.jpg"
}else if (hour >= 6 && hour <= 8){
    bg = "snow2.jpg"
}else if(hour >= 8 && hour <= 10){
    bg = "snow3.jpg"
}else if(hour >= 10 && hour <= 12){
    bg = "snow4.webp"
}else if(hour >= 12 && hour <= 14){
    bg = "snow5.webp"
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);

}