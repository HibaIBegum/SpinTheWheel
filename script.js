function myfunction() {

 
  var x = 1024; //min value
  var y = 9999; // max value

  var deg = Math.floor(Math.random() * (x - y)) + y;
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function() {
    element.classList.add('animate');
    audio.pause();
  }, 5000); //5000 = 5 second

}