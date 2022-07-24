function agecalculater() {

    let userInput = document.getElementById('datetime').value;
    let todayDate = new Date();
    let userAge = new Date(userInput);
    let year = todayDate.getFullYear() - userAge.getFullYear();
    let month = (todayDate.getMonth() + 1) - (userAge.getMonth() + 1);
    let day = todayDate.getDate() - userAge.getDate();
    let age = todayDate.getTime() - userAge.getTime();

    age = Math.floor(age / (1000 * 60 * 60 * 24 * 365));

    if (year === 0 && month === 0 && day === 0) {
        alert("today is your birthday");

    }
    else if (userAge.getTime() > todayDate.getTime()) {
        alert("you are not born yet");
        return false
    }

    let nextbirthday = new Date(todayDate.getFullYear() + 1, userAge.getMonth(), userAge.getDate());
    let diff = nextbirthday.getTime() - todayDate.getTime();

    diff = Math.floor(diff / (1000 * 60 * 60 * 24));

    let days = diff;
    nextbirthday = nextbirthday.toString();

    let dayName = nextbirthday.slice(0, 3);
    nextbirthday = nextbirthday.slice(4, 15);

    if (year === 0) {
        if (month > 0) {
            document.getElementById('completeAge').innerHTML = month + " months " + day + " days old"
        }
        else if (month === 0) {
            document.getElementById('completeAge').innerHTML = day + " days old"
        }
    }
    else {
        document.getElementById('completeAge').innerHTML = year + " years " + month + " months " + day + " days old";
        document.getElementById('age').innerHTML = age + " years";
        document.getElementById('age').style.display = "block";
        document.getElementById('agee').style.display = "block";
    }
    document.getElementById('nextbirthday').innerHTML = dayName + ", " + nextbirthday;
    document.getElementById('Dayleft').innerHTML = days;
    document.getElementById('divForm').style.display = "block";

}
