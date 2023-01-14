let arr_inspector = [];
let data = [];
// Set up the DOM for testing
document.body.innerHTML = `
<div class="form-group"> <input type="text" class="form-control" placeholder="Filed/Location/Title" required="required" id="search_btn"></div>
<div id="tasks"></div>
<input id="email_username" value="inspector@ac.sce.ac.il">
<input id="type" value="inspector">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="inspector">
<label class="warning" id="msg"></label>
`;
//Set up the input for testing
let tasks = document.getElementById("tasks");
let search_btn = document.getElementById("search_btn");

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
    email: 'inspector@ac.sce.ac.il',
    city: 'bash',
    filed: 'yes',
    emailC: 'hr@gmail.com'
  }
  job2 = {
    text: 'text2',
    date: '',
    description: 'this is a different job',
    email: 'inspector5@ac.sce.ac.il',
    city: 'merkaz',
    filed: 'yes',
    emailC: 'hr2company@gmail.com'
  }

beforeEach(() => {
arr_students = [user]//we're gonna use this as our students storage
});

let createTasks = () =>{
    tasks.innerHTML = "";
    data.map((x)=>{
return (tasks.innerHTML = `
    <div>
        <span class="small text-secondary">${x.email}</span>
        <span class="small text-secondary">${x.date}</span>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.city}</span>
        <span class="small text-secondary">${x.filed}</span>
        <p>${x.description}</p>
        <span class="small text-secondary">${x.emailC}</span>
        </div>`);
})
};
function search(){ 
    let search = search_btn.value;
    tasks.innerHTML = " ";
    data.map((x)=>{
    if(x.city==search||x.filed==search||x.text==search ){
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
//set up job storage
data = [job]

describe('createTasks',()=>{
    it("Should show all jobs",()=>{
        //call the function
        createTasks();
        //This is the job details that should be shown on the screen
        expectedResult = `
    <div>
        <span class="small text-secondary">inspector@ac.sce.ac.il</span>
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
});


    
describe("search",()=>{
    it("Should show all the jobs that match the city that was sent",()=>{
        //add the second job to the list of jobs as set up
        data= [job,job2]
        //with user input
        search_btn.value = 'bash';
        //call the function
        search();
        //This is the job details that should be shown on the screen
        expectedResult = ` 
        <div>
            <span class="small text-secondary">inspector@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text</span>
            <span class="small text-secondary">bash</span>
            <span class="small text-secondary">yes</span>
            <p>this is a new job</p>
            <span class="small text-secondary">hr@gmail.com</span>
            </div>`
        expect(tasks.innerHTML).toEqual(expectedResult)

        //with user input
        search_btn.value = 'merkaz';
        //call the function
        search();
        //This is the job details that should be shown on the screen
        expectedResult = ` 
        <div>
            <span class="small text-secondary">inspector5@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text2</span>
            <span class="small text-secondary">merkaz</span>
            <span class="small text-secondary">yes</span>
            <p>this is a different job</p>
            <span class="small text-secondary">hr2company@gmail.com</span>
            </div>`
        expect(tasks.innerHTML).toEqual(expectedResult)
    })

    it("Should show all the jobs that match the filed that was sent",()=>{
        //with user input
        search_btn.value = 'yes';
        //call the function
        search();
        //This is the job details that should be shown on the screen(should be two jobs)
        expectedResult = ` 
        <div>
            <span class="small text-secondary">inspector@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text</span>
            <span class="small text-secondary">bash</span>
            <span class="small text-secondary">yes</span>
            <p>this is a new job</p>
            <span class="small text-secondary">hr@gmail.com</span>
            </div>
        <div>
            <span class="small text-secondary">inspector5@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text2</span>
            <span class="small text-secondary">merkaz</span>
            <span class="small text-secondary">yes</span>
            <p>this is a different job</p>
            <span class="small text-secondary">hr2company@gmail.com</span>
            </div>`
        
        //we expect it to be two jobs! because both have 'yes' in their filed
        expect(tasks.innerHTML).toEqual(expectedResult)
    })
    it("Should show all the jobs that match the text that was sent",()=>{
        //with user input
        search_btn.value = 'text';
        //call the function
        search();
        //This is the job details that should be shown on the screen(should be two jobs)
        expectedResult = ` 
        <div>
            <span class="small text-secondary">inspector@ac.sce.ac.il</span>
            <span class="small text-secondary"></span>
            <span class="fw-bold">text</span>
            <span class="small text-secondary">bash</span>
            <span class="small text-secondary">yes</span>
            <p>this is a new job</p>
            <span class="small text-secondary">hr@gmail.com</span>
            </div>`
        
        
        expect(tasks.innerHTML).toEqual(expectedResult)
    })
    it("it shouldn't show any job because none match the input",()=>{
        //with user input
        search_btn.value = 'wrong input';
        //call the function
        search();
        //expect to be empty
        expect(tasks.innerHTML).toEqual(" ")
    })
});