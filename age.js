function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();

    var ageInMilliseconds = today - birthdate;

    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById("result").innerHTML = "Age: " + years + " years, " + months + " months, " + days + " days";

// Check if it's the user's birthday
    if (birthdate.getDate() === today.getDate() && birthdate.getMonth() === today.getMonth()) {
        var popup = window.open("", "_blank", "width=500,height=300,top=280,left=500");
        var birthdayMsg = "Great, Today is your birthday.<br>Best wishes for your birthday!";
        popup.document.write("<html><head><title>Happy Birthday!</title></head><body><h1>" + birthdayMsg + "</h1></body></html>");
    }
}
