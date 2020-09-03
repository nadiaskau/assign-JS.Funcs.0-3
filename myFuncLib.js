// JavaScript source code


/*In todays lesson, I gave you play() that could flip a coin. We have, in the lesson about conditionals, worked with throwing a die. On principle this there is only one tiny difference between the two.

Now, I want you to identify this difference, and then alter play, so that it accomodates coin flipping, die throwing, turning a spindle with any number of sides, and even a roulette.*/

'use strict';
function play(a) {
    let x = Math.random();
    x = Math.floor(x * a + 1);
    return x;
}

console.log(play(6)); //if we were throwing a die

//Write two functions C2F(c), and F2C(f) the first converts celsius temperatures to Fahrenheit, and the other Fahrenheit to Celsius.

function C2F(c){
  return c * (9/5) + 32;
}

function F2C(f){
  return (f - 32) * 5/9;
}
