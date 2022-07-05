//Task 1
function task1() {
    document.write(new Date());
}

//Task 2
function task2() {
    var month = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var b = new Date().getMonth();
    var c = month[b];
    alert("Current Month is " + c);
}

//Task 3
function task3() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var a = new Date().getDay();
    var b = days[a];
    alert("Today is " + b);
}

//Task 4
function task4() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var a = new Date().getDay();
    var b = days[a];

    if (b === "Sun" || b === "Sat") {
        alert("It's Funday");
    } else {
        alert("It's Not a Funday");
    }
}

//Task 5
function task5() {
    var a = new Date().getDate();
    if (a <= 15) {
        document.write("First fifteen days of the month");
    } else {
        document.write("Last fifteen days of month");
    }
}

//Task 6
function task6() {
    var a = new Date();
    document.write("Current Date : " + a + "</br>");
    var b = new Date().getTime();
    document.write("Elapsed milliseconds since January 1, 1970 : " + b + "</br>");
    document.write("Elapsed Minutes since January 1, 1970 : " + Math.floor(b / (1000 * 60 * 60)));
}

// Task 7
function task7() {
    var a = new Date().getHours()
    if (a < 12) {
        alert("It's AM")
    } else {
        alert("It's PM")
    }
}

// Task 8
function task8() {
    var laterDate = new Date("31 Dec, 2022")
    var format = laterDate.toUTCString()
    document.write("Later Date : " + format)
}

//Task 9
function task9() {
    var a = new Date("18 June, 2015")
    var msday = a.getTime()
    var b = new Date().getTime()
    var diff = b - msday
    var diff2 = (Math.floor(diff / (1000 * 60 * 60 * 24)))
    alert(diff2 + " days have passed since 1st Ramadan, 2015 ")
}

function task10() {
    var a = new Date("05 Dec, 2015")
    var b = a.toUTCString()
    document.write("On refrence date " + b + "," + "</br>")
    var mspre = a.getTime()
    var c = new Date().getTime()
    var diff = c - mspre
    var diff2 = Math.floor(diff / (1000 * 60))
    document.write(diff2 + " seconds had passed since begining of 2015")
}

function task11() {
    var date = new Date()
    document.write("Current Date : " + date + "</br>")
    date.setHours(date.getHours() - 1)
    document.write("1 Hour ago , it was " + date)
}

function task12() {
    var date = new Date()
    document.write("Current Date : " + date + "</br>")
    date.setFullYear(date.getFullYear() - 100)
    document.write("100 years ago , it was " + date)

}

function task13() {
    var a = +prompt("Please Enter your Age")
    var b = new Date().getFullYear()
    var diff = b - a
    alert("Your Age is " + a + "\nYour Birth Year is " + diff)
}

function task14() {
    var name = prompt("Please Enter Your Name")
    var month = ["January", "February", "March", "April", "May", "June", "July", "August"]
    var monthValue = new Date().getMonth();
    var monthArray = month[monthValue];
    var Units = 450;
    var perUnitCharge = 18.46;
    var latePayment = 400;
    var netAmount = (Units * perUnitCharge)
    var afterDueDate = (netAmount + latePayment).toFixed(2)

    console.log(afterDueDate)

    document.write("<h2>" + "K-Electric Bill" + "</h2>" + "</br>" + "</br>")
    document.write("Customer Name : " + "<b>" + name + "</b>" + "</br>")
    document.write("Month : " + "<b>" + monthArray + "</b>" + "</br>")
    document.write("Number of Units " + "<b>" + Units + "</b>" + "</br>")
    document.write("Charges per unit " + "<b>" + perUnitCharge + "</b>" + "</br>" + "</br>")
    document.write("Net Amount Payable (within Due Date) " + "<b>" + netAmount + "</b>" + "</br>")
    document.write("Late Payment Surcharge : " + "<b>" + latePayment + "</b>" + "</br>")
    document.write("Gross Amount Payable (after Due Date) " + "<b>" + afterDueDate + "</b>" + "</br>")


}