var randomv = Math.random();  // Generating a random number 

randomv = randomv * 6;   
randomv = Math.floor(randomv) + 1;

var randomc = Math.random();   //Generating the second random number

randomc = randomc * 6;
randomc = Math.floor(randomc) + 1;

//Changing the image source of both the images

document.querySelectorAll("img")[0].setAttribute("src","dice"+randomv+".png");

document.querySelectorAll("img")[1].setAttribute("src","dice"+randomc+".png");




  if(randomv==randomc)
  {
    document.querySelector("h1").innerHTML="Draw";
  }
  else if(randomv>randomc)
  {
    document.querySelector("h1").innerHTML="Player 1 wins!";
  }
  else
  {
    document.querySelector("h1").innerHTML="Player 2 wins!";
  }