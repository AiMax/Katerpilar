
// Calculates the winrate of the player A vs player B.
function getWinrate(eloA, eloB){
    return (1 / (1 + Math.pow(10, (eloB - eloA) / 400) )).toFixed(2);
}

// Gets the points using the actual result and the winrate.
function getPoints(k, aScore, winrate){
    return Math.round(k * (aScore - winrate));
}

exports.getWinrate = getWinrate;
exports.getPoints = getPoints;  