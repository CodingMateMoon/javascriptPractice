

function selectMin(a, b, c){
    let answer = a
    if (answer > b) {
        answer = b;
    }
    if(answer > c) {
        answer = c;
    }
    return answer;
}

console.log(selectMinTest(2, 5, 1));
// console.log(selectMin(2, 5, 1));
// console.log(selectMin(6, 5, 11));
