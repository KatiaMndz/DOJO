var gamemode;
var Botonplay1;

var TEXTO1;
var Boton1;
var TEXTO2;
var Boton2;
  
var Botonplay2;

  
var Botonplay3;


var atacar;

var k=0;

var rodillo1;
var rodillo2;
var rodillo3;
var rodillo4;
var rodillo5;
var rodillo6;
var rodillo7;
var rodillo8;

var rodillo9;
var rodillo10;
var rodillo11;
var rodillo12;

var pez1;
var pez2;
var pez3;
var pez4;
var pez5;
var pez6;
var pez7;
var pez8;

var pez9;
var pez10;
var pez11;
var pez12;


  var escama1;
var escama2;
var escama3;
var escama4;
var escama5;
var escama6;
var escama7;
var escama8;


var playerlife2 = 0;
var BOSSlife2 = 0;

var playerlife3 = 0;
var BOSSlife3 = 0;

  
var playerlife = 0;
var BOSSlife = 0;


  atacar.visible=false;
  
var BOSScat;
var BOSSsnake;
var BOSStiger;
var BOSSfox;

var flick;

var cinta;

var guard;

var pared1;
var pared2;
var pared3;

var pared4;
var pared5;

var slide1;
var slide2;
var slide3;


function preload(){

}

function SNAKEBOSS(){
   
  if(gamemode === "BOSSsnakePELEA") {
    BOSSsnake.visible=true;
    flick.visible=true;
    atacar.visible=true;

    BOSSsnake.x=200;
    BOSSsnake.y=32;
    

    flick.velocityX=0;
    flick.velocityY=0;
    
  escama1.velocityX=0;
  escama1.velocityY=6.5;
  escama2.velocityX=0;
  escama2.velocityY=6.5;
  escama3.velocityX=0;
  escama3.velocityY=6.5;
  escama4.velocityX=0;
  escama4.velocityY=6.5;

  escama5.velocityX=0;
  escama5.velocityY=6.5;
  escama6.velocityX=0;
  escama6.velocityY=6.5;
  escama7.velocityX=0;
  escama7.velocityY=6.5;
  escama8.velocityX=0;
  escama8.velocityY=6.5;
    
    escama1.visible=true;
    escama2.visible=true;
    escama3.visible=true;
    escama4.visible=true;
    escama5.visible=true;
    escama6.visible=true;
    escama7.visible=true;
    escama8.visible=true;
    
    
    
   if (escama1.y > 300||escama2.y > 300||escama3.y > 300||escama4.y > 300||escama5.y > 300||escama6.y > 300||escama7.y > 300||escama8.y > 300) {
    escama1.x = randomNumber(100, 300);
    escama1.y = 0;
    
      escama2.x = randomNumber(100, 320);
    escama2.y = 0;
    
      escama3.x = randomNumber(102, 310);
    escama3.y = 0;
    
      escama4.x = randomNumber(100, 305);
    escama4.y = 0;
    
       escama5.x = randomNumber(120, 311);
    escama5.y = 0;
    
      escama6.x = randomNumber(100, 304);
    escama6.y = 0;
    
      escama7.x = randomNumber(108, 300);
    escama7.y = 0;
    
      escama8.x = randomNumber(103, 305);
    escama8.y = 0;
    
 }
 
  if(BOSSlife === -200){
     gamemode="escama";
   }
   
   if(playerlife=== -50){
     gamemode="try again1";
   }
   
   if(gamemode==="try again1"){
        
  
     textFont("Courier New");
     stroke("black");
      text("¡Intentalo de nuevo!",134,200);
     
   }
   
    text(BOSSlife,36,22);
    text(playerlife,36,378);
    
    if(mousePressedOver(atacar) && flick.isTouching(BOSSsnake) ){
    BOSSlife--;
    }
    

  /*if (flick1.isTouching()){

    }*/
    
  flick.velocityY=0;
  flick.velocityX=0;
  
  

if (escama1.isTouching(flick)||escama2.isTouching(flick)||escama3.isTouching(flick)||escama4.isTouching(flick)||escama5.isTouching(flick)||escama6.isTouching(flick)||escama7.isTouching(flick)||escama8.isTouching(flick)){
  playerlife--;
  //flick1.setAnimation("ouch");
}
  }
}

