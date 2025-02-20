/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let twoNums: number[];
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        twoNums = [numbers[0], numbers[0]];
    } else {
        twoNums = [numbers[0], numbers[numbers.length - 1]];
    }
    return twoNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNums: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        newNums.push(numbers[i] * 3);
    }
    return newNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let toNums: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(+numbers[i])) {
            toNums.push(0);
        } else {
            toNums.push(+numbers[i]);
        }
    }
    return toNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let noDollar: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        let newString: string;
        if (amounts[i][0] === "$") {
            newString = amounts[i].slice(1);
            console.log("new string " + newString);
        } else {
            newString = amounts[i];
        }
        if (isNaN(+newString)) {
            console.log(newString + " is not a number");
            noDollar.push(0);
        } else {
            noDollar.push(+newString);
        }
    }
    return noDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].endsWith("!")) {
            newMessages.push(messages[i].toUpperCase());
        } else if (!messages[i].endsWith("?")) {
            newMessages.push(messages[i]);
        }
    }
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let sum: number = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            sum++;
        }
    }
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allTrue: boolean = true;
    if (colors.length === 0) {
        return true;
    }
    for (let i = 0; i < colors.length; i++) {
        if (
            colors[i] !== "red" &&
            colors[i] !== "green" &&
            colors[i] !== "blue"
        ) {
            allTrue = false;
        }
    }
    return allTrue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = 0;
    if (addends.length === 0) {
        return "0=0";
    }
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
    }
    let total: string = "" + sum + "=";
    for (let j = 0; j < addends.length; j++) {
        total += "" + addends[j];
        if (j !== addends.length - 1) {
            total += "+";
        }
    }
    return total;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number = 0;
    let newNums: number[] = [];
    let foundNegative: boolean = true;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0 && foundNegative) {
            newNums.push(values[i]);
            newNums.push(sum);
            foundNegative = false;
        } else {
            newNums.push(values[i]);
        }
        sum += values[i];
    }
    if (foundNegative) {
        newNums.push(sum);
    }
    return newNums;
}
