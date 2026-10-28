
/* Problem 1: Staircase */

function staircase(n: number): string {
    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);

        result.push(spaces + hashes);
    }

    return result.join("\n");
}

console.log(staircase(1));






/* Problem 2: Grading Students */

function gradingStudents(grades: number[]): number[] {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }

        return grade;
    });
}

console.log(gradingStudents([73, 67, 38, 33]));








/* Problem 3: Time Conversion */

function timeConversion(s: string): string {
    let hours = s.substring(0, 2);
    const minutes = s.substring(3, 5);
    const seconds = s.substring(6, 8);
    const period = s.substring(8, 10);

    if (period === "AM" && hours === "12") {
        hours = "00";
    } else if (period === "PM" && hours !== "12") {
        hours = String(Number(hours) + 12);
    }

    return hours + ":" + minutes + ":" + seconds;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:30:45PM"));




/* Problem 4: String Repeat */

function repeatStr(n: number, s: string): string {
    return s.repeat(n);
}

console.log(JSON.stringify(repeatStr(3, "ha")));
console.log(JSON.stringify(repeatStr(0, "hello")));
console.log(JSON.stringify(repeatStr(4, "a")));




/* Problem 5: Reversed Strings */

function solution(str: string): string {
    return str.split("").reverse().join("");
}

console.log(JSON.stringify(solution("world")));
console.log(JSON.stringify(solution("hello")));
console.log(JSON.stringify(solution("")));





/* Problem 6: Sum of Positive */

function positiveSum(arr: number[]): number {
    let sum = 0;

    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }

    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));






/* Problem 7: Grasshopper — Summation */

function summation(num: number): number {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(summation(8));
console.log(summation(1));






/* Problem 8: Convert a Boolean to a String */

function booleanToString(b: boolean): string {
    return b.toString();
}

console.log(JSON.stringify(booleanToString(true)));
console.log(JSON.stringify(booleanToString(false)));





/* Problem 9: Fizz Buzz */

function fizzBuzz(n: number): string[] {
    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}

console.log(JSON.stringify(fizzBuzz(5)));
console.log(JSON.stringify(fizzBuzz(15)));






/* Problem 10: Running Sum of 1D Array */

function runningSum(nums: number[]): number[] {
    const result: number[] = [];
    let sum = 0;

    for (const num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
}

console.log(JSON.stringify(runningSum([1, 2, 3, 4])));
console.log(JSON.stringify(runningSum([1, 1, 1, 1, 1])));













