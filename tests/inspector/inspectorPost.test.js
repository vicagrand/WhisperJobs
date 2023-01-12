let arr_inspector = [];
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
<input id="email_username" value="inspector@ac.sce.ac.il">
<input id="type" value="inspector">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="inspector">
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
  arr_inspector = [user]//we're gonna use this as our inspectors storage
  msg.innerHTML = "";
});

function formValidation() {
    if (textInput.value == "") {
        msg.innerHTML = "Should be filled";
    } else {
        msg.innerHTML = "";
    }
};

let data = [];//this will be our job storage

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

describe('formValidation',()=>{
    it('should check that the form was filled',()=>{
        //call the function
        formValidation();
        //empty text therefore we should get this message
        expect(msg.innerHTML).toBe('Should be filled')
        textInput.value = 'input';
        //call the function
        formValidation();
        //non empty text therefore we shouldn't get a message
        expect(msg.innerHTML).toBe('')
})
})
describe('acceptData',()=>{
    it('Should update our storage with a new position details',()=>{
        //Set up empty data
        data = []
        //Set up position
        textInput.value = 'text'
        dateInput.value ='2023-1-1'
        textarea.value = 'this is a new job'
        EmailInput.value = arr_inspector[0].username;
        cityInput.value = 'bash'
        filedlInput.value = 'yes'
        emailCInput.value = 'hr@gmail.com'
        //call the function
        acceptData();
        //Check that data is not empty
        expect(data).not.toBe([]);
        expect(data[0].description).toBe('this is a new job')
    })
});