
function preload() {
    bg= loadImage("images/garden.png")
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cat3.png")
    tom3=loadAnimation("images/cat4.png")
    jerry1=loadAnimation("images/mouse1.png")
   jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
   jerry3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
tom.addAnimation("sleeping",tom1)
tom.scale=0.2
jerry=createSprite(200,600)
jerry.addAnimation("sleeping",jerry1)
jerry.scale=0.2

tom.setCollider("rectangle",0,0,500,500)
jerry.setCollider("rectangle",0,0,500,500)
}

function draw() {

    background(bg);
    if(tom.isTouching(jerry)){
        tom.velocityX=0
        tom.addAnimation("stop",tom3)
        tom.changeAnimation("stop",tom3)
        jerry.addAnimation("stop",jerry3)
        jerry.changeAnimation("stop",jerry3)   
    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-3
    tom.addAnimation("running",tom2)
    tom.changeAnimation("running",tom2)
    jerry.addAnimation("running",jerry2)
    jerry.changeAnimation("running",jerry2)
}


}
