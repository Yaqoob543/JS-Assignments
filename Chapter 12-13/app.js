//Task 1


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
    } else {
        alert("False");
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