function WINSNAKE(){

 
 if (gamemode === "escama"){
   text("Felicidades! has obtenido tu primera aprobación.",70,200);
   text("Dirigete hacia tu siguiente oponente... ¡El gran gato!",70,211);
   
   atacar.visible=false;
   
   
  escama1.visible=false;
  escama2.visible=false;
  escama3.visible=false;
  escama4.visible=false;
  escama5.visible=false;
  escama6.visible=false;
  escama7.visible=false;
  escama8.visible=false;
  
         pared1.visible=true;
      pared2.visible=true;
      pared3.visible=true;
      pared4.visible=true;
      pared5.visible=true;
      BOSScat.visible=true;
      BOSSsnake.visible=true;
      BOSStiger.visible=true;
      BOSSfox.visible=true;


  cinta.visible=true;
  guard.visible=true;

  flick.visible=true;
  BOSSsnake.x=48;
  BOSSsnake.y=349;
 }

}

function GRANGATO(){

   
   if (gamemode === "BOSScatPELEA"){

      BOSScat.visible=true;
     flick.visible=true;
     slide2.destroy();
     Botonplay2.destroy();
     atacar.visible=true;
      BOSScat.x=200;
      BOSScat.y=32;
      
      if (k===0){
      flick.x=194;
      flick.y=372;
      k++;
}
  
  pez1.velocityX=6.5;
  pez1.velocityY=0;
  pez2.velocityX=6.5;
  pez2.velocityY=0;
  pez3.velocityX=6.5;
  pez3.velocityY=0;
  pez4.velocityX=6.5;
  pez4.velocityY=0;
  pez5.velocityX=6.5;
  pez5.velocityY=0;
  pez6.velocityX=6.5;
  pez6.velocityY=0;
  pez7.velocityX=6.5;
  pez7.velocityY=0;
  pez8.velocityX=6.5;
  pez8.velocityY=0;
  
  pez9.velocityX=6.5;
  pez9.velocityY=0;
  pez10.velocityX=6.5;
  pez10.velocityY=0;
  pez11.velocityX=6.5;
  pez11.velocityY=0;
  pez12.velocityX=6.5;
  pez12.velocityY=0;
  
      pared1.visible=false;
      pared2.visible=false;
      pared3.visible=false;
      pared4.visible=false;
      pared5.visible=false;
      BOSSfox.visible=false;
      BOSSsnake.visible=false;
      BOSStiger.visible=false;
     
 if (pez1.x > 400||pez2.x > 400||pez3.x > 400||pez4.x > 400||pez5.x > 400||pez6.x > 400||pez7.x > 400||pez8.x > 400) {
    pez1.x = 0;
    pez1.y = randomNumber(1, 300);
    
      pez2.x = 0;
    pez2.y = randomNumber(1, 300);
    
      pez3.x = 0;
    pez3.y =  randomNumber(1, 300);
    
      pez4.x = 0;
    pez4.y = randomNumber(1, 300);
    
       pez5.x = 0;
    pez5.y = randomNumber(1, 300);
    
      pez6.x = 0;
    pez6.y = randomNumber(1, 300);
    
      pez7.x = 0;
    pez7.y = randomNumber(1, 300);
    
      pez8.x = 0;
    pez8.y = randomNumber(1, 300);
    
 }
 
 if (pez9.x > 400||pez10.x > 400||pez11.x > 400||pez12.x > 400){
   pez9.x = 0;
    pez9.y = randomNumber(1, 300);
    
      pez10.x = 0;
    pez10.y = randomNumber(1, 300);
    
      pez11.x = 0;
    pez11.y =  randomNumber(1, 300);
    
     pez12.x = 0;
    pez12.y = randomNumber(1, 300);
    
 }
if(BOSSlife2 === -200){
   gamemode="pez";
 }
 
   if(playerlife2=== -50){
     gamemode="try again1";
   }
   
   if(gamemode==="try again1"){
     
    
  
     textFont("Courier New");
     stroke("black");
      text("¡Intentalo de nuevo!",134,200);
   }
    text(BOSSlife2,36,22);
    text(playerlife2,36,378);
    
     if(mousePressedOver(atacar) && flick.isTouching(BOSScat) ){
    BOSSlife2--;
    }
    
  if (pez1.isTouching(flick)||pez2.isTouching(flick)||pez3.isTouching(flick)||pez4.isTouching(flick)||pez5.isTouching(flick)||pez6.isTouching(flick)||pez7.isTouching(flick)||pez8.isTouching(flick)){
    playerlife2--;
    //flick.setAnimation("ouch");

  }
  } 

}

 function WINCAT (){
  if(gamemode === "pez"){
  text("los maestros estan algo impresionados",50,175);
  text(" con tus habilidades de guerrero,",50,190);
  text("pero no te emociones, que aún no has",50,205);
  text("enfrentado a la Maestra Zorro... Dirigete hacia ella!",50,222);


  
      pared1.visible=true;
      pared2.visible=true;
      pared3.visible=true;
      pared4.visible=true;
      pared5.visible=true;
      BOSSfox.visible=true;
      BOSSsnake.visible=true;
      BOSStiger.visible=true;
      cinta.visible=true;
      
      BOSScat.x=48;
      BOSScat.y=100;
      
      atacar.visible=false;
      
      pez1.destroy();
      pez2.destroy();
      pez3.destroy();
      pez4.destroy();
      pez5.destroy();
      pez6.destroy();
      pez7.destroy();
      pez8.destroy();
      pez9.destroy();
      pez10.destroy();
      pez11.destroy();
      pez12.destroy();
  }
}

