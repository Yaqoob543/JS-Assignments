//Task 1
function task1() {
    var a = new Date()
    alert(a)
}


//Task 2
function task2() {
    function greet(a, b) {
        alert("Hello " + a + " " + b)
    }
    greet(prompt("Please Enter Your Name"), prompt("Please Enter your last Name"))
}

//Task 3 
function task3() {
    function sum(a, b) {
        alert("The sum of Your two numbers is " + (a + b))
    }
    sum(+prompt("Please enter first number"), +prompt("Please enter second number"))
}

//Task 4
function task4() {
    function cal(num1, operator, num2) {
        if (operator === "+") {
            alert("The Sum of " + num1 + " & " + num2 + " is " + num1 + num2)
        } else if (operator === "-") {
            alert("The Subtract of " + num1 + " & " + num2 + " is " + num1 - num2)
        } else if (operator === "*") {
            alert("The Multiply of " + num1 + " & " + num2 + " is " + num1 * num2)
        } else if (operator === "/") {
            alert("The division of " + num1 + " & " + num2 + " is " + num1 / num2)
        } else {
            alert("Please Enter a Valid Operator")
        }
    }
    cal(+prompt("Please enter first number"), prompt("Please Input your desired operator"), +prompt("Please enter second number"))
}

//Task 5
function task5() {
    function square(a) {
        alert("The Square of " + a + " is " + a * a)
    }
    square(+prompt("Please Enter a Number to Check it's Square"))
}

//Task 6
function task6() {
    function factorial(n) {
        answer = 1
        if (n === 0 || n === 1) {
            alert("The Factorial of a " + n + " is " + answer)
        } else {
            for (var i = 1; i <= n; i++) {
                answer = answer * i
                alert("The Factorial of " + n + " is " + answer)
            }
        }
    }

    factorial(+prompt("Please Enter a Number to check it's facotrial"))
}

//Task 7
function task7() {
    function count(num1, num2) {
        for (var i = num1; i <= num2; i++) {
            document.write(i)
        }
    }
    count(+prompt("Enter number to start counting"), +prompt("Enter number to end counting"))
}

//task 8

// Will solve it later

//Task 9
function task9() {
    function area(width, height) {
        var A = width * height
        alert("The Area of Rectangle is " + A)
    }
    h = Number(prompt("Please Enter Height of Rectangle"))
    area(+prompt("Please Enter Width of Rectangle"), h)
}

//Task 10
function task10() {
    function palindrome(word) {
        var check = word.split("").reverse("").join("")
        if (check === word) {
            alert("It is Palindrome Word")
        } else {
            alert("It is Not a Palindrome Word")
        }
    }
    palindrome(prompt("Please Enter Word to Check it's Palindrome or Not"))
}

//Task 11
function task11() {
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
    titleCase(prompt("Enter Any Sentence to Convert it to Title Case"))
}

//task 12
// will solve it later


//Task 13
function task13() {
    function letterCount(str, letter) {
        var count = 0
        for (var i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                count++
                alert("The Occurence of Letter " + letter + " in String is " + count)
            }
        }
        return count
    }
    letterCount(prompt("Please Enter Any String"), prompt("Please Enter Letter to Check it's Occurence"))
}

//Task 14
function task14() {
    function calcCircum(radius) {
        alert("The circumference of a circle is " + 2 * 3.14 * radius)
        alert("The Area of a circle is " + 3.14 * (radius * radius))
    }
    calcCircum(+prompt("Please enter the radius of a circle"))
}