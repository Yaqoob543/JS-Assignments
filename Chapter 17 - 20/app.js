//Task 1
function task1() {
    alert(" var arr = [\n[' ']\n[' ']\n[' ']\n]");
}

//Task 2
function task2() {
    alert(" var arr = [\n[0 1 2 3]\n[1 0 1 2]\n[2 1 0 1]\n]");
}

//Task 3
function task3() {
    for (var i = 1; i <= 10; i++) {
        document.write(i, "<br>");
    }
}

//Task 4 
function task4() {

    var userTable = +prompt("Enter a number to show it's multiplication table");
    var userLength = +prompt("Enter Length");
    document.write("Multiplication Table of " + userTable, "<br>");
    document.write("Length is " + userLength, "<br>");

    for (var i = 1; i <= userLength; i++) {
        document.write(userTable + " x " + i + " = " + userTable * i + "<br>");
    }
}

//Task 5
function task5() {
    var fruits = ["apple ", "banana ", "mango ", "orange ", "strawberry "];
    for (var i = 0; i <= 4; i++) {
        document.write(fruits[i] + "<br>");
    }
    document.write("<br>");
    for (var i = 0; i <= 4; i++) {
        document.write("The element at index  " + i + " is " + fruits[i] + "<br>");
    }
}

//Task 6
function task6() {
    document.write("<b>" + "Counting : " + "<b>" + "<br>");
    document.write("<br>");
    for (var i = 1; i <= 15; i++) {
        document.write(i + ", ");
    }
    document.write("<br>");
    document.write("<br>");
    document.write("<b>" + "Reverse Counting : " + "<b>" + "<br>");
    document.write("<br>");
    for (var i = 15; i > 0; i--) {
        document.write(i + ", ")
    }
    document.write("<br>");
    document.write("<br>");
    document.write("<b>" + "Even : " + "<b>" + "<br>");
    document.write("<br>");
    for (var i = 0; i <= 20; i++) {
        if ((i % 2) == 0)
            document.writeln(i);
    }
    document.write("<br>");
    document.write("<br>");
    document.write("<b>" + "Odd : " + "<b>" + "<br>");
    document.write("<br>");
    for (var i = 0; i <= 20; i++) {
        if ((i % 2) != 0)
            document.writeln(i);
    }
    document.write("<br>");
    document.write("<br>");
    document.write("<b>" + "Series : " + "<b>" + "<br>");
    document.write("<br>");
    for (var i = 2; i <= 20; i++) {
        if ((i % 2) == 0)
            document.writeln(i + "k");
    }
}

//Task 7
function task7() {
    var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery , What do you want to orde sir/ma'am");
    for (var i = 0; i <= 5; i++) {
        if (userInput === arr[i]) {
            alert(userInput + " is available at index " + i + " in our bakery");
            break;
        } else {
            alert("Not Available");
            break;
        }
    }
}

//Task 8
function task8() {

    var arrItems = [24, 53, 78, 91, 12];
    var largestNum = 0;
    document.write("Array Items " + arrItems + "<br>" + "<br>");
    for (var i = 0; i < arrItems.length; i++) {
        if (arrItems[i] > largestNum) {
            var largestNum = arrItems[i];
        }
    }
    document.write("The Largest Number in Array is " + "<b>" + largestNum + "<b>");
}

//Task 9 
function task9() {
    var arrItems = [24, 53, 78, 91, 12];
    var smallestNum = 91;
    document.write("Array Items " + arrItems + "<br>" + "<br>");
    for (var i = 0; i < arrItems.length; i++) {
        if (arrItems[i] < smallestNum) {
            var smallestNum = arrItems[i];
        }
    }
    document.write("The Smallest Number in Array is " + "<b>" + smallestNum + "<b>");
}

//Task 10
function task10() {
    for (var i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            document.write(i + ", ")
        }
    }

}