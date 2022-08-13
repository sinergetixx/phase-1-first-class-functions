function receivesAFunction(runFiveMiles) {
    runFiveMiles();
}

function returnsANamedFunction() {
    function exerciseRoutine(){
        return liftWeights();
    }
    return exerciseRoutine;
}

function returnsAnAnonymousFunction() {
    return function(){}
}