var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true;
var myString = '';
var buffer = 20;

	function setup()
	{
		// graphics stuff:
		createCanvas(windowWidth, windowHeight);

    textSize(50);
    textFont('Menlo');
		// instructions:
		myRec.onResult = showResult;
		myRec.start();
	}
	function draw()
	{

    background(0, 0, 255);

    fill(0);
    text(myString.toUpperCase(), 0+buffer-5, 0+buffer+5, width-buffer*2, height-buffer*2);

    fill(255);
    noStroke();
    strokeCap(PROJECT);
    textStyle(BOLD);

    textAlign(CENTER, CENTER);
    text(myString.toUpperCase(), 0+buffer, 0+buffer, width-buffer*2, height-buffer*2);
	}
	function showResult()
	{
    if(myRec.resultString == 'clear'){
      myString = '';
    } else if(myRec.resultValue==true) {
      myString = myString + ' ' + myRec.resultString;
			console.log(myRec.resultString);
		}
	}

  function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

  }
