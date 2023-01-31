/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let newArray = []
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                newArray[i] = 1;
                break;
            case "V":
                newArray[i] = 5;
                break;
            case "X":
                newArray[i] = 10;
                break;

            case "L":
                newArray[i] = 50;
                break;

            case "C":
                newArray[i] = 100;
                break;

            case "D":
                newArray[i] = 500;
                break;

            case "M":
                newArray[i] = 1000;
                break;

        }


        if (i > 0) {
            let k = i - 1;
            if (newArray[i] > newArray[k]) {
                newArray[k] = -newArray[k];
            }
            res = res + newArray[k];
        }
    }


    return res + newArray[s.length - 1];


}

let result = romanToInt("III")
console.log(result);