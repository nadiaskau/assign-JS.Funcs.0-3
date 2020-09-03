function play(a) {
    let x = Math.random();
    x = Math.floor(x * a + 1);
    return x;
}

console.log(play());