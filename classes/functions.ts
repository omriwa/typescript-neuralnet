function sigmoidFunc(x) {
    return (Math.pow(Math.E,x))
            /
            ((Math.pow(Math.E,x))+1);
}

function sigmoidDerivative(x) {
    return (
            1
            /
            (1 + Math.pow(Math.E,-x))
            ) 
            *
            (sigmoidFunc(-x));
}

// get random value , 0 < value < 1
function getRandomVal() {
    let random = Math.random();
    while(random == 0)
        random = Math.random();
    return random;
}

export default {sigmoidFunc , getRandomVal , sigmoidDerivative};