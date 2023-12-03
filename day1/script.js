import { bigData } from './dataInput.js';

let matchesArray = [];
let total = 0;
let bigDataInput = [];

(async function readFile() {
    bigDataInput = Object.values(bigData);

    isInList(bigDataInput);
})();

function isInList(incomingArr) {

    console.log("what is coming in?  " + incomingArr);

    let newChar = "";
    for (let i = 0; i < bigDataInput.length; i++) {
        bigDataInput[i] = bigDataInput[i].replace(/zerone/g, 0o1)
            .replace(/oneight/g, 18)
            .replace(/twone/g, 21)
            .replace(/eightwo/g, 82)
            .replace(/threeight/g, 38)
            .replace(/fiveight/g, 58)
            .replace(/nineight/g, 98)
            .replace(/zero/g, 0)
            .replace(/one/g, 1)
            .replace(/two/g, 2)
            .replace(/three/g, 3)
            .replace(/four/g, 4)
            .replace(/five/g, 5)
            .replace(/six/g, 6)
            .replace(/seven/g, 7)
            .replace(/eight/g, 8)
            .replace(/nine/g, 9);

        let matches = bigDataInput[i].replace(/[^0-9]/g, "");
        if (matches) {
            let firstChar = matches.charAt(0);
            let lastChar = matches.charAt(matches.length - 1);
            newChar = Number(firstChar + lastChar);
            matchesArray.push(newChar);
        };
        console.log("match  " + newChar);
    };
    for (let i = 0; i < matchesArray.length; i++) {
        total = total + matchesArray[i];
        console.log("total is:  " + total);
    };
    console.log("total is  " + total);
}
