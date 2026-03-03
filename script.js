document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Declare variables
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let queryType = document.getElementById("queryType").value.trim();
    let text = document.getElementById("validationTextarea").value.trim();
    let check = document.getElementById("invalidCheck").checked;
    let output = document.getElementById("formMessage");
    let checker = 0;

    //Check of input
    if (name == "" || email == "" || phone == "" || queryType == "" || text == "" || check == "") {
        output.innerHTML = "<div class='alert'>PLease fill in all required fields</div>"
    }else if (text.length <= 10) {
        output.innerHTML = "<div class='alert'>Your message is too short. Please enter more than 10 characters.</div>"
    }else if (!email.includes("@") || !email.includes(".")) {
        output.innerHTML = "<div class='alert'>Please enter a valide email</div>"
    }else if (phone.length > 15 || phone.length < 10 || phone[0] != "+" || !/^[+\d\s\-\(\)\.]+$/.test(phone)) {
        output.innerHTML = "<div class='alert'>Please enter a valide phone number</div>"
    }else {
        output.innerHTML = "<div class='alert'>Thank you, your form was successfuly submitted</div>"
        document.getElementById("contactForm").reset();
    }
})

/* Sources of information that I used:
https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
https://www.reddit.com/r/europe/comments/f37r70/phone_number_formats_within_europe/?tl=ru
https://getbootstrap.com/docs/4.0/components/card/
*/
