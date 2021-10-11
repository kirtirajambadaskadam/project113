function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,170 ,100 ,300,300 );
    fill(0,120,0);
    stroke(130,0,0);
    circle(70, 60,100);
    fill(120,0,0);
    rect(120,50,400, 22);
    fill(0,120,0);
    circle(570,60,100);
    fill(0,0,120);
    rect(60,110,22, 300);
    rect(560,110,22, 300);
    fill(0,120,0);
    circle(70,450,100);
    circle(570,450,100);
}


function take_snapshot(){
    save('student_name.png');
}