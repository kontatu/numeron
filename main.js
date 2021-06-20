const answer = document.getElementById('answerNum');
const numCheck = document.getElementById('numCheck');
const consecutive = /(.)\1+/;

let npcNum;
do {
    randam = String(Math.floor(Math.random() * 1000));
    if (randam <= 9) {
        randamNum = "00" + randam;
    } else if (randam <= 99) {
        randamNum = "0" + randam;
    } else {
        randamNum = randam;
    };
    npcNum = String([randamNum]).split("");
} while (existsSameValue(npcNum));

// 
let eatNum = 0;
let biteNum = 0;
let numberOfTime = 0;
numCheck.addEventListener('click', function () {
    answerNum = answer.value;

    if (numberOfTime < 10) {
        if (consecutive.test(answerNum)) {
            alert('数字をバラバラにしてください');
        } else if (answerNum.length !== 3) {
            alert('３つの数字にしてください');
        } else {
            const number = String([answerNum]).split("");
            eatNum = 0;
            biteNum = 0;
            console.log(npcNum);
            if (npcNum[0] === number[0]) {
                eatNum += 1;
            } else if (checkAvailability(npcNum, answerNum[0])) {
                biteNum += 1;
            };
            if (npcNum[1] === number[1]) {
                eatNum += 1;
            } else if (checkAvailability(npcNum, answerNum[1])) {
                biteNum += 1;
            };
            if (npcNum[2] === number[2]) {
                eatNum += 1;
            } else if (checkAvailability(npcNum, answerNum[2])) {
                biteNum += 1;
            };
            alert('入力数字：' + answer.value + '  ' + '結果：' + eatNum + 'EAT' + '  ' + biteNum + "BITE");
            answer.value = '';
            numberOfTime += 1;
            alert('残り入力数は、' + (10 - numberOfTime) + '回です')
            if (eatNum === 3) {
                alert('正解です');
                alert('ゲームをリセットします');
                answer.value = '';
                numberOfTime = 0;
                do {
                    randam = String(Math.floor(Math.random() * 1000));
                    if (randam <= 9) {
                        randamNum = "00" + randam;
                    } else if (randam <= 99) {
                        randamNum = "0" + randam;
                    } else {
                        randamNum = randam;
                    };
                    npcNum = String([randamNum]).split("");
                } while (existsSameValue(npcNum));
            }
        }
    } else {
        alert('10回以上はできません：ゲームをリセットします');
        answer.value = '';
        numberOfTime = 0;
        do {
            randam = String(Math.floor(Math.random() * 1000));
            if (randam <= 9) {
                randamNum = "00" + randam;
            } else if (randam <= 99) {
                randamNum = "0" + randam;
            } else {
                randamNum = randam;
            };
            npcNum = String([randamNum]).split("");
        } while (existsSameValue(npcNum));
    }
});

function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}

function existsSameValue(a) {
    let s = new Set(a);
    return s.size != a.length;
}


// const eat = function () {
//     if (npcNum[0] === number[0]) {
//         eatNum += 1;
//     };
//     if (npcNum[1] === number[1]) {
//         eatNum += 1;
//     };
//     if (npcNum[2] === number[2]) {
//         eatNum += 1;
//     };
// };


