function setup() {
  createCanvas(800,400);
 movingrect =  createSprite(200, 400, 50, 50);  
 movingrect.debug = true; 
stillrect = createSprite(200,100,40,40) 
stillrect.debug = true;
movingrect.velocityY = -5; 
stillrect.velocityY = 5; 
}

function draw() {
  background("black");   
 // movingrect.x = mouseX 
  //movingrect.y = mouseY 

if (movingrect.x - stillrect.x < movingrect.width/2 + stillrect.width/2
  && stillrect.x-movingrect.x< movingrect.width/2 + stillrect.width/2){
  movingrect.velocityX = -movingrect.velocityX 
  stillrect.velocityX = -stillrect.velocityX 
  

  

}  
 if(movingrect.y - stillrect.y < movingrect.height/2 + stillrect.height/2 
  &&stillrect.y - movingrect.y < stillrect.height/2 + movingrect.height/2){ 
 movingrect.velocityY = -movingrect.velocityY 
 stillrect.velocityY = -movingrect.velocityY
 }


 
  drawSprites();
}