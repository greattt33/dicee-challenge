
const number1= Math.floor(Math.random()*6)+1;
const number2= Math.floor(Math.random()*6)+1;
const player1Number= "C:/Users/ASUS/Desktop/web development/boss challenge/image/dice"+number1+".png"
const player2Number= "C:/Users/ASUS/Desktop/web development/boss challenge/image/dice"+number2+".png"
function newNumber(){
return (document.querySelectorAll("img")[0].setAttribute("src",player1Number),
document.querySelectorAll("img")[1].setAttribute("src",player2Number));
}
document.querySelector("button").addEventListener("click",function(){
	newNumber();
	if(player1Number<player2Number){
		document.querySelector("h1").innerHTML="Player2 won";
	} else if(player1Number>player2Number){
		document.querySelector("h1").innerHTML="Player1 won";
	} else{
		document.querySelector("h1").innerHTML="Draw";
	}
}	
);