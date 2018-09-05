var infin = '∞';

function moreText(){

x = 0;

while ( x < 9000 ){

document.body.appendChild(
    document
    .createTextNode(
      infin + ' '
    )
  );

  x++;

}

}

moreText();

document.addEventListener('scroll', function (event) {

    if (
      window.scrollMaxY -
      window.scrollY <
      100
    ) {
        console.log('bottom');
        moreText();
    }
});