//function MAESTRAZORRO(){
  
  
//}

function uno (){
  
  if(flick.isTouching(cinta) && gamemode === "lobby"){
  guard.visible=true;
  flick.y=83;
  flick.x=200;
  
  gamemode = "platicaguardia1";
 
}

  if (gamemode === "platicaguardia1"){

  TEXTO1.visible=true;
  TEXTO1.setAnimation("Guard message");

  
  Boton1.visible=true;
  Boton1.setAnimation("Oh... OK!");

    if(mousePressedOver(Boton1)){
      gamemode = "BOSSsnake1";

}
}
  
}

function setup(){
  gamemode= "lobby";
  Botonplay1 = createSprite (315,342,40,20);
  Botonplay1.visible=false;

  TEXTO1= createSprite(200,200,400,400);
  Boton1= createSprite (265,331,200,50);
  TEXTO2= createSprite(200,200,400,400);
  Boton2= createSprite (265,331,200,50);

  Botonplay2 = createSprite (315,342,40,20);
  Botonplay2.visible=false;

  Botonplay3 = createSprite (315,342,40,20);
  Botonplay3.visible=false;

  atacar = createSprite (328,372,20,40);

  rodillo1= createSprite (200,200,10,10);
rodillo2= createSprite (200,200,10,10);
rodillo3= createSprite (200,200,10,10);
rodillo4= createSprite (200,200,10,10);
rodillo5= createSprite (200,200,10,10);
rodillo6= createSprite (200,200,10,10);
rodillo7= createSprite (200,200,10,10);
rodillo8= createSprite (200,200,10,10);

rodillo9= createSprite (200,200,10,10);
rodillo10= createSprite (200,200,10,10);
rodillo11= createSprite (200,200,10,10);
rodillo12= createSprite (200,200,10,10);

pez1= createSprite (200,200,10,10);
pez2= createSprite (200,200,10,10);
pez3= createSprite (200,200,10,10);
pez4= createSprite (200,200,10,10);
pez5= createSprite (200,200,10,10);
pez6= createSprite (200,200,10,10);
pez7= createSprite (200,200,10,10);
pez8= createSprite (200,200,10,10);

pez9= createSprite (200,200,10,10);
pez10= createSprite (200,200,10,10);
pez11= createSprite (200,200,10,10);
pez12= createSprite (200,200,10,10);


escama1= createSprite (200,200,10,10);
escama2= createSprite (200,200,10,10);
escama3= createSprite (200,200,10,10);
escama4= createSprite (200,200,10,10);
escama5= createSprite (200,200,10,10);
escama6= createSprite (200,200,10,10);
escama7= createSprite (200,200,10,10);
escama8= createSprite (200,200,10,10);

BOSScat = createSprite (48,100,20,20);
BOSSsnake = createSprite (48,349,20,20);
BOSStiger= createSprite (348,98,20,20);
BOSSfox = createSprite (348,348,20,20);

flick = createSprite (200,388,10,10);

cinta = createSprite (200,30,20,20);

guard = createSprite (200,62,20,10);

pared1 = createSprite (158,29,5,70);
pared2 = createSprite (242,29,5,70);
pared3 = createSprite (198,2,85,5);

pared4 = createSprite (64,66,193,5);
pared5 = createSprite (336,66,193,5);

slide1 = createSprite (200,200,400,400);
slide2 = createSprite (200,200,400,400);
slide3 = createSprite (200,200,400,400);

escama1.visible=false;
  escama2.visible=false;
  escama3.visible=false;
  escama4.visible=false;
  escama5.visible=false;
  escama6.visible=false;
  escama7.visible=false;
  escama8.visible=false;

  pez1.visible=false;
  pez2.visible=false;
  pez3.visible=false;
  pez4.visible=false;
  pez5.visible=false;
  pez6.visible=false;
  pez7.visible=false;
  pez8.visible=false;

  pez9.visible=false;
  pez10.visible=false; 
  pez11.visible=false;
  pez12.visible=false;
  
  rodillo1.visible=false;
  rodillo2.visible=false;
  rodillo3.visible=false;
  rodillo4.visible=false;
  rodillo5.visible=false;
  rodillo6.visible=false;
  rodillo7.visible=false;
  rodillo8.visible=false;
      
  rodillo9.visible=false;
  rodillo10.visible=false;  
  rodillo11.visible=false;
  rodillo12.visible=false;
    
  
}


function draw(){
  background("white");
  drawSprites();
  
  flick.velocityY=0;
  flick.velocityX=0;
  
//ESCAMAS
  escama1.velocityX=0;
  escama1.velocityY=5;
  escama2.velocityX=0;
  escama2.velocityY=5;
  escama3.velocityX=0;
  escama3.velocityY=5;
  escama4.velocityX=0;
  escama4.velocityY=5;

//PECES
  pez1.velocityX=6.5;
  pez1.velocityY=0;
  pez2.velocityX=6.5;
  pez2.velocityY=0;
  pez3.velocityX=6.5;
  pez3.velocityY=0;
  pez4.velocityX=6.5;
  pez4.velocityY=0;
  pez5.velocityX=6.5;
  pez5.velocityY=0;
  pez6.velocityX=6.5;
  pez6.velocityY=0;
  pez7.velocityX=6.5;
  pez7.velocityY=0;
  pez8.velocityX=6.5;
  pez8.velocityY=0;
  
  pez9.velocityX=6.5;
  pez9.velocityY=0;
  pez10.velocityX=6.5;
  pez10.velocityY=0;
  pez11.velocityX=6.5;
  pez11.velocityY=0;
  pez12.velocityX=6.5;
  pez12.velocityY=0;
  
  if(gamemode === "BOSSsnake1"){
  text("Habla con la maestra",14,9);
  text("serpiente",78,28);
  Boton1.visible=false;
  TEXTO1.visible=false;
}

  if(flick.isTouching(BOSSsnake) && gamemode === "BOSSsnake1"){
  Boton2.visible=true;
  TEXTO2.visible=true;
  TEXTO2.setAnimation("BOSSsnake message");
  Boton2.setAnimation("LA VENCERE");
  Boton2.scale=1;
  
    if(mousePressedOver(Boton2)){
      gamemode = "BOSSsnakeSCENE";
      pared1.visible=false;
      pared2.visible=false;
      pared3.visible=false;
      pared4.visible=false;
      pared5.visible=false;
      BOSScat.visible=false;
      BOSSsnake.visible=false;
      BOSStiger.visible=false;
      BOSSfox.visible=false;


  cinta.visible=false;
  guard.visible=false;

  flick.visible=false;

  }
}

  if (gamemode === "BOSSsnakeSCENE"){
  Botonplay1.visible=true;
  Boton2.destroy();
  slide1.visible=true;
  
    if(mousePressedOver(Botonplay1)){
      gamemode="BOSSsnakePELEA";
    
    
    }
  
  }
}


  if(gamemode === "BOSSsnakePELEA"){
    slide1.destroy();
    Botonplay1.destroy();
    Boton1.destroy();
    TEXTO2.destroy();
    SNAKEBOSS();

}


 if (flick.isTouching(BOSScat) && gamemode === "escama"){
     gamemode="BOSScatESCENA";
   }
   
   if (gamemode === "BOSScatESCENA"){
         slide2.visible=true;
    Botonplay2.visible=true;
    
    pared1.visible=false;
      pared2.visible=false;
      pared3.visible=false;
      pared4.visible=false;
      pared5.visible=false;
      BOSScat.visible=false;
      BOSSsnake.visible=false;
      BOSStiger.visible=false;
      BOSSfox.visible=false;


  cinta.visible=false;
  guard.visible=false;

  flick.visible=false;
  
    if (mousePressedOver(Botonplay2)){
      gamemode="BOSScatPELEA";
      
      
      pez1.visible=true;
      pez2.visible=true;
      pez3.visible=true;
      pez4.visible=true;
      pez5.visible=true;
      pez6.visible=true;
      pez7.visible=true;
      pez8.visible=true;
      
      pez9.visible=true;
      pez10.visible=true;  
      pez11.visible=true;
      pez12.visible=true;
    }
   }
  
   if (gamemode === "BOSScatPELEA"){
            
        if(k === 0){
          flick.x=194;
          flick.y=372;
          k++;
        }
     
      slide2.destroy;
      Botonplay2.destroy;
      atacar.visible=true;
      BOSScat.x=200;
      BOSScat.y=32;

      pared1.visible=false;
      pared2.visible=false;
      pared3.visible=false;
      pared4.visible=false;
      pared5.visible=false;
      BOSSfox.visible=false;
      BOSSsnake.visible=false;
      BOSStiger.visible=false;
      BOSScat.visible=true;

      
      flick.visible=true;
      BOSScat.x=200;
      BOSScat.y=32;
      
      
      
      pez1.visible=true;
      pez2.visible=true;
      pez3.visible=true;
      pez4.visible=true;
      pez5.visible=true;
      pez6.visible=true;
      pez7.visible=true;
      pez8.visible=true;
      
      pez9.visible=true;
      pez10.visible=true;  
      pez11.visible=true;
      pez12.visible=true;
      
     
      GRANGATO();
   }
   
    if (flick.isTouching(BOSSfox) && gamemode === "pez"){
     gamemode="BOSSfoxESCENA";
     
     if (gamemode === "BOSSfoxESCENA"){
    slide3.visible=true;
    Botonplay3.visible=true;
    
    pared1.visible=false;
      pared2.visible=false;
      pared3.visible=false;
      pared4.visible=false;
      pared5.visible=false;
      BOSScat.visible=false;
      BOSSsnake.visible=false;
      BOSStiger.visible=false;
      BOSSfox.visible=false;


  cinta.visible=false;
  guard.visible=false;

  flick.visible=false;
  
    if (mousePressedOver(Botonplay3)){
      gamemode="BOSSfoxPELEA";
      
      
      rodillo1.visible=true;
      rodillo2.visible=true;
      rodillo3.visible=true;
      rodillo4.visible=true;
      rodillo5.visible=true;
      rodillo6.visible=true;
      rodillo7.visible=true;
      rodillo8.visible=true;
      
      rodillo9.visible=true;
      rodillo10.visible=true;  
      rodillo11.visible=true;
      rodillo12.visible=true;
    }
   }
   
   
   
 movement();
 

 
 
 
 flick.bounceOff(pared1);
 flick.bounceOff(pared2);
 flick.bounceOff(pared3);
 flick.bounceOff(pared4);
 flick.bounceOff(pared5);
 

 createEdgeSprites();
 uno();
 WINSNAKE();
GRANGATO();
WINCAT();
//MAESTRAZORRO();

function movement(){
  if (keyDown(UP_ARROW)){
   flick.velocityY=-4;
   
 }
  if (keyDown(DOWN_ARROW)){
   flick.velocityY=4;
   
 }
 
  if (keyDown(LEFT_ARROW)){
   flick.velocityX=-4;
   
 }
  if (keyDown(RIGHT_ARROW)){
   flick.velocityX=4;
   
 }
 
}
}





