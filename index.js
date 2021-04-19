var txt="Welcome to my website";
var i=0;
var speed=50;
function typeWriter() {
    if (i < txt.length) {
      document.querySelector('#demo').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
typeWriter();