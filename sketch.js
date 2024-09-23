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
	ball = new Sprite(170,626);
	ball.diameter = 80;
	ball.img = '😀';
	ball.collider = 'none'
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
	//egg.direction = 187;
	//egg.speed = 12;
	
	//reward sprite 2nd
	eggi = new Sprite(1300,650);
	eggi.img = '🥚';
	eggi.collider = 'dynamic'
	//eggi.direction = 187;
	//eggi.speed = 12;
	
	//GHOST DO NOT EAT
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghost = new Sprite(1400, 650);
	ghost.img = 'ghost scary.png'
	ghost.collider = 'dynamic'
	//ghost.direction = 187;
	//ghost.speed = 12;

	//ghost 2
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghosti = new Sprite(1475, 650);
	ghosti.img = 'ghost scary.png'
	ghosti.collider = 'dynamic'
	//ghosti.direction = 187;
	//ghosti.speed = 12;

	//reward sprite 3rd
	eggii = new Sprite(1100,650);
	eggii.img = '🥚';
	eggii.collider = 'dynamic'
	//eggii.direction = 187;
	//eggii.speed = 12;

	//ghost 3
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghostii = new Sprite(1000, 650);
	ghostii.img = 'ghost scary.png'
	ghostii.collider = 'dynamic'
	//ghostii.direction = 187;
	//ghostii.speed = 12;

	//reward sprite 4th
	eggiii = new Sprite(900,650);
	eggiii.img = '🥚';
	eggiii.collider = 'dynamic'
	//eggiii.direction = 187;
	//eggiii.speed = 12;

	//ghost 4
	img = loadImage('ghost scary.png');
	img.resize(0,50);
    ghostiii = new Sprite(800, 650);
	ghostiii.img = 'ghost scary.png'
	ghostiii.collider = 'dynamic'
	//ghostiii.direction = 187;
	//ghostiii.speed = 12;
	
	//reward sprite 5th
	eggiv = new Sprite(700,650);
	eggiv.img = '🥚';
	eggiv.collider = 'dynamic'
	//eggiv.direction = 187;
	//eggiv.speed = 12;
	
	//reward sprite 6th
	eggv = new Sprite(600,650);
	eggv.img = '🥚';
	eggv.collider = 'dynamic'
	//eggv.direction = 187;
	//eggv.speed = 12;
	
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
	text('Welcome to ghost absorber', 900,200,);
	text('press w to eat the eggs!', 900,300,);
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
	if (ball.overlaps(egg)) egg.remove();
	if (ball.overlaps(eggi)) eggi.remove();
	if (ball.overlaps(eggii)) eggii.remove();
	if (ball.overlaps(eggii)) eggii.remove();
	if (ball.overlaps(eggiii)) eggiii.remove();
	if (ball.overlaps(eggiv)) eggiv.remove();
	if (ball.overlaps(eggv)) eggv.remove();
    if (ball.overlaps(eggi)) {
		fill('white');
		text('YOU WIN!', 1000, 300);
	}
}