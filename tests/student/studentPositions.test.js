let arr_students = [];
let data = [];
// Set up the DOM for testing
document.body.innerHTML = `
<div id="tasks"></div>
<input id="email_username" value="student@ac.sce.ac.il">
<input id="type" value="student_graduate">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="student">
<label class="warning" id="msg"></label>
`;
//Set up the input for testing
let tasks = document.getElementById("tasks");

// Set up the User for testing
let user = {
  username: document.querySelector("#email_username").value.toLowerCase(),
  full_name: document.querySelector("#full_name").value,
  password: document.querySelector("#Password").value,
  confirm_password: document.querySelector("#confirm_password").value,
  question: document.querySelector("#Safety_question").value.toLowerCase(),
  type: document.querySelector("#type").value,
};
job =  {
    text: 'text',
    date: '',
    description: 'this is a new job',
    email: 'student@ac.sce.ac.il',
    city: 'bash',
    filed: 'yes',
    emailC: 'hr@gmail.com'
  }

beforeEach(() => {
    arr_students = [user]//we're gonna use this as our students storage
    data = [job]//we're gonna use this as our job storage
    msg.innerHTML = "";
});

function createTasks() {
    let username = user.username;
    tasks.innerHTML = "";
    data.map((x)=>{
    if(x.email==username){
        return (tasks.innerHTML += `
        <div>
            <span class="small text-secondary">${x.email}</span>
            <span class="small text-secondary">${x.date}</span>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.city}</span>
            <span class="small text-secondary">${x.filed}</span>
            <p>${x.description}</p>
            <span class="small text-secondary">${x.emailC}</span>
            </div>`); 
    }
})
};

describe('createTasks',()=>{
    it("Should show the student's own jobs",()=>{
        //call the function
        createTasks();
        //This is the job details that should be shown on the screen
        expectedResult = `
        <div>
            <span class="small text-secondary">student@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text</span>
            <span class="small text-secondary">bash</span>
            <span class="small text-secondary">yes</span>
            <p>this is a new job</p>
            <span class="small text-secondary">hr@gmail.com</span>
            </div>`
        //Check that they're equal
        expect(tasks.innerHTML).toEqual(expectedResult);
    })
})