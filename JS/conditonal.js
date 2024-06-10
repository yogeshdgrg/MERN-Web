// let willRain = true
// let hasProbability = true

// if (willRain) {
//     console.log("Take Umbrella");
// }
// // else if (willRain || hasProbability) {
// //     console.log("You may need to take Umbrella");
// // }
// else if (hasProbability) {
//     console.log("You may need to take Umbrella");
// }
// else {
//     console.log("No need to take Umbrella");
// }



// let student1 = {
//     name: "ram",
//     gender: "male",
//     paidStatus: false,
// }
// let student2 = {
//     name: "sita",
//     gender: "female",
//     paidStatus: false,
// }
// let student3 = {
//     name: "gita",
//     gender: "female",
//     paidStatus: true,
// }

let students = [
    {
        name: "ram",
        gender: "male",
        paidStatus: false,
        hasScholarship: true,
        metAttandance: false
    },
    {
        name: "sita",
        gender: "female",
        paidStatus: false,
        hasScholarship: false,
        metAttandance: false
    },
    {
        name: "gita",
        gender: "female",
        paidStatus: true,
        hasScholarship: false,
        metAttandance: true
    }
]

// console.log(true?"Ok":"NotOk")

const checkAttempt = (student) => {
    console.log(student)
    const deg = student.gender === "male" ? "Mr. " : "Mrs." 
    console.log(deg)
    // console.log(student.paidStatus || student.hasScholarship && student.metAttandance);
    student.paidStatus || student.hasScholarship && student.metAttandance ? console.log(`${deg} ${student.name} can attend exam`) : console.log(`${deg} ${student.name} can't attend exam`);
}


for (let student of students) {
    checkAttempt(student)
}


// checkAttempt(student1);
// checkAttempt(student2);
// checkAttempt(student3);

// student1.paidStatus ? console.log(`${student1.name} can attend exam`):console.log(`${student1.name} can't attend exam`);
// student2.paidStatus ? console.log(`${student2.name} can attend exam`):console.log(`${student2.name} can't attend exam`);
// student3.paidStatus ? console.log(`${student3.name} can attend exam`):console.log(`${student3.name} can't attend exam`);

