
//set up the window object
global.window = Object.create(window);
Object.defineProperty(window, 'location', {
    value: {
    href: ''
    }
})
let url = ''

function redirectToJobs(){
    url = "../JobSearch/jobsearchHr.html"
    window.location.href = url
}

function redirectToPost(){
    url = "../Myposition/MypositionHR.html"
    window.location.href = url
}

function redirectToProflie(){
    url = "../HRprofile/editprofileHR.html"
    window.location.href = url
}
describe('redirectToJobs',()=>{
    it("Should redirect to the job search page",()=>{
        redirectToJobs();
        expect(window.location.href).toEqual("../JobSearch/jobsearchHr.html");
    })
})
describe('redirectToPost',()=>{
    it("Should redirect to the positions page",()=>{
        redirectToPost();
        expect(window.location.href).toEqual("../Myposition/MypositionHR.html");
    })
})
describe('redirectToProflie',()=>{
    it("Should redirect to the profile page",()=>{
        redirectToProflie();
        expect(window.location.href).toEqual("../HRprofile/editprofileHR.html");
    })
})