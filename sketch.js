var canvas, backgroundImage;
var score=0,system,security,pointsCollected=0;
var gameState = 0;
var game;
var story;
var collectable = []
var song;
var points = [
    
  {x:300,y:380 ,isCollected:false},
  {x:800,y:90, isCollected:false},
  {x:700,y:380,isCollected:false},
  {x:1380,y:130,isCollected:false},
  {x:1430,y:400,isCollected:false},
  {x:1800,y:80,isCollected:false},

  {x:1800,y:380 ,isCollected:false},
  {x:2300,y:90, isCollected:false},
  {x:2500,y:380,isCollected:false},
  {x:2880,y:130,isCollected:false},
  {x:3130,y:400,isCollected:false},
  {x:3450,y:380,isCollected:false},
]


var walls = [
  {x:10, y:20, w:1700, h:40},//topbrick
  {x:10, y:450, w:1700, h:40},
  {x:10, y:450,w: 40, h: 900 },//left brick
  {x:600,y:50 , w: 250, h: 40},//reverse stair
  {x:600,y:90 , w: 150, h: 40},//reverse stair
  {x:600,y:130 , w: 80, h: 40}, //reverse stair
  {x:700, y:300, w:250, h:40},//reverse L
  {x:800,y:370, w:50, h:120},//reverse L
  {x:300, y:300, w:250, h:40}, //Reverse L
  {x:200,y:370, w:50, h:120},//RerverseL
  
{ x: 1000, y: 20, w: 2000, h:40 }, //upperbrick
{ x: 1000, y: 450, w: 2000, h: 40 }, // lowerbrick 1
{ x: 900, y: 550, w: 40, h: 500 }, // left brick
{ x: 1100, y: 165, w: 200, h: 250 },//big block
{ x: 1250, y: 420, w: 50, h: 25 },//stairs
{ x: 1300, y: 395, w: 50, h: 25 },//stairs
{ x: 1350, y: 370, w: 50, h: 25 },//stairs
{ x: 1500, y: 370, w: 50, h: 25 },//reverse stairs
{ x: 1550, y: 395, w: 50, h: 25 },//reverse stairs
{ x: 1600, y: 420, w: 50, h: 25 },//reverse stairs
{ x: 1760, y: 150, w: 250, h: 40 },
{ x: 1900, y: 105, w: 40, h: 130 },
{ x: 1950, y: 400, w: 100, h: 150 },

{x:2010, y:20, w:1700, h:40},//topbrick
{x:2010, y:450, w:1700, h:40},
{x:2010, y:100,w: 40, h: 200 },//left brick
{x:2610,y:50 , w: 250, h: 40},//reverse stair
{x:2610,y:90 , w: 150, h: 40},//reverse stair
{x:2610,y:130 , w: 80, h: 40}, //reverse stair
{x:2710, y:300, w:250, h:40},//reverse L
{x:2810,y:370, w:50, h:120},//reverse L
{x:2310, y:300, w:250, h:40}, //Reverse L
{x:2210,y:370, w:50, h:120},//RerverseL

{x:2810, y:20, w:1700, h:40},//topbrick
{x:2810, y:450, w:1700, h:40},
{x:2810, y:100,w: 40, h: 200 },//left brick
{x:3410,y:50 , w: 250, h: 40},//reverse stair
{x:3410,y:90 , w: 150, h: 40},//reverse stair
{x:3410,y:130 , w: 80, h: 40}, //reverse stair
//{x:3510, y:300, w:250, h:40},//reverse L
//{x:3610,y:370, w:50, h:120},//reverse L
{x:3110, y:300, w:250, h:40}, //Reverse L
{x:3010,y:370, w:50, h:120},//RerverseL
];

var allWalls=[]
function preload(){
 player1= loadAnimation ("images/1.png","images/2.png","images/3.png");
 
 bg=loadImage ("images/storyPic.jpg");
 bg2=loadImage("images/bggg.jpg")
bg3=loadImage("images/HBD.jpg")

collectable1=loadAnimation("images/cup1.png");
collectable2=loadAnimation("images/cup5.png");
collectable3=loadAnimation("images/rh1.png","images/rh2.png","images/rh3.png","images/rh4.png","images/rh5.png","images/rh6.png")
song = loadSound("happy-birthday-to-you-traditional-song.mp3")
}


function setup(){
  canvas = createCanvas(1200,470);
 
  player= createSprite(120,380)
  player.addAnimation("Reem",player1)
  player.scale=0.3
 song.loop()
  for (var i in walls) {
    var brick = createSprite( walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    brick.shapeColor = "#368BC1";
     allWalls.push(brick); 
  }
  collectableGroup=new Group()
// added a block
for (var i in points){
  var c = createSprite( points[i].x, points[i].y)
  var r = Math.round(random(1,3));
      
      switch(r)
      {
        case 1: c.addAnimation("cup1",collectable1);break;
        case 2: c.addAnimation("cup6",collectable2);break;
        case 3: c.addAnimation("cup4",collectable3);break;
      }
  
  collectable.push(c)
}
}


function draw(){
  if(gameState === 0)
  {
    background(bg)
    textSize(25)
    text("Hurrayyy... Four more weeks for your birthday.. ",300,200)
    text("Let's first eat as many cup cakes as possible so that you will reach your task..",250,225)
    text("PRESS SPACE BAR TO CONTINUE! ",350, 270);
     if(keyIsDown(32))
    {
      gameState=1;
    }
  }
if(gameState==1)
{
  clear()
background(bg2)

drawSprites();
  camera.position.x=player.x
  //camera.position.y=displayHeight/2;
  for(var j in allWalls)
  {
player.collide(allWalls[j])
  }
  if(keyDown("up")){
    player.velocityY = -12;
  }
  player.velocityY+=0.8;
  if(keyIsDown(RIGHT_ARROW)){
    player.x+=25;
    }
    if(keyIsDown(LEFT_ARROW)){
      player.x-=25;
      }

      for (var i in collectable){
        if(player.collide(collectable[i])){
            collectable[i].destroy()
            pointsCollected++
        }
    }
    if(player.x>3500&& gameState!==2){
      gameState=2 
      background(bg)
      security = new Security();
      system = new System();
      clues();
    }
}
if(gameState===2){
  security.display();
  if(score === 1) {
    clear()
    background(bg3)
  }
}

}
