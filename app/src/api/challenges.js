function challenge1(array) {
    let n = array.length;

    for (let i = 0; i < n; i++) {
        if (array[i] <= 0 || array[i] > n) {
            array[i] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        let val = Math.abs(array[i]);
        if (val > 0 && val <= n) {
            if (array[val - 1] > 0) {
                array[val - 1] = -array[val - 1];
            } else if (array[val - 1] === 0) {
                array[val - 1] = -(n + 1);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (array[i] >= 0) {
            return i + 1;
        }
    }
    return n + 1;
}


function challenge2(array) {
    if (array.length === 0) {
        return [];
    }

    let count = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            count++;
        }
    }

    let result = new Array(count);
    let index = 0;
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            sum += array[i];
        } else {
            result[index++] = sum;
            sum = array[i];
        }
    }
    result[index] = sum;

    return result;
}

function challenge3(array) {
    // Write the code for Challenge 3 here

    if (array.length === 0) {
        return false;
    }

    let min = array[0], max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    if (max - min + 1 !== array.length) {
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false;
            }
        }
    }

    return true;
}

module.exports = { challenge1, challenge2, challenge3 };