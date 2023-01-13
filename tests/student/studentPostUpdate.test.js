let arr_students = [];
// Set up the DOM for testing
document.body.innerHTML = `
<form class="modal fade" id="form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add new Position</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>title</p>
        <input class="form-control" type="text" value="" id="textInput">
        <div id="msg"></div>
        <br>
        <p>Your Email</p>
        <input class="form-control" type="email" value="" id="EmailInput">
        <br>
        <p>Company Email</p>
        <input class="form-control" type="emailC" value="" id="EmailCInput">
        <br>
        <p>City</p>
        <input class="form-control" type="city" value="" id="CityInput">
        <br>
        <p>Filed</p>
        <input class="form-control" type="filed" value="" id="FiledInput">
        <br>
        <p>Date of publish</p>
        <input class="form-control" type="date" value="" id="dateInput">
        <br>
        <p>Description </p>
        <textarea class="form-control" value="" id="textarea" cols="30" rows="5"></textarea>
        <br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" id="add" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</form>
<input id="email_username" value="student@ac.sce.ac.il">
<input id="type" value="student_graduate">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="student">
<label class="warning" id="msg"></label>
`;
//Set up the input for testing
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let EmailInput = document.getElementById("EmailInput");
let cityInput = document.getElementById("CityInput");
let filedlInput = document.getElementById("FiledInput");
let emailCInput = document.getElementById("EmailCInput");
//Set up job for testing
job =  {
    id:0,
    text: 'text',
    date: '',
    description: 'this is a new job',
    email: 'student@ac.sce.ac.il',
    city: 'bash',
    filed: 'yes',
    emailC: 'hr@gmail.com'
  }

// Set up the User for testing
let user = {
  username: document.querySelector("#email_username").value.toLowerCase(),
  full_name: document.querySelector("#full_name").value,
  password: document.querySelector("#Password").value,
  confirm_password: document.querySelector("#confirm_password").value,
  question: document.querySelector("#Safety_question").value.toLowerCase(),
  type: document.querySelector("#type").value,
};
beforeEach(() => {
  arr_students = [user]//we're gonna use this as our students storage
  msg.innerHTML = "";
  data = [job];//we're gonna use this as our jobs storage
});


function deleteTask (task){
    data.splice(task.id, 1);
};

function editTask (task) {
    textInput.value = task.text;
    cityInput.value = task.city;
    filedlInput.value = task.filed;
    emailCInput.value = task.emailC;
    dateInput.value = task.date;
    textarea.value = task.description;
    EmailInput.value = task.email;
    data.splice(task.id,1);
    
    acceptData();
};
function acceptData(){
    data.push({
     text:textInput.value,
     date:dateInput.value,
     description:textarea.value,
     email:EmailInput.value,
     city:cityInput.value,
     filed:filedlInput.value,
     emailC:emailCInput.value,
    });
};
describe('editTask',()=>{
    it("Should edit the job in storage",()=>{
        newJob =  {
            id:0,
            text: 'blabla',
            date: '',
            description: 'this is a new new job',
            email: 'student@ac.sce.ac.il',
            city: 'bash city',
            filed: 'yess',
            emailC: 'hr@gmail.com'
          }
          //call the function with the "edited" job
        editTask(newJob);
        //We should see the changes in the job storage
        expect(data[0].city).not.toBe('bash');
        expect(data[0].description).toBe('this is a new new job')
    })
})

describe('deleteTask',()=>{
    it("Should delete the job from storage",()=>{
        newJob =  {
            id:0,
            text: 'blabla',
            date: '',
            description: 'this is a new new job',
            email: 'student@ac.sce.ac.il',
            city: 'bash city',
            filed: 'yess',
            emailC: 'hr@gmail.com'
          }
          //call the function with the "edited" job
        deleteTask(newJob);
        //We should see the changes in the job storage
        expect(data).toEqual([]);
    })
})