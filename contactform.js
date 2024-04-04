var zf_DateRegex = new RegExp("^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$");
var zf_MandArray = ["Name_First", "Name_Last", "Email", "MultiLine"];
var zf_FieldArray = ["Name_First", "Name_Last", "Email", "MultiLine"];
var isSalesIQIntegrationEnabled = false;
var salesIQFieldsArray = [];

document.getElementById("form").reset();
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Get the form data
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    
    if (name.value.length <= 2 || email.value.length <= 6 || message.value.length <= 2) {
        alert("All fields must be filled out");
        return false;
    } else if (!email.value.includes('.')) {
        alert("Please enter a valid email address");
        return false;
    }
    // Send the form data to the server using the Fetch API
    fetch('https://forms.zohopublic.in/fluxsparkapp/form/ContactUs/formperma/lMxP_th1JYWNcOJUlcrtttzQhG0FORCBF93abHPRtWI/htmlRecords/submit', {
        mode: 'no-cors',
        method: 'POST',
        body: formData
    })
        //.then(response => response.json())
        .then(data => {
            window.location.href = "./formresponse.html"; // Redirect to Google
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});