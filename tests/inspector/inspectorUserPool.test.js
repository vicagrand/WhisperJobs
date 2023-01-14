//set up our DOM
document.body.innerHTML = `<div id="tasks"></div>`

//set up our user database
let Students = [{full_name:'jacob' , username:'student1@ac.sce.ac.il'},{full_name:'jacoba' ,
 username:'student2@ac.sce.ac.il'},{full_name:'jacobit' , username:'student3@ac.sce.ac.il'}];
let HR = [{full_name:'jacobo' , username:'hr1@gmail.com'},{full_name:'jacoby' , username:'hr2@gmail.com'},{full_name:'jacobrico' , username:'hr3@gmail.com'}];

function userPool(){
  tasks.innerHTML = "";
  Students.map((x, y) => {
    if (x.full_name != "") {
      return (tasks.innerHTML += `
  <div id=${y}>
        <span class="small text-secondary" >${x.full_name}</span>
        <span class="small text-secondary" id=full>${x.username}</span>
        <span class="options">
        <i onClick ="ban_user(this);createTasks()" class="fa fa-trash-alt"></i>
    </span>
      </div>
  
  `);
    }
  })
  HR.map((x, y) => {
    if (x.full_name != "") {
      return (tasks.innerHTML += `
    <div id=${y}>
         <span class="small text-secondary" >${x.full_name}</span>
          <span class="small text-secondary" id=ema>${x.username}</span>
          <span class="options">
          <i onClick ="ban_userH(this);createTasks()" class="fa fa-trash-alt"></i>
      </span>
        </div>
    
    `);
    }
  })
};

describe("userPool",()=>{
    it("Should show all existing student and hr users",()=>{
        //activate the func
        userPool();
        //what should be shown on the screen
        expectedResult = `
  <div id=\"0\">
        <span class=\"small text-secondary\">jacob</span>
        <span class=\"small text-secondary\" id=\"full\">student1@ac.sce.ac.il</span>
        <span class=\"options\">
        <i onclick=\"ban_user(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
    </span>
      </div>
  
  
  <div id=\"1\">
        <span class=\"small text-secondary\">jacoba</span>
        <span class=\"small text-secondary\" id=\"full\">student2@ac.sce.ac.il</span>
        <span class=\"options\">
        <i onclick=\"ban_user(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
    </span>
      </div>
  
  
  <div id=\"2\">
        <span class=\"small text-secondary\">jacobit</span>
        <span class=\"small text-secondary\" id=\"full\">student3@ac.sce.ac.il</span>
        <span class=\"options\">
        <i onclick=\"ban_user(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
    </span>
      </div>
  
  
    <div id=\"0\">
         <span class=\"small text-secondary\">jacobo</span>
          <span class=\"small text-secondary\" id=\"ema\">hr1@gmail.com</span>
          <span class=\"options\">
          <i onclick=\"ban_userH(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
      </span>
        </div>
    
    
    <div id=\"1\">
         <span class=\"small text-secondary\">jacoby</span>
          <span class=\"small text-secondary\" id=\"ema\">hr2@gmail.com</span>
          <span class=\"options\">
          <i onclick=\"ban_userH(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
      </span>
        </div>
    
    
    <div id=\"2\">
         <span class=\"small text-secondary\">jacobrico</span>
          <span class=\"small text-secondary\" id=\"ema\">hr3@gmail.com</span>
          <span class=\"options\">
          <i onclick=\"ban_userH(this);createTasks()\" class=\"fa fa-trash-alt\"></i>
      </span>
        </div>
    
    `
        expect(tasks.innerHTML).toEqual(expectedResult);
    })
})