var Box1, Box2, Box3, Box4;
var PlayerBox ;


function preload() {
    
}

function setup() {

    createCanvas(800, 600);



    PlayerBox = createSprite(random(10, 750), 300, 20, 20);
    PlayerBox.shapeColor = "white";
    PlayerBox.velocityX = 3;
    PlayerBox.velocityY = 3;


    Box1 = createSprite(100, 580, 180, 30);
    Box1.shapeColor = "red";

    Box2 = createSprite(300, 580, 180, 30);
    Box2.shapeColor = "green";

    Box3 = createSprite(500, 580, 180, 30);
    Box3.shapeColor = "blue";

    Box4 = createSprite(700, 580, 180, 30);
    Box4.shapeColor = "yellow";



}

function draw() {
    
    background(rgb(10, 10, 10))

    if (PlayerBox.x < 0) {
        PlayerBox.velocityX = 3
    } 
    else if (PlayerBox.x > 800) {
        PlayerBox.velocityX = -3
    }

    
    if (PlayerBox.isTouching(Box4)) {
        PlayerBox.shapeColor = "yellow";
        PlayerBox.bounceOff(Box4);

    }

    else if (PlayerBox.isTouching(Box3)) {
        PlayerBox.shapeColor = "blue";
        PlayerBox.bounceOff(Box3)

    }

    else if (PlayerBox.isTouching(Box2)) {
        PlayerBox.shapeColor = "green";
        PlayerBox.bounceOff(Box2)
    }

    else if (PlayerBox.isTouching(Box1)) {
        PlayerBox.shapeColor = "red";
        PlayerBox.bounceOff(Box1)
    }

    if (PlayerBox.y < 0) {
        PlayerBox.velocityY = 3
    }



    drawSprites()
}