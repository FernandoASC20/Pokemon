let CharmanderImage;
let BulbasaurImage;
let SquirtleImage;

let CharmanderSound;
let BulbasaurSound;
let SquirtleSound;

function preload(){
    CharmanderImage = loadImage('images/Charmander.png');
    BulbasaurImage = loadImage('images/Bulbasaur.png');
    SquirtleImage = loadImage('images/Squirtle.png');

     CharmanderSound = loadSound('sounds/Charmander.mp3');
     BulbasaurSound = loadSound('sounds/Bulbasaur.mp3');
     SquirtleSound = loadSound('sounds/Squirtle.mp3');
}


function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();
 }
  
 function draw() {
    
    fill(255,0,0);
    rect(100,200,100,100);

    fill(0,255,0);
    rect(200,200,100,100);

    fill(0,0,255);
    rect(300,200,100,100);

    image(CharmanderImage,100,200,100,100);
    image(BulbasaurImage,200,200,100,100);
    image(SquirtleImage,300,200,100,100);
 }

    function mouseClicked(){

     if (mouseX >100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
        CharmanderSound.play();
     }
     if (mouseX > 200 &&  mouseX < 300 && mouseY > 200 && mouseY < 300){
         BulbasaurSound.play();
     }
     if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
         SquirtleSound.play();
     }
 }
 