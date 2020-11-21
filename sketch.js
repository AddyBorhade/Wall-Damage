var bullet;
var wall;
var speed;
var weight;
var deformation
var thickness
var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500, 200, 50, 10);
  thickness = random(22, 83)
  wall = createSprite(1200,200,thickness, height/2)
  speed = random(223,321)
  weight = random(30,52)
  bullet.debug = false
}

function draw() {
  background("black");  
  drawSprites();
  bullet.velocityX = speed;
  console.log(damage)

  if(wall.x - bullet.x <= bullet.width/2 + bullet.width/2){
    
    
      bullet.velocityX = 0

      var damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness )

      if(damage > 10){
        wall.shapeColor = color("Red");
      }
      
      if(damage<10){
        wall.shapeColor = color("Green");


      }

    

        
  }
  
  

  
}