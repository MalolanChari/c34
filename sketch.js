var ball;
var database;
var pos;
var ball_pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    ball_pos = database.ref('ball/position');
    ball_pos.on("value",readPosition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   ball_pos2 = database.ref('ball/position');
   ball_pos2.set({
       'x': pos.x+x,
       'y':pos.y+y

   })
   
}

function readPosition(data){
    pos = data.val();
    ball.x=pos.x;
    ball.y = pos.y;

}

function showerror(){
    console.log("there is an error")
}
