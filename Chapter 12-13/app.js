//Task 1
function task1() {
    var input = prompt("Please Enter a string or a number to check whether it's a number , uppercase or lowercase");
    if (input >= 65 && input <= 90) {
        alert("The Given input is uppercase");
    } else if (input >= 97 && input <= 122) {
        alert("The Given input is lowercase");
    } else {
        alert("Please type any number / string");
    }
}


//Task 2
function task2() {

    var num1 = +prompt("Enter First Number ( Integer Value )");
    var num2 = +prompt("Enter Second Number ( Integer Value )");
    var result = "Larger of first integer is " + ++num1 + " & Larger of second integer is " + ++num2;

    //Condition to get only number in prompt section
    while (!/^[0-9]+$/.test(num1, num2)) {
        alert("You didn't enter a number (Integer Value)")
        var num1 = +prompt("Enter First Number ( Integer Value )");
        var num2 = +prompt("Enter Second Number ( Integer Value )");
    }
    if (num1 == num2) {
        alert("Both the integers are equal")
    } else {
        alert(result)
    }
}


//Task 3
function task3() {
    var number = +prompt("Input any number to check whether it is positive, negative or zero.");
    while (!/^[0-9]+$/.test(number)) {
        alert("You didn't enter any number")
        var number = +prompt("Input any number to check whether it is positive, negative or zero.");
    }
    if (number > 0) {
        alert(number + " is a positive number");
    } else if (number === 0) {
        alert("You have entered a Zero");
    } else {
        alert(number + " is a negative number");
    }
}



//Task 4
function task4() {
    var character = prompt("Please Enter a Character of length 1");

    if (character === "a" || "e" || "i" || "o" || "u") {
        alert("True")
    } else if (character !== "a" || "e" || "i" || "o" || "u") {
        alert("False");
    } else {
        alert("False")
    }

}




//Task 5
function task5() {
    var password = "pakistan"
    var ask = prompt("Enter Your Password");

    if (ask === "") {
        alert("Please enter your password");
    } else if (ask === password) {
        alert("Correct ! The Password you entered matches the original password")
    } else {
        alert("Incorrect Password !")
    }
}



//Task 6 
function task6() {
    var greeting;
    var hour = 13;

    if (hour < 18) {
        greeting = "Good Day !";
        alert(greeting);
    } else {
        greeting = "Good Evening";
        alert(greeting)
    }
}

//Task 7
function task7() {
    var time = +prompt("Please Enter a time in 24 hours format like 1900 = 7pm");

    if (time >= 0000 && time < 1200) {
        alert("Good Morning !")
    } else if (time >= 1200 && time < 1700) {
        alert("Good Afternoon !")
    } else if (time >= 1700 && time < 2100) {
        alert("Good Evening !")
    } else if (time >= 2100 && time <= 2359) {
        alert("Good Night")
    } else {
        alert("Please Enter a time in 24 hours format like 1900 = 7pm")
    }
}