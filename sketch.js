let ball;
let conveyer;
let egg;
let ghost;
let ghosti;
let ghostii;
let ghostiii;
let img;
let eggi;
let eggii;
let eggiii;
let eggiv;
let eggv;
let wall;
let dots;
let walli
function setup() {
	//score
    score = 0;
	//end of score
	new Canvas(3840, 2160);
    //player 1 / eating sprite
	ball = new Sprite(170,650);
	ball.diameter = 80;
	ball.img = '😀';
	ball.collider = 'dynamic'
	world.gravity.y = 10;
	
	//conveyer belt
	conveyer = new Sprite(800,700); 
	conveyer.color = 'gray';
	conveyer.width = 1500;
	conveyer.height = 70;
	conveyer.collider = 'static';
	
	//reward sprite
	egg = new Sprite(1200,650);
	egg.img = '🥚';
	egg.collider = 'dynamic'
	
	//reward sprite 2nd
	eggi = new Sprite(1300,650);
	eggi.img = '🥚';
	eggi.collider = 'dynamic'
	
	//GHOST DO NOT EAT
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghost = new Sprite(1400, 650);
	ghost.img = 'ghost scary.png'
	ghost.collider = 'dynamic'

	//ghost 2
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghosti = new Sprite(1475, 650);
	ghosti.img = 'ghost scary.png'
	ghosti.collider = 'dynamic'

	//reward sprite 3rd
	eggii = new Sprite(1100,650);
	eggii.img = '🥚';
	eggii.collider = 'dynamic'

	//ghost 3
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghostii = new Sprite(1000, 650);
	ghostii.img = 'ghost scary.png'
	ghostii.collider = 'dynamic'

	//reward sprite 4th
	eggiii = new Sprite(900,650);
	eggiii.img = '🥚';
	eggiii.collider = 'dynamic'

	//ghost 4
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghostiii = new Sprite(800, 650);
	ghostiii.img = 'ghost scary.png'
	ghostiii.collider = 'dynamic'
	
	//reward sprite 5th
	eggiv = new Sprite(700,650);
	eggiv.img = '🥚';
	eggiv.collider = 'dynamic'
	
	//reward sprite 6th
	eggv = new Sprite(600,650);
	eggv.img = '🥚';
	eggv.collider = 'dynamic'
	
	//wall
	wall = new Sprite(20, 650);
	wall.color = '#848a91';
	wall.w = 50;
	wall.h = 400;
	wall.collider = 'none';

	//walli
	walli = new Sprite (1535, 450);
	walli.color = '#303631'
	walli.w = 50;
	walli.h = 400;
	wall.collider = 'none'
}

function draw() {
	background('#0c1b3b');
	//egg.attractTo(ball, 20);
	//eggi.attractTo(ball, 20);
	//eggii.attractTo(ball, 20);
	//eggiii.attractTo(ball, 20);
	//eggiv.attractTo(ball, 20);
	//eggv.attractTo(ball, 20);
    //ghost.attractTo(ball,20);
	//ghosti.attractTo(ball,20);
	//ghostii.attractTo(ball,20);
	//ghostiii.attractTo(ball,20);
	fill('white');
	text('Push out all the sprites', 900,200,);
	//if(keyboard.pressed('w') ) {
     // ball.velocity.y = -5;
	//}
	if (kb.pressing('w')) {
		ball.move(10, 'right', 5);
	}
	if (kb.released('w')) {
		background(0, 0, 255);
	}
	if (kb.presses('w')) {
		background(0, 0, 0)
	}
}