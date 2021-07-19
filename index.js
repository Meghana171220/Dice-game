 function playGame(){
	var randomNumberOne=Math.floor(Math.random()*6)+1;
	var randomImagesOnePath="images/"+"dice"+randomNumberOne+".jpeg";
	var randomNumberTwo=Math.floor(Math.random()*6)+1;
	var randomImagesTwoPath="images/"+"dice"+randomNumberTwo+".jpeg";

	var image1=document.querySelectorAll("img")[0];
	image1.setAttribute("src",randomImagesOnePath);
	var image2=document.querySelectorAll("img")[1];
	image2.setAttribute("src",randomImagesTwoPath);

	if(randomNumberOne>randomNumberTwo){
		document.querySelector("h1").innerHTML="player1 won the game";

	}
	else if(randomNumberTwo>randomNumberOne){
		document.querySelector("h1").innerHTML="player2 won the game";
	}
	else{
		document.querySelector("h1").innerHTML="draw";
	}
}
 document.querySelector("button").addEventListener("click",playGame);
 