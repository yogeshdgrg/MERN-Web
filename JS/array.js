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


let course = "course"
let obj = {
    name:"hari",
    age:20,
    address:"Tokha",
    status:"Single"
}

obj = {...obj,age:56,[course]:"BSc.Csit"} //! Update the value of age 
console.log(obj)
