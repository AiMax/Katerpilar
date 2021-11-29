pA = 1000
pB = 1500

function elo(a, b) {
    return (1 / (1 + Math.pow(10, (b-a)/400) )).toFixed(2);
}

function rating(pa, k, sa, ea) {
    return pa + k * (sa - ea);
}

function newscore(k, aScore, expectedScore) {
    return Math.round(k * (aScore - expectedScore));
}

console.log(elo(pA, pB));
console.log(elo(pB, pA));

console.log(newscore(32, 1, elo(pA, pB)));

console.log(newscore(32, 1, elo(pB, pA)));