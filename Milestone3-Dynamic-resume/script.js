/*const form = document.getElementById('form') as HTMLFormElement;
const displayResume =document.getElementById('display-resume') as HTMLDivElement;
const resumeName =document.getElementById('resumeName') as HTMLParagraphElement;
const resumePhone =document.getElementById('resumePhone') as HTMLParagraphElement;
const resumeEmail =document.getElementById('resumeEmail') as HTMLParagraphElement;
const resumeEducation =document.getElementById('resumeEducation') as HTMLParagraphElement;
const resumeExperience =document.getElementById('resumeExperience') as HTMLParagraphElement;
const resumeSkills =document.getElementById('resumeSkills') as HTMLParagraphElement;



form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

    const name =(document.getElementById('name') as HTMLInputElement).value;
    const phone =(document.getElementById('phone') as HTMLInputElement).value;
    const email =(document.getElementById('email') as HTMLInputElement).value;
    const education =(document.getElementById('Education') as HTMLInputElement).value;
    const experience =(document.getElementById('experience') as HTMLInputElement).value;
    const skills =(document.getElementById('skills') as HTMLInputElement).value;

    const resumeHtml =
    '<h2><b>Resume</b></h2>
        <h3>Personal Information:</h3>
        <p ></p>
        <p id="resumePhone"></p>
        <p id="resumeEmail"></p>
        
        <h3>Education:</h3>
        <p id="resumeEducation"></p>
        
        <h3>Work Experience:</h3>
        <p id="resumeExperience"></p>
        
        <h3>Skills:</h3>
        <p id="resumeSkills"></p>'

})*/
var form = document.getElementById('form');
var displayResume = document.getElementById('display-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their IDs
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('Education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        <h3>Personal Information:</h3>\n        <p><strong>Name:</strong> ".concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience:</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('display-resume');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
