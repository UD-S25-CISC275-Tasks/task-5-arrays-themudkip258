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
    let newNums: number[] = numbers.map((num: number): number => num * 3);
    return newNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let toNums: number[] = numbers.map((num: string): number =>
        isNaN(+num) ? 0 : +num,
    );
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
    let noDollar: string[] = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    let allNums = stringsToIntegers(noDollar);
    return allNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages: string[] = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    newMessages = newMessages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let onlyShort: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return onlyShort.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allTrue: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue",
    );
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
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = addends.reduce(
        (currentTotal: number, num: number): number => currentTotal + num,
        0,
    );
    let equation: string = addends.join("+");
    return "" + sum + "=" + equation;
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
    let negativeIndex: number = values.findIndex(
        (num: number): boolean => num < 0,
    );
    console.log("index is " + negativeIndex);
    if (negativeIndex === -1) {
        negativeIndex = values.length;
    }
    let sum: number = values.reduce(
        (total: number, num: number, index: number) => {
            if (index < negativeIndex) {
                total += num;
            }
            return total;
        },
        0,
    );
    //let sum: number = values.reduce((total: number, num: number) => (total < negativeIndex) ? (total++): total+=0, 0);
    console.log("total is " + sum);
    let newNums: number[] = [...values];
    newNums.splice(negativeIndex + 1, 0, sum);
    return newNums;
}
