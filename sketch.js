//Create variables here
var dog;
var dogimg,doghappy;
var database;
var foods,foodstock;
function preload()
{
  //load images here
  dogimg = loadImage("dogimg.png")
  doghappy = loadImage("dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(400,400,20,20);

 var foodstock = database.ref("food");
 foodstock.on("value",readstock)

  
  
}


function draw() {  

  drawSprites();
  //add styles here



 dog.addImage(dogimg)

 dog.scale = 0.2;

 
  if(keyWentDown(UP_ARROW)){

    writeStock(foods);
    dog.addImage(doghappy);
  
  
  
  
  }



}

function readstock(data){

  foods = data.val();
}

function writeStock(x){

 database.ref('/').update({
   
 }

 )



}