var player1;
var player1Health = 8;

var player2;
var player2Health = 8;

var computerPlayer;
var computerPlayerHealth = 8 ;
 
var ground;

//gameStates
var SETUP= 0
var PLAYERS = 1;
var COMPUTER = 2;
var PLAYEREND = 3;
var COMPUTEREND = 4;
var gameState = SETUP;

var leftWall, rightWall;

var choose, playAgain;

function preload(){

    //Ninja Images
    player1Stand = loadImage("Ninja1_standing.PNG");
    player1Punch = loadImage("Ninja1_punch.PNG");
    player1Kick = loadImage("Ninja1_Kick.PNG");

    player1StandCopy = loadImage("Ninja1_standingCopy.PNG");
    player1PunchCopy = loadImage("Ninja1_punchCopy.PNG");
    player1KickCopy = loadImage("Ninja1_KickCopy.PNG");

    player2Stand = loadImage("Ninja2_standing.PNG");
    player2Punch = loadImage("Ninja2_punch.PNG");
    player2Kick = loadImage("Ninja2_Kick.PNG");

    player2StandCopy = loadImage("Ninja2_standingCopy.PNG");
    player2PunchCopy = loadImage("Ninja2_punchCopy.PNG");
    player2KickCopy = loadImage("Ninja2_KickCopy.PNG");

    logoImage = loadImage("fight_logo.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    //sprites
    player1 = createSprite(displayWidth - 800, displayHeight - 160, 20, 200);
   // player1.addImage(player1Punch);
    //player1.addImage(player1Kick);
    player1.addImage(player1Stand);
   
    player1Health1 = createSprite(75, 30, 100, 30);
    player1Health1.shapeColor = "limegreen";
  

    player1Health2 = createSprite(125, 30, 100, 30);
    player1Health2.shapeColor = "limegreen";

    player1Health3 = createSprite(175, 30, 100, 30);
    player1Health3.shapeColor = "limegreen";

    player1Health4 = createSprite(225, 30, 100, 30);
    player1Health4.shapeColor = "limegreen";
  

    player1Health5 = createSprite(275, 30, 100, 30);
    player1Health5.shapeColor = "limegreen";

    player1Health6 = createSprite(325, 30, 100, 30);
    player1Health6.shapeColor = "limegreen";

    player1Health7 = createSprite(375, 30, 100, 30);
    player1Health7.shapeColor = "limegreen";

    player1Health8 = createSprite(425, 30, 100, 30);
    player1Health8.shapeColor = "limegreen";


    ground = createSprite(displayWidth/2, displayHeight - 30, displayWidth, 60);
    ground.shapeColor = "green";

    leftWall = createSprite(0, displayHeight/2, 10, displayHeight);
    rightWall = createSprite(displayWidth, displayHeight/2, 10, displayHeight);
    
    leftWall.visibility = false;
    rightWall.visibility = false;


    addPlayer = createSprite(displayWidth/2 + 150, displayHeight/2 - 200, 100, 50);

    //start = createSprite(displayWidth/2, displayHeight/2, 100, 50);

    addComputer = createSprite(displayWidth/2 - 150, displayHeight/2 - 200, 100, 50);

    player1.setCollider("rectangle",0,0,40,170);
    player1.debug = true

   playAgain = createSprite(5000, displayHeight/2, 100, 50);
   choose = createSprite(5000, displayHeight/2, 100, 50)

   /*impossible = createSprite(-100,displayHeight/2,100, 50);
   extreme = createSprite(-250,displayHeight/2,100, 50);
   hard = createSprite(-400,displayHeight/2,100, 50);
   medium = createSprite(-550,displayHeight/2,100, 50);
   easy = createSprite(-700,displayHeight/2,100, 50);
    */

   logo = createSprite(displayWidth/2, 100, 40, 40);
   logo.addImage(logoImage); 
   logo.scale = 0.5;

}

function draw(){
    background("skyblue");
    //createEdgeSprites();
    
    if(gameState === SETUP){

        addPlayer.x = displayWidth/2 + 500;
        addComputer.x = displayWidth/2 - 500;

        playAgain.x = 5000;
        choose.x = 5000;

       // console.log(playeAgain.x);

        //playAgain.visibility = false;
        //choose.visibility = false;

        textSize(20);

        fill("yellow"); 
        text("Add a player", addPlayer.x - 30, addPlayer.y - 40);

        fill("blue");
        text("Add a computer", addComputer.x - 50, addComputer.y - 40);

        if(mousePressedOver(addPlayer)){
         fill("red");
        text("Start!", displayWidth/2 - 30, displayHeight/2 - 40);
            ADDPLAYER();
            gameState = PLAYERS;
        }

        if(mousePressedOver(addComputer)){
            fill("red");
            text("Start!", displayWidth/2 - 30, displayHeight/2 - 40);
           ADDCOMPUTER();
           gameState = COMPUTER;
          
        }
    
    }

    if(gameState === PLAYERS){

        textSize(24);
        fill("white");
        text("Player 1 Health", 75, 100);
        text("Player 2 Health", displayWidth - 175, 100);

        player2.setCollider("rectangle",0,0,40,170);
        player2.debug = true

        player1.collide(leftWall);
        player1.collide(rightWall);
        player2.collide(leftWall);
        player2.collide(rightWall);
        


        addPlayer.x = 5000;
        addComputer.x = 5000;

        if(keyDown(LEFT_ARROW)){
            player1.x -= 10;
            player1.addImage(player1StandCopy);
        }

        if(keyDown(RIGHT_ARROW)){
            player1.x += 10;
            player1.addImage(player1Stand);
        }

        if(player1.y >= player1.y - 200 && keyDown("SPACE")){
            player1.y -= 16;
        }

        player1.velocityY = player1.velocityY + 0.5;

        if(keyWentDown("m") && player2.x < player1.x){
            player1.addImage(player1PunchCopy);
        }

        if(keyWentDown("n") && player2.x < player1.x){
            player1.addImage(player1KickCopy);
        }

        if(keyWentUp("m")){
            player1.addImage(player1Stand);
        }

        if(keyWentUp("n")){
            player1.addImage(player1Stand);
        }

        if(keyWentDown("m") && player2.x > player1.x){
            player1.addImage(player1Punch);
        }

        if(keyWentDown("n") && player2.x > player1.x){
            player1.addImage(player1Kick);
        }

        if(keyWentUp("m")){
            player1.addImage(player1Stand);
        }

        if(keyWentUp("n")){
            player1.addImage(player1Stand);
        }


        if(keyWentDown("m") && player1.isTouching(player2)){
            player2Health -= 0.5;
            player1.x -= 10;
            player1.addImage(player1Punch);
        }

        if(keyWentDown("n")  && player1.isTouching(player2)){
            player2Health -= 0.5;
            player1.x -= 10;
            player1.addImage(player1Kick);
        }

        if(keyWentUp("m") && player1.isTouching(player2)){
            player2Health -= 0.5;
            player1.x -= 0;
            player1.addImage(player1Stand);
        }

        if(keyWentUp("n")  && player1.isTouching(player2)){
            player2Health -= 0.5;
            player1.x -= 0;
            player1.addImage(player1Stand);
        }

        //ADDPLAYER();
        
    if(keyDown("a")){
        player2.x -= 10;
        player2.addImage(player2StandCopy);
    }

    if(keyDown("d")){
        player2.x += 10;
        player2.addImage(player2Stand);
    }

    if(player2.y >= player2.y - 200 && keyDown("w")){
        player2.y -= 16;
    }

    player2.velocityY = player2.velocityY + 0.5;

    if(keyWentDown("q") && player2.x > player1.x){
        player2.addImage(player2PunchCopy);
    }

    if(keyWentDown("e") && player2.x > player1.x){
        player2.addImage(player2KickCopy);
    }

    if(keyWentDown("q") && player2.x < player1.x){
        player2.addImage(player2Punch);
    }

    if(keyWentDown("e") && player2.x < player1.x){
        player2.addImage(player2Kick);
    }



    if(keyWentDown("q") && player2.isTouching(player1)){
        player1Health -= 0.5;
        player2.x += 10;
        player2.addImage(player2Punch);
    }

    if(keyWentDown("e")  && player2.isTouching(player1)){
        player1Health -= 0.75;
        player2.x += 10;
        player2.addImage(player2Kick);
    }

    if(keyWentUp("q")){
        player1Health -= 0;
        player2.x += 10;
        player2.addImage(player2Stand);
    }

    if(keyWentUp("e")){
        player1Health -= 0;
        player2.x += 0;
        player2.addImage(player2Stand);
    }
    
    if(player1Health === 7){
        player1Health8.shapeColor = "red";
    }else  if(player1Health === 6){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
    }else if(player1Health === 5){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
    }else  if(player1Health === 4){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
        player1Health5.shapeColor = "red";
    }else  if(player1Health === 3){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
        player1Health5.shapeColor = "red";
        player1Health4.shapeColor = "red";
    }else if(player1Health === 2){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
        player1Health5.shapeColor = "red";
        player1Health4.shapeColor = "red";
        player1Health3.shapeColor = "red";
    }else  if(player1Health === 1){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
        player1Health5.shapeColor = "red";
        player1Health4.shapeColor = "red";
        player1Health3.shapeColor = "red";
        player1Health2.shapeColor = "red";
    }else  if(player1Health === 0){
        player1Health8.shapeColor = "red";
        player1Health7.shapeColor = "red";
        player1Health6.shapeColor = "red";
        player1Health5.shapeColor = "red";
        player1Health4.shapeColor = "red";
        player1Health3.shapeColor = "red";
        player1Health2.shapeColor = "red";
        player1Health1.shapeColor = "red";
        gameState = PLAYEREND;
    }

    
    if(player2Health === 7){
        player2Health8.shapeColor = "red";
    }else  if(player2Health === 6){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
    }else if(player2Health === 5){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
    }else  if(player2Health === 4){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
        player2Health5.shapeColor = "red";
    }else  if(player2Health === 3){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
        player2Health5.shapeColor = "red";
        player2Health4.shapeColor = "red";
    }else if(player2Health === 2){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
        player2Health5.shapeColor = "red";
        player2Health4.shapeColor = "red";
        player2Health3.shapeColor = "red";
    }else  if(player2Health === 1){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
        player2Health5.shapeColor = "red";
        player2Health4.shapeColor = "red";
        player2Health3.shapeColor = "red";
        player2Health2.shapeColor = "red";
    }else  if(player2Health === 0){
        player2Health8.shapeColor = "red";
        player2Health7.shapeColor = "red";
        player2Health6.shapeColor = "red";
        player2Health5.shapeColor = "red";
        player2Health4.shapeColor = "red";
        player2Health3.shapeColor = "red";
        player2Health2.shapeColor = "red";
        player2Health1.shapeColor = "red";
        gameState = PLAYEREND;
    }

    player2.collide(ground);

       //ADDCOMPUTER();
    }else if(gameState === PLAYEREND){

    if(player1Health === 0){

        textSize(50);
        fill("white");
        text("PLAYER 2 WINS!!", (displayWidth/2) - 100, displayHeight/2);
    }else if(player2Health === 0){

        textSize(50);
        fill("white");
        text("PLAYER 1 WINS!!", (displayWidth/2) - 100, displayHeight/2);
    }   

    playAgain.x = displayWidth/2 + 300;
    choose.x = displayWidth/2 - 300;

    textSize(20);
    fill("white");
    text("PLAY AGAIN!", playAgain.x - 50, displayHeight/2 - 100);
    text("CHOOSE DIFFERENT SETUP", choose.x - 75, displayHeight/2 - 100);


    if(mousePressedOver(playAgain)){
        gameState = COMPUTER;
        player1.x = displayWidth - 800;
        player2.x = displayWidth - 150;
        player1Health = 3;
        player2Health = 3;
        player1Health1.shapeColor = "limegreen";
        player1Health2.shapeColor = "limegreen";
        player1Health3.shapeColor = "limegreen";
        player2Health1.shapeColor = "limegreen";
        player2Health2.shapeColor = "limegreen";
        player2Health3.shapeColor = "limegreen";
        playAgain.x = 5000;
        choose.x = 5000;

    }  

    if(mousePressedOver(choose)){
        gameState = SETUP
        player2.destroy();
        player1Health = 3;
        player2Health = 3;
        player2Health1.destroy();
        player2Health2.destroy();
        player2Health3.destroy();
        player1Health1.shapeColor = "limegreen";
        player1Health2.shapeColor = "limegreen";
        player1Health3.shapeColor = "limegreen";
        player1.x = displayWidth - 800;
        player2.x = displayWidth - 150;

    }

    }
    
    if(gameState === COMPUTER){

    fill("red");  
    textSize(24)
    text("PRESS FROM 1 TO 5 FOR HARDER COMPUTER LEVELS!!", displayWidth/2 - 350, displayHeight/2 - 250);

        //COMPUTERSETUP();

        if(keyWentDown("5") && gameState === COMPUTER){
            //Computer Left and Right
    if(computerPlayer.x >= player1.x - 800  && computerPlayer.x <= player1.x){
        computerPlayer.velocityX += 25;
    }else if(computerPlayer.x <= player1.x + 800  && computerPlayer.x >= player1.x){
        computerPlayer.velocityX -= 25;
    }else{
        computerPlayer.velocityX = 0;
    }
    
    }
    
    if(keyWentDown("4") && gameState === COMPUTER){
        
        //Computer Left and Right
    if(computerPlayer.x >= player1.x - 300  && computerPlayer.x <= player1.x){
        computerPlayer.velocityX += 20;
    }else if(computerPlayer.x <= player1.x + 300  && computerPlayer.x >= player1.x){
        computerPlayer.velocityX += -20;
    }else{
        computerPlayer.velocityX = 0;
    }
    
    }
    
    if(keyDown("3") && gameState === COMPUTER){
        
    //Computer Left and Right
    if(computerPlayer.x >= player1.x - 300  && computerPlayer.x <= player1.x){
    computerPlayer.velocityX += 12;
    }else if(computerPlayer.x <= player1.x + 300  && computerPlayer.x >= player1.x){
    computerPlayer.velocityX += -12;
    }else{
    computerPlayer.velocityX = 0;
    }
    
    }
    
    if(keyDown("2")  && gameState === COMPUTER){
            
    //Computer Left and Right
    if(computerPlayer.x >= player1.x - 300  && computerPlayer.x <= player1.x){
    computerPlayer.velocityX += 7;
    }else if(computerPlayer.x <= player1.x + 300  && computerPlayer.x >= player1.x){
    computerPlayer.velocityX += -7;
    }else{
    computerPlayer.velocityX = 0;
    }
    
    }
    
    if(keyDown("1") && gameState === COMPUTER){
    //Computer Left and Right
    if(computerPlayer.x >= player1.x - 800  && computerPlayer.x <= player1.x){
    computerPlayer.velocityX += 5;
    }else if(computerPlayer.x <= player1.x + 800  && computerPlayer.x >= player1.x){
    computerPlayer.velocityX += 5;
    }else{
    computerPlayer.velocityX = 0;
    }
    
    }
    

        addPlayer.x = 5000;
        addComputer.x = 5000;

        textSize(24);
        fill("white");
        text("Player 1 Health", 75, 100);
        text("PC Health", displayWidth - 175, 100);

        computerPlayer.setCollider("rectangle",0,0,40,170);
        computerPlayer.debug = true

        player1.collide(leftWall);
        player1.collide(rightWall);
        computerPlayer.collide(leftWall);
        computerPlayer.collide(rightWall);
        
        if(keyDown(LEFT_ARROW)){
            player1.x -= 20;
        }

        if(keyDown(RIGHT_ARROW)){
            player1.x += 20;
        }

        if(player1.y >= player1.y - 200 && keyDown("SPACE")){
            player1.y -= 20;
           
        }

        player1.velocityY = player1.velocityY + 0.5;                

        if(keyWentDown("m")){
            player1.addImage(player1Punch);
        }

        if(keyWentDown("n")){
            player1.addImage(player1Kick);
        }

        if(keyWentUp("m")){
            player1.addImage(player1Stand);
        }

        if(keyWentUp("n")){
            player1.addImage(player1Stand);
        }


        if(keyWentDown("m") && player1.isTouching(computerPlayer)){
            computerPlayerHealth -= 0.5;
            player1.x -= 10;
            player1.addImage(player1Punch);
        }

        if(keyWentDown("n")  && player1.isTouching(computerPlayer)){
            computerPlayerHealth -= 0.75;
            player1.x -= 10;
            player1.addImage(player1Kick);
        }

    

        //Computer Up and Down
        if(computerPlayer.x >= player1.x - 400  && computerPlayer.x <= player1.x + 400 && keyDown("SPACE") && computerPlayer.y <= 400) {
              computerPlayer.y -= 20;
              
        }


        /*if(computerPlayer.x <= player1.x + 400  && computerPlayer.x >= player1.x  && keyDown("SPACE") && computerPlayer.y <= 400){
            computerPlayer.velocityY = -20;
        }else{
            computerPlayer.velocityY = 0;
        }*/

        computerPlayer.velocityY = computerPlayer.velocityY + 0.5      
        


        if(computerPlayer.isTouching(player1)){
            player1Health -= 0.25;
            //computerPlayer.x -= 80;
        }
         

        computerPlayer.velocityY = computerPlayer.velocityY + 0.5;

        
    if(player1Health === 2){
        player1Health1.shapeColor = "red";
    }else  if(player1Health === 1){
        player1Health2.shapeColor = "red";
        player1Health1.shapeColor = "red";
    }else  if(player1Health === 0){
        player1Health3.shapeColor = "red";
        player1Health2.shapeColor = "red";
        player1Health1.shapeColor = "red";
        gameState = COMPUTEREND;
    }


        if(computerPlayerHealth === 2){
            computerPlayerHealth1.shapeColor = "red";
        }else  if(computerPlayerHealth === 1){
            computerPlayerHealth2.shapeColor = "red";
            computerPlayerHealth1.shapeColor = "red";
        }else  if(computerPlayerHealth === 0){
            computerPlayerHealth3.shapeColor = "red";
            computerPlayerHealth2.shapeColor = "red";
            computerPlayerHealth1.shapeColor = "red";
            gameState = COMPUTEREND;
        }


        computerPlayer.collide(ground);
    }else if(gameState === COMPUTEREND){

        computerPlayer.velocityX = 0;
        
    if(player1Health === 0){

        textSize(50);
        fill("white");
        text("COMPUTER WINS!!", (displayWidth/2) - 220, displayHeight/2);
    }else if(computerPlayerHealth === 0){
        
        textSize(50);
        fill("white");
        text("PLAYER 1 WINS!!", (displayWidth/2) - 200, displayHeight/2);
    }   

    playAgain.x = displayWidth/2 + 300;
    choose.x = displayWidth/2 - 300;

    textSize(20);
    fill("white");
    text("PLAY AGAIN!", playAgain.x - 50, displayHeight/2 - 100);
    text("CHOOSE DIFFERENT SETUP", choose.x - 75, displayHeight/2 - 100);

    if(mousePressedOver(playAgain)){
        gameState = COMPUTER;
        player1.x = displayWidth - 800;
        computerPlayer.x = displayWidth - 150;
        player1Health = 3;
        computerPlayerHealth = 3;
        player1Health1.shapeColor = "limegreen";
        player1Health2.shapeColor = "limegreen";
        player1Health3.shapeColor = "limegreen";
        computerPlayerHealth1.shapeColor = "limegreen";
        computerPlayerHealth2.shapeColor = "limegreen";
        computerPlayerHealth3.shapeColor = "limegreen";
        playAgain.x = 5000;
        choose.x = 5000;

    }  

    if(mousePressedOver(choose)){
        gameState = SETUP
        computerPlayer.destroy();
        player1Health = 3;
        computerPlayerHealth = 3;
        computerPlayerHealth1.destroy();
        computerPlayerHealth2.destroy();
        computerPlayerHealth3.destroy();
        player1Health1.shapeColor = "limegreen";
        player1Health2.shapeColor = "limegreen";
        player1Health3.shapeColor = "limegreen";
        player1.x = displayWidth - 800;
        computerPlayer.x = displayWidth - 150;

    }

    computerPlayer.collide(ground);

    }

    //console.log(player2Health);
    //console.log(player1Health);


    player1.collide(ground);

    

    drawSprites();
}

function ADDPLAYER(){
    
    player2 = createSprite(displayWidth - 150, displayHeight - 150, 20, 200);  
    player2.addImage(player2Stand);

    player2Health1 = createSprite(displayWidth - 75, 30, 100, 30);
    player2Health1.shapeColor = "limegreen";

    player2Health2 = createSprite(displayWidth - 125, 30, 100, 30);
    player2Health2.shapeColor = "limegreen";

    player2Health3 = createSprite(displayWidth - 175, 30, 100, 30);
    player2Health3.shapeColor = "limegreen";

    
    player2Health4 = createSprite(displayWidth - 225, 30, 100, 30);
    player2Health4.shapeColor = "limegreen";

    player2Health5 = createSprite(displayWidth - 275, 30, 100, 30);
    player2Health5.shapeColor = "limegreen";

    player2Health6 = createSprite(displayWidth - 325, 30, 100, 30);
    player2Health6.shapeColor = "limegreen";
    
    player2Health7 = createSprite(displayWidth - 375, 30, 100, 30);
    player2Health7.shapeColor = "limegreen";

    player2Health8 = createSprite(displayWidth - 425, 30, 100, 30);
    player2Health8.shapeColor = "limegreen";



}

function ADDCOMPUTER(){

    computerPlayer = createSprite(displayWidth - 150, displayHeight - 160, 20, 200);
    computerPlayer.addImage(player2Stand);

    computerPlayerHealth1 = createSprite(displayWidth - 75, 30, 100, 30);
    computerPlayerHealth1.shapeColor = "limegreen";

    computerPlayerHealth2 = createSprite(displayWidth - 125, 30, 100, 30);
    computerPlayerHealth2.shapeColor = "limegreen";

    computerPlayerHealth3 = createSprite(displayWidth - 175, 30, 100, 30);
    computerPlayerHealth3.shapeColor = "limegreen";
    
    computerPlayerHealth4 = createSprite(displayWidth - 225, 30, 100, 30);
    computerPlayerHealth4.shapeColor = "limegreen";

    computerPlayerHealth5 = createSprite(displayWidth - 275, 30, 100, 30);
    computerPlayerHealth5.shapeColor = "limegreen";

    computerPlayerHealth6 = createSprite(displayWidth - 325, 30, 100, 30);
    computerPlayerHealth6.shapeColor = "limegreen";

    computerPlayerHealth7 = createSprite(displayWidth - 375, 30, 100, 30);
    computerPlayerHealth7.shapeColor = "limegreen";

    computerPlayerHealth8 = createSprite(displayWidth - 425, 30, 100, 30);
    computerPlayerHealth8.shapeColor = "limegreen";




}

function COMPUTERSETUP(){

 

}