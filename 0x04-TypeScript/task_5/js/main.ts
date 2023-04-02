interface MajorCredits {
    credits: number;
    brand: void 
}

interface MinorCredits {
    credits: number
    brand: void
}

function sumMajorCredits (subject1: MajorCredits , subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits
    } as MajorCredits
}

function sumMinorCredits (subject1: MinorCredits ,subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits
    } as MinorCredits;
}

const subject1: MajorCredits = {
    credits: 10,
    brand: null
}

const subject2: MajorCredits = {
    credits: 24,
    brand: null
}

console.log(sumMajorCredits(subject1, subject2)); //34 