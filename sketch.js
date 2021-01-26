var drops;

function preload(){
    image1 = loadImage("sprites/1.png");
    image2 = loadImage("sprites/2.png");
    image3 = loadImage("sprites/3.png");
   // image4 = loadImage("sprites/walking_1.png");
    image5 = loadImage("sprites/walking_2.png");
    image6 = loadImage("sprites/walking_3.png");
    image7 = loadImage("sprites/walking_4.png");
    image8 = loadImage("sprites/walking_5.png");
    image9 = loadImage("sprites/walking_6.png");
    image10 = loadImage("sprites/walking_7.png");
    image11 = loadImage("sprites/walking_8.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    image1 = createSprite(200,200);
    image1.addImage(image1);
}

function draw(){
    image1.display();
}   

