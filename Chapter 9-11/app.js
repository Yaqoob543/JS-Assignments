//Task 1

function task1() {
    var city = prompt("Please Enter your city name");

    if (city == "karachi") {
        alert("Welcome to the city of lights");
    } else {
        alert("Welcome to " + city);
    }
}

//Task 2 
function task2() {
    var gender = prompt("Please Enter your Gender");

    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Ma'am");
    } else {
        alert("Please type your gender correctly");
    }
}


//Task 3
function task3() {
    var signal = prompt("Please Enter the Signal Color");
    if (signal === "red") {

        document.write(`<table>
    <tr>  
        <th>Signal Color</th>
        <th>Message</th>  
        </tr>
        <tr>
        <td> Red </td>
        <td> Must Stop </td>
        </tr>
        </table>`)
    } else if (signal === "yellow") {
        document.write(`<table>
    <tr>  
        <th>Signal Color</th>
        <th>Message</th>  
        </tr>
        <tr>
        <td> Yellow </td>
        <td> Ready to move </td>
        </tr>
        </table>`)
    } else if (signal === "green") {
        document.write(`<table>
    <tr>  
        <th>Signal Color</th>
        <th>Message</th>  
        </tr>
        <tr>
        <td> Green </td>
        <td> Move Now </td>
        </tr>
        </table>`)
    } else {
        alert("Please Enter Signal Color correctly (red , green , yellow)")
    }
}

//Task 4
function task4() {
    var fuel = prompt("Enter the remaining fuel in your car" + " in Litre . e.g : 0.20");
    if (fuel <= 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("You have enough fuel for travelling");
    }

}


// Task 5.1
function task5_1() {
    var a = 4;
    if (++a === 5);
    alert("Given condition for variable a is true");
}

//Task 5.2
function task5_2() {
    var b = 82;
    if (++a === 83) {
        alert("Given condition for variable b is true")
    }
}

//Task 5.3
function task5_3() {
    var c = 12;
    if (c++ === 13) { alert("condition 1 is true"); }
    if (c === 13) { alert("condition 2 is true"); }
    if (++c < 14) { alert("condition 3 is true"); }
    if (c === 14) { alert("condition 4 is true"); }
}
//Task 5.4
function task5_4() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The Cost Equals")
    }
}

//Task 5.5
function task5_5() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
}

//Task 6
function task6() {
    var obtain = +prompt("Please Enter the Marks Obtain in three Subjects");
    var total = +prompt("Please Enter the Total Marks of three Subjects");
    var percentage = (obtain / total) * 100;
    var grade;
    var remarks;

    if (percentage < 60) {
        grade = "Fail"
        remarks = "Sorry you are Fail"
    }
    if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    }
    if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }
    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    }


    document.write("<h1>", "Marks Sheet", "</h1>");
    ("<br>")
    document.write("<p>", "Total Marks : " + total, " </p>");
    document.write("<p>", "Marks Obtain : " + obtain, "</p>");
    document.write("<p>", "Percentage : " + percentage + "%", "</p>");
    document.write("<p>", "Grade : " + grade, "</p>");
    document.write("<p>", "Remarks : " + remarks, "</p>");

}

//Task 7
function task7() {
    var secretNum = 7;
    var guess = +prompt("Guess the Secret Number ");
    if (guess == secretNum) {
        alert("Bingo !");
    } else if (guess == ++secretNum) {
        alert("Close enough to the correct answer");
    } else {
        alert("Sorry ! You guess the wrong secret Number ")
    }
}

//Task 8 
function task8() {
    var given_num = +prompt("Please Enter Any Number");
    if (given_num % 3 == 0) {
        alert("The given number is divisible by 3");
    } else {
        alert("The given number is not divisible by 3")
    }
}


//Task 9
function task9() {
    var num = prompt("Please Enter any number to Check whether its even or odd ");
    if (num % 2 === 0) {
        alert(num + " is an even number");
    } else if (num % 2 != 0) {
        alert(num + " is an odd number");
    } else {
        alert("Please Enter Any Number")
    }
}

//Task 10 
function task10() {
    var temp = +prompt("Please Enter the current temprature");
    if (temp > 40) {
        alert("It is too hot outside");
    } else if (temp > 30) {
        alert("The weather today is Normal");
    } else if (temp > 20) {
        alert("Today's Weather is cool");
    } else if (temp > 10) {
        alert("OMG! Today's weather is so cool");
    }
}

// Task 11
function task11() {
    var firstNum = +prompt("Please Enter First Number");
    var secondNum = +prompt("Please Enter Second Number");
    var operation = prompt("Please Enter Operation . eg , ( + , - , * , / , % ) ")
    var result;

    if (operation === "+") {
        result = firstNum + secondNum;
        alert("The Result of your calculation is " + result);
    } else if (operation === "-") {
        result = firstNum - secondNum;
        alert("The Result of your calculation is " + result);
    } else if (operation === "*") {
        result = firstNum * secondNum;
        alert("The Result of your calculation is " + result);
    } else if (operation === "/") {
        result = firstNum / secondNum;
        alert("The Result of your calculation is " + result);
    } else {
        alert("Please Enter a Valid Operator");
    }

}