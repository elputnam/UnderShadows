// Under the Feet of Shadows: sitatuing map

let base;
let beach1;
let beach2; 
let cables1;
let cables2;
let cables3;
let oldMap;
let cableMap;
let wireBody1;
let wireBody2;
let wireBody3;
let wireBody4;
let terra1;
let terra2;
let terra3;
let terra4;
let terraSil1;
let terraSil2;
let baldMap;
let tileCount;
let alp = 0;
let alp2 = 100
let sils = [];
let terras = [];
let num = 0;

// shapes
let glitches = [];

//CCapture
//var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  workersPath: 'js/',
  framerate: 5
});

function preload(){
  base = loadImage('images/base_UFS.jpg');
  beach1 = loadImage('images/beach1_UFS.png');
  beach2 = loadImage('images/beach2_UFS.png'); 
  cables1 = loadImage('images/cables1_UFS.png');
  cables2 = loadImage('images/cables2_UFS.png');
  cables3 = loadImage('images/cables3_UFS.png');
  oldMap = loadImage('images/oldMap_UFS.png');
  cableMap = loadImage('images/cableMap_UFS.png');
  wireBody1 = loadImage('images/wireBody1_UFS.png');
  wireBody2 = loadImage('images/wireBody2_UFS.png');
  wireBody3 = loadImage('images/wireBody3_UFS.png');
  wireBody4 = loadImage('images/wireBody4_UFS.png');
  terra1 = loadImage('images/Terra1_UFS.png');
  terra2 = loadImage('images/Terra2_UFS.png');
  // terra3 = loadImage('images/Terra3_UFS.png');
  // terra4 = loadImage('images/Terra4_UFS.png');
  baldMap = loadImage('images/baldMap_UFS.png');
  for (let i = 0; i < 2; i++){
    sils[i] = loadImage('images/TerraSil_'+i+'.png')
    terras[i] = loadImage('images/Terra'+i+'.png')
  }

} 

function setup(){
  createCanvas(base.width, base.height); 
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  frameRate(5); 
  for (let i = 0; i < 50; i++){
    glitches[i] = new Glitch(random(width), random(height), random(width), random(10, 100));
  }
}

function draw() {
  // if (frameCount==1){
  //   capturer.start();
  //   };
  background(0);
  tileCount = random(30);

  //base
  push();
  tint(255, random(70, 90));
  image(base, 0, 0);  
  pop();   

  blend(baldMap, 0, 0, width, height, 0, 0, width, height, BURN)

  //beach

  push();
  // tint(random(150,200), random(100), 100, random(50, 70));
  tint(255, random(50, 60));
  image(beach1, 0, 0);
  pop(); 
  // blend(beach1, 0, 0, width, height, 0, 0, width, height, DARKEST);
  //blend(beach2, 0, 0, width, height, 0, 0, width, height, DARKEST);


 

  //Cables
  blend(cables1, 0, 0, width, height,random(-5,5), random(-5,5), width, height, MULTIPLY);
  blend(cables2, 0, 0, width, height, random(-5,5), random(-5,5), width, height, BURN);
  blend(cables3, 0, 0, width, height, 0, 0, random(-5,5), random(-5,5), BURN);

  //maps
  blend(oldMap, 0, 0, width, height, 0, 0, width, height, BURN);
  blend(cableMap, 0, 0, width, height, random(-5,5), random(-5,5), width, height, MULTIPLY);

  //More Terras

  push();
  num = floor(random(2));
  terras[num].filter(GRAY);
  //terras[num].filter(INVERT);
  tint(random(200,255), 100);
  fill(random(50, 100), 60)
  ellipse(random(width*.3, width*.33), height*.6, random(600,700));

  
 
  image(terras[num], random(width*.15, width*.16), random(-5, 5)); 
  //blend(sils[num], 0, 0, sils[num].width, sils[num].height, random(width*.3, width*.31), random(-5, 5), sils[num].width, sils[num].height, EXCLUSION)
  for (let i = 0; i < 30; i++){
    fill(50, 100, 100);
    ellipse(width*.32+random(-200,200), height*.6+random(-200, 200), random(20)); 
  }
  pop();

// blend(terra1, 0, 0, width, height, random(-20, 20), 0, width, height, LIGHTEST)
// blend(terra2, 0, 0, width, height, random(-30, 30), random(-30, 30), width, height, EXCLUSION)

//first wire body
blend(wireBody1, 0, 0, width, height, random(-10,10), random(-5,5), width, height, LIGHTEST);  
blend(wireBody1, 0, 0, width, height, 0, 0, width, height, LIGHTEST);  

  //grid
  grid();
  
  //glitches
  fill(255, alp);
  // rect(0, 0, width, height);
  for(let i = 0; i < glitches.length; i++){
    glitches[i].show();
    if (frameCount%8==0){
      glitches[i].change();
    }
  }

  //wire bodies
  blend(wireBody2, 0, 0, width, height, random(-50,50), random(-50,50), width, height, LIGHTEST)
  blend(wireBody3, 0, 0, width, height, random(-5,5), random(-5,5), width, height, LIGHTEST)
  blend(wireBody4, 0, 0, width, height, random(-5,5), random(-5,5), width, height, LIGHTEST)


  // push()
  // // terra1.filter(INVERT);
  // tint(0, random(100), random(100), random(alp-10, alp));
  // image(terra1, random(-30, 30), 0);
  // pop();



   
  
//Terra
push()
tint(0, random(100), 100, alp);
image(terra1, random(-30, 30), 0);
//blend(terra1, 0, 0, width, height, random(-20, 20), 0, width, height, LIGHTEST)
//blend(terra2, 0, 0, width, height, random(-30, 30), random(-30, 30), width, height, EXCLUSION)
  pop();

  push();
  tint(180, random(100), 100, alp);
  scale(-1, 1);
  image(terra1, (-width-500)+random(-30, 30), 0);
  pop();

  //bubbles
  noStroke();
  fill(random(50,100), alp-20)
  ellipse(width*.6+random(-10,10), height*.4+random(-10,10), random(200, 210));
  for (let i = 0; i < 30; i++){
    fill(250, 100, 100, alp);
    ellipse(width*.6+random(-200,200), height*.4+random(-200, 200), random(20)); 
  }

//TRiangle
    push();
    translate(width*.6, height*.4);
    noFill();
    strokeWeight(random(10,20));
    stroke(50, 100, 100, alp);
    triangle(random(-200, 200), -300, 300, random(100, 400), -300, random(100, 400));
    pop();
  
      //alter
  if (frameCount%20==0){
    if (alp == 0 ){
       alp = 100;
       alp2= 0;
     } else {
       alp = 0;
       alp2 = 100
     }    
   }

  // capturer.capture(document.getElementById('defaultCanvas0'));  
  // if (frameCount==3000){
  //   save_record();
  // }
  print(frameCount);
 
}

function save_record() {
  capturer.save();
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      //  noStroke();
      stroke(0, alp);
      strokeWeight(random(10));
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
        var toggle = floor(random(2));
      if (toggle == 1){
         fill(255, alp);
          rect(posX, posY, width/tileCount, height/tileCount);
    } else {
      fill(0, alp);
      rect(posX, posY, width/tileCount, height/tileCount);
      }
      }
    }
}

class Glitch{
  constructor(x, y, wid, high){
    this.x = x;
    this.y = y;
    this.wid = wid;
    this.high = high;
  }
  change(){
    this.x = random(width);
    this.y = random(height);
    this.wid = random(width);
    this.high = random(10, 50);
  }
  show(){
    //noStroke();
    //noFill();
    stroke(0, alp);
    fill(0, alp);
    rect(this.x, this.y, this.wid, this.high);
  }
}
