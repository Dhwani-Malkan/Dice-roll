function diceroll(){

var random1 = Math.floor(Math.random()*6 + 1);
console.log(random1);

var random2 = Math.floor(Math.random()*6 + 1);
console.log(random2);

var image1='dice_' + random1 + '.jpg';
var image2='dice_' + random2 + '.jpg';

console.log(image1);

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

document.querySelector("img");

if(random1===random2)
{
    document.querySelector("h1").innerHTML="It's a Draw!";
}else if(random1 > random2)
{
    document.querySelector("h1").innerHTML="Player-1 wins!";
}else
{
    document.querySelector("h1").innerHTML="Player-2 wins!";
}
}