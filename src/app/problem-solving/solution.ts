
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





/* Problem 11: Richest Customer Wealth */

function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for (const account of accounts) {
        let total = 0;

        for (const money of account) {
            total += money;
        }

        if (total > maxWealth) {
            maxWealth = total;
        }
    }

    return maxWealth;
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));






/* Problem 12: Remove Duplicates from Sorted Array */

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));
console.log(JSON.stringify(nums1.slice(0, 2)));

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));
console.log(JSON.stringify(nums2.slice(0, 5)));






/* Problem 13: Contains Duplicate */

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));





/* Problem 14: Move Zeroes */

function moveZeroes(nums: number[]): void {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    while (k < nums.length) {
        nums[k] = 0;
        k++;
    }
}

const moveZeroesTest1 = [0, 1, 0, 3, 12];
moveZeroes(moveZeroesTest1);
console.log(JSON.stringify(moveZeroesTest1));

const moveZeroesTest2 = [0, 0, 1];
moveZeroes(moveZeroesTest2);
console.log(JSON.stringify(moveZeroesTest2));

const moveZeroesTest3 = [1, 2, 3];
moveZeroes(moveZeroesTest3);
console.log(JSON.stringify(moveZeroesTest3));






/* Problem 15: Merge Sorted Array */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
}

const mergeTest1 = [1, 2, 3, 0, 0, 0];
merge(mergeTest1, 3, [2, 5, 6], 3);
console.log(JSON.stringify(mergeTest1));

const mergeTest2 = [1];
merge(mergeTest2, 1, [], 0);
console.log(JSON.stringify(mergeTest2));

const mergeTest3 = [0];
merge(mergeTest3, 0, [1], 1);
console.log(JSON.stringify(mergeTest3));






/* Problem 16: 3Sum */

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
console.log(JSON.stringify(threeSum([0, 1, 1])));
console.log(JSON.stringify(threeSum([0, 0, 0])));




/* Problem 17: Plus One */

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
}

console.log(JSON.stringify(plusOne([1, 2, 9])));
console.log(JSON.stringify(plusOne([4, 3, 2, 1])));
console.log(JSON.stringify(plusOne([9, 9, 9])));





/* Problem 18: Reverse String */

function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}

const reverseStringTest1 = ["h", "e", "l", "l", "o"];
reverseString(reverseStringTest1);
console.log(JSON.stringify(reverseStringTest1));

const reverseStringTest2 = ["H", "a", "n", "n", "a", "h"];
reverseString(reverseStringTest2);
console.log(JSON.stringify(reverseStringTest2));






/* Problem 19: Length of Last Word */

function lengthOfLastWord(s: string): number {
    const words = s.trim().split(" ");
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));




/* Problem 20: Longest Common Prefix */

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

console.log(JSON.stringify(longestCommonPrefix(["flower", "flow", "flight"])));
console.log(JSON.stringify(longestCommonPrefix(["dog", "racecar", "car"])));
console.log(JSON.stringify(longestCommonPrefix(["interspecies", "interstellar", "interstate"])));