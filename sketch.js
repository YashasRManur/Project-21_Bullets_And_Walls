var Bullet, Wall;
var Speed, Weight, Thickness;
var Damage;
function setup() {
createCanvas(1600,400);
Thickness  = random(22, 83);    
Speed = random(223, 321);
Weight = random(30, 52);
Bullet = createSprite(100, 200, 100, 35);
Bullet.shapeColour = "white";
Wall = createSprite(1500, 200, Thickness, (windowHeight/2));
Bullet.velocityX = Speed;
/*Damage = 0.5 * Weight * Speed * Speed/(Thickness * Thickness * Thickness);
console.log(Damage);*/
}

function draw() {
background("black");  
//Bullet.collide(Wall);
if(Collider(Bullet, Wall)) {
    Bullet.velocityX = 0;
    Damage = 0.5 * Weight * Speed * Speed/(Thickness * Thickness * Thickness);
    if (Damage > 10){
        Bullet.shapeColour = "red";
    }
    if (Damage < 10){
        Bullet.shapeColour = "green";
    }
 
}   
drawSprites();
}
function Collider(lbullet, lwall) {
    BulletRightEgde = lbullet.x + lbullet.width;
    WallLeftEdge = lwall.x - lwall.widthl;
    if(BulletRightEgde >= WallLeftEdge) {
        return true
    }
    return false;
}