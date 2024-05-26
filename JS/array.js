// let colors = ["red", "yellow", "blue"]
// colors.push("golden")
// console.log(colors.indexOf("blue"));
// console.log(colors);


let users = [{
    userName: "Hello Nepal",
    userAge: "20",
    userAddr: "Tokha",
    userPh: "984567"
},
{
    userName: "Hello",
    userAge: "30",
    userAddr: "Tokha-7",
    userPh: "98456789"
},
{
    userName: "He",
    userAge: "18",
    userAddr: "Tokha-9",
    userPh: "98456767"
}]

// console.log(users)


// console.log(users);


// One Way to do this

// for(let item of users){
//     if(item.userName ==="He"){
//         item.userName = "Hello MindRisers";
//     }
// }


// ?Another way to do this..
// let index = users.findIndex((obj)=>{ return obj.userName === "He"});
// console.log(index)
// users[index].userName="Yogesh Gurung"




//? Another way to do this

// users = users.map((item) => { return item.userName === "Hello Nepal" ? { ...item, userName: "Hello MindRisers" } : item })
// console.log(users);


// let course = "course"
// let obj = {
//     name: "hari",
//     age: -20,
//     address: "Tokha",
//     status: "Single"
// }

// obj.age=Math.abs(obj.age);
// console.log(obj);

// obj = { ...obj, age: 56, [course]: "BSc.Csit" } //! Update the value of age 
// console.log(obj)


//? Creating the nested object 

let user1 = {
    name: "Sajan Chhetri",
    age: 18,
    address: {
        permanentAddress: {
            province: "Bagmati",
            district: "Chitwan",
            municipality: "Unknown",
            ward: 0,
            tole: "Gorkhali Tole, Baseni"
        },
        temporaryAddress: {
            province: "Gandaki",
            district: "Gorkha",
            municipality: "Siranchowk",
            ward: 5,
            tole: "TalloPam"
        }
    },
    status: "Single"
}

user1.address.permanentAddress.municipality = "Bharatpur";
// let permanentAddr = {...user1.address.permanentAddress,["House No"]:123}
// console.log(permanentAddr)
user1.address.permanentAddress = { ...user1.address.permanentAddress, ["House No"]: 123 }
console.log(user1.address.permanentAddress)
console.log(user1)


// user1.address.permanentAddress.ward=11;


// let users3 =[
//     {name:"ram",age:34},
//     {name:"gita",age:45},
//     {name:"hari",age:76},
//     {name:"jiten",age:34},
// ]


// let students =["ram","hari"];

// students["hari"]={
//     age:23,
//     address:"Tokha"
// }
// students["ram"]={
//     age:32,
//     address:"Tokha1"
// }

// console.log(students);
// console.log(students.hari.address);
// console.log(student["ram"])



//! Creating the an array of object of the name courses

let books = [
    { name: "Science", page: "222", price: 2300 },
    { name: "Neplai", page: "122", price: 232 },
    { name: "Social", page: "22", price: 200 },
    { name: "Math", page: "222", price: 2300 },
    { name: "Physics", page: "222", price: 2300 },
]



let classes = [
    {
        class: "one",
        sections: [
            {
                roomNo: "1A",
                section: "A",
                totalStudents: 34,
                classTeacher: {
                    name: "Ram",
                    age: 34,
                    gender: "M",
                    address:{
                        permanentAddr:{
                            province:"Gandaki",
                            district:"Gorkha",
                            municipality:"Gorkha Municipality",
                            wardNo:3
                        },
                        temporaryAddr:{
                            province:"Bagmati",
                            district:"Kathmandu",
                            municipality:"Tokha",
                            wardNo:7
                        }
                    }
                }
            },
            {
                roomNo: "1B",
                section: "B",
                totalStudents: 24,
                classTeacher: {
                    name: "Gita",
                    age: 31,
                    gender: "F",
                    address:{
                        permanentAddr:{
                            province:"Gandaki",
                            district:"Lamjung",
                            municipality:"Dudhpokhari",
                            wardNo:3
                        },
                        temporaryAddr:{
                            province:"Bagmati",
                            district:"lalitpur",
                            municipality:"laltipur Municiipality",
                            wardNo:3
                        }
                    }
                }
            },
        ]
    },
    {
        class: "two",
        sections: [
            {
                roomNo: "2A",
                section: "A",
                totalStudents: 34,
                classTeacher: {
                    name: "Hari",
                    age: 24,
                    gender: "M"
                },
                address:{
                    permanentAddr:{
                        province:"Gandaki",
                        district:"Lamjung",
                        municipality:"Besisahar",
                        wardNo:3
                    },
                    temporaryAddr:{
                        province:"Bagmati",
                        district:"Chitwan",
                        municipality:"Bharatpur Municiipality",
                        wardNo:3
                    }
                }
            },
            {
                roomNo: "1B",
                section: "B",
                totalStudents: 24,
                classTeacher: {
                    name: "Sita",
                    age: 28,
                    gender: "F",
                    address:{
                        permanentAddr:{
                            province:"Gandaki",
                            district:"Lamjung",
                            municipality:"Dudhpokhari",
                            wardNo:3
                        },
                        temporaryAddr:{
                            province:"Bagmati",
                            district:"lalitpur",
                            municipality:"laltipur Municiipality",
                            wardNo:3
                        }
                    }
                }
            },
        ]
    },
]


