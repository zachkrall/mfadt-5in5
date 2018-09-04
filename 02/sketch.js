var myRec = new p5.SpeechRec();
myRec.continuous = true;


var lyrics = [
	'somebody once told me the world is going to roll me',
	'I ain\'t the sharpest tool in the shed',
	'she was looking kind of dumb with her finger and her thumb',
	'in the shape of an L on her forehead',
	'Well the years start coming and they don\'t stop coming',
	'Fed to the rules and I hit the ground running',
	'Didn\'t make sense not to live for fun',
	'Your brain gets smart but your head gets dumb',
	'So much to do, so much to see',
	'So what is wrong with taking the back streets',
	'You will never know if you don\'t go',
	'You will never shine if you don\'t glow'
];
var counter = 0;
var myString = '';


function setup(){

	createCanvas(windowWidth, windowHeight);

	textSize(50);
	textFont('Menlo');

	myRec.onResult = showResult;
	myRec.start();

}

function draw(){

    background(0, 0, 255);

		if( lyrics[counter].toUpperCase() == myString.toUpperCase() ){
			console.log('the lines match');
			myString = '';
				counter++;
		}

		if( counter >= lyrics.length ){
			counter = 0;
		}

    fill(0);
    text( lyrics[counter].toUpperCase() , 20-5, 20+5, width-40, height-40);

    fill(255);
    noStroke();
    strokeCap(PROJECT);
    textStyle(BOLD);


    text( lyrics[counter].toUpperCase() , 20, 20, width-40, height-40);

		fill(255, 255, 0);
		text( myString.toUpperCase(), 20, 20, width-40, height-40);

}

function showResult(){

    // if(myRec.resultString == 'clear'){
	  //   clr();
    // } else if(myRec.resultValue==true) {
    //   myString = myString + ' ' + myRec.resultString;
		// 	console.log(myRec.resultString);
		// }

		console.log(myRec.resultString);

		if ( lyrics[counter].toUpperCase().indexOf( myRec.resultString.toUpperCase() ) >= 0 ) {

			if ( lyrics[counter].toUpperCase().startsWith( (myString + ' ' + myRec.resultString).trim().toUpperCase() ) ){
				myString = myString + ' ' + myRec.resultString;
				myString = myString.trim().toUpperCase();
			}

		}

}

function windowResized(){

	resizeCanvas(windowWidth,windowHeight);

}
