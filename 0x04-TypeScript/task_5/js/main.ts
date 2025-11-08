// 11. Brand convention & Nominal typing

// Interfaces
export interface MajorCredits {
    credits: number;
    brand: 'Major';
}

export interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

// Function to sum Major Credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major'
    };
}

// Function to sum Minor Credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor'
    };
}

// Example
const major1: MajorCredits = { credits: 4, brand: "Major" };
const major2: MajorCredits = { credits: 4, brand: "Major" };
const minor1: MinorCredits = { credits: 2, brand: "Minor" };
const minor2: MinorCredits = { credits: 2, brand: "Minor" };

console.log("Total Major Credits:", sumMajorCredits(major1, major2));
console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2));


// NB: 'export' modules for testing in an external 