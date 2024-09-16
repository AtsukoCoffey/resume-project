function sendMail(contactForm) {
    emailjs.send("service_p2v48q8","template_k1dd5d7", {
        project_request: contactForm.projectsummary.value,
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;   //This is to prevent from refreshing when you submit your form. 
}