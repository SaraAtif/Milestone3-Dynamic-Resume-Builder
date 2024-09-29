const form = document.getElementById('form') as HTMLFormElement;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('Education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;


        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>

        <h3>Education:</h3>
        <p>${education}</p>

        <h3>Work Experience:</h3>
        <p>${experience}</p>

        <h3>Skills:</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('display-resume') as HTMLDivElement;
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});


