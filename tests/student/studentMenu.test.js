
//set up the window object
global.window = Object.create(window);
Object.defineProperty(window, 'location', {
    value: {
    href: ''
    }
})
let url = ''

function redirectToJobs(){
    url = "../JobSearch/Jobsearch.html"
    window.location.href = url
}

function redirectToPost(){
    url = "../Myposition/Myposition.html"
    window.location.href = url
}

function redirectToProflie(){
    url = "../editprofile/editprofile.html"
    window.location.href = url
}
describe('redirectToJobs',()=>{
    it("Should redirect to the job search page",()=>{
        redirectToJobs();
        expect(window.location.href).toEqual("../JobSearch/Jobsearch.html");
    })
})
describe('redirectToPost',()=>{
    it("Should redirect to the positions page",()=>{
        redirectToPost();
        expect(window.location.href).toEqual("../Myposition/Myposition.html");
    })
})
describe('redirectToProflie',()=>{
    it("Should redirect to the profile page",()=>{
        redirectToProflie();
        expect(window.location.href).toEqual("../editprofile/editprofile.html");
    })
})