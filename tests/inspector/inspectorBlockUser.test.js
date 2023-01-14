//set up our DOM
document.body.innerHTML = `<div id="tasks"></div>`

//set up our user database
let user1 = {full_name:'jacob' , username:'student1@ac.sce.ac.il', password:'12345Aa!'}
let user2 = {full_name:'jacoba' ,username:'student2@ac.sce.ac.il', password:'12345Aa!'}
let user3 = {full_name:'jacobit' , username:'student3@ac.sce.ac.il', password:'12345Aa!'}
let arr_students = [user1,user2,user3];

let user4 = {company:'jacobo' , emailC:'hr1@gmail.com', password:'12345Aa!'}
let user5 = {company:'jacoby' ,emailC:'hr2@gmail.com', password:'12345Aa!'}
let user6 = {company:'jacobrico' , emailC:'hr3@gmail.com', password:'12345Aa!'}
let arr_hr = [user4,user5,user6];

function ban_userS(email) {
    let username = email;
    let obj = {
      username: username,
      full_name: '',
      password: '',
    };
    for (let key in arr_students) {
      if (arr_students[key].username == username) {
        arr_students.splice(key, 1);
        arr_students.push(obj);
      }
    }
}
  
function ban_userH(email) {
    let username = email
    let obj = {
        company: "",
        emailC: username,
        password: "",
    };
for (let key in arr_hr) {
    if (arr_hr[key].emailC == username) {
        arr_hr.splice(key, 1);
        arr_hr.push(obj);
    }
}
}

describe("ban_userS",()=>{
    it("Should ban a student with the matching username",()=>{
        //ban the user with the requested email (user3)
        let email = "student3@ac.sce.ac.il"
        //call the function
        ban_userS(email);
        //the students storage should contain user1,user2 and the banned user which has an empty password
        expect(arr_students).toEqual([user1,user2,{full_name: "", password: "", username:user3.username}]);
    })
})

describe("ban_userH",()=>{
    it("Should ban a hr with the matching username",()=>{
        //ban the user with the requested email (user3)
        let email = "hr3@gmail.com"
        //call the function
        ban_userH(email);
        //the hr storage should contain user4,user5 and the banned user which has an empty password
        expect(arr_hr).toEqual([user4,user5,{company: "", password: "", emailC:user6.emailC}]);
    })
})

  