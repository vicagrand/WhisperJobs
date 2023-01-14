
//set up the window object
global.window = Object.create(window);
Object.defineProperty(window, 'location', {
    value: {
    href: ''
    }
})
let url = ''

function redirectToJobs(){
    url = "../JobSearch/jobsAdmin.html"
    window.location.href = url
}

function redirectToPost(){
    url = "../Myposition/MypositionsAdmin.html"
    window.location.href = url
}

function redirectToProflie(){
    url = "../profilepadeAdmin/profilepage.html.html"
    window.location.href = url
}
function redirectToUsers(){
    url = "../user_pool/user_pool.html"
    window.location.href = url
}

describe('redirectToJobs',()=>{
    it("Should redirect to the job search page",()=>{
        redirectToJobs();
        expect(window.location.href).toEqual("../JobSearch/jobsAdmin.html");
    })
})
describe('redirectToPost',()=>{
    it("Should redirect to the positions page",()=>{
        redirectToPost();
        expect(window.location.href).toEqual("../Myposition/MypositionsAdmin.html");
    })
})
describe('redirectToProflie',()=>{
    it("Should redirect to the profile page",()=>{
        redirectToProflie();
        expect(window.location.href).toEqual("../profilepadeAdmin/profilepage.html.html");
    })
})

describe('redirectToUsers',()=>{
    it("Should redirect to the user pool page",()=>{
        redirectToUsers();
        expect(window.location.href).toEqual("../user_pool/user_pool.html");
    })
})