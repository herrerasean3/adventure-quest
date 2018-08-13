let storybox = document.querySelector('#storybox');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn = document.querySelectorAll('.btn');

//Clears any text or elements inside the target, allowing us to maintain a clean worspace
function eleWipe(target){
  target.innerHTML="";
}

//Sets the contents of the target element to the string provided in content.
function elePrint(target,content){
  target.innerHTML=content;
}
