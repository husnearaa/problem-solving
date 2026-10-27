
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













