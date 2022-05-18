//Task 1
function task1() {

    var a = prompt("Please Enter Any Number of Your Choice");


    document.write("<h4>", "Result : ", "</h4>");
    document.write("<p>", "The Value of a is : " + a, "</p>");
    document.write("<p>", "......................................", "</p>");

    document.write("<p>", "The value of ++a is : ", ++a, "</p>");
    document.write("<p>", "Now the value of a is : ", a, "</p>");
    document.write("<p>", "......................................", "</p>");

    document.write("<p>", "The value of a++ is : ", a++, "</p>");
    document.write("<p>", "Now the value of a is : ", a, "</p>");
    document.write("<p>", "......................................", "</p>");

    document.write("<p>", "The value of --a is : ", --a, "</p>");
    document.write("<p>", "Now the value of a is : ", a, "</p>");
    document.write("<p>", "......................................", "</p>");


    document.write("<p>", "The value of a-- is : ", a--, "</p>");
    document.write("<p>", "Now the value of a is : ", a, "</p>");

}

//Task 2
function task2() {
    var a = 2;
    var b = 1;
    document.write("<p>", "a is : " + a, "</p>");
    document.write("<p>", "b is : " + b, "</p>");

    var result = --a;
    document.write("<p>", "the result of --a is : " + result, "</p>");

    a = 2;
    b = 1;
    result = --a - --b;
    document.write("<p>", "the result of --a - --b is : " + result, "</p>");

    a = 2;
    b = 1;
    result = --a - --b + ++b;
    document.write("<p>", "the result of --a - --b + ++b is : " + result, "</p>");

    a = 2;
    b = 1;
    result = --a - --b + ++b + b;
    document.write("<p>", "the result of --a - --b + ++b + b is : " + result, "</p>")
}

//Task 3 
function task3() {
    var welcome = prompt("Please Enter Your Name");
    alert("Welcome to my site " + welcome);
}

//Task 4
function task4() {
    var num = prompt("Please Enter Your Desired Table Number")

    document.write("<h1> Table of ", num, "</h1>")
    document.write("<br>")

    document.write("<h2>", num, " x ", 1, " = ",
        num * 1, "</h2>")

    document.write("<h2>", num, " x ", 2, " = ",
        num * 2, "</h2>")


    document.write("<h2>", num, " x ", 3, " = ",
        num * 3, "</h2>")


    document.write("<h2>", num, " x ", 4, " = ",
        num * 4, "</h2>")


    document.write("<h2>", num, " x ", 5, " = ",
        num * 5, "</h2>")


    document.write("<h2>", num, " x ", 6, " = ",
        num * 6, "</h2>")


    document.write("<h2>", num, " x ", 7, " = ",
        num * 8, "</h2>")


    document.write("<h2>", num, " x ", 8, " = ",
        num * 8, "</h2>")


    document.write("<h2>", num, " x ", 9, " = ",
        num * 9, "</h2>")


    document.write("<h2>", num, " x ", 10, " = ",
        num * 10, "</h2>")


    if (num == 0) {

        document.write("<h1> Table of ", 5, "</h1>")
        document.write("<br>")


        document.write("<h2>", 5, " x ", 1, " = ",
            5 * 1, "</h2>")

        document.write("<h2>", 5, " x ", 2, " = ",
            5 * 2, "</h2>")


        document.write("<h2>", 5, " x ", 3, " = ",
            5 * 3, "</h2>")


        document.write("<h2>", 5, " x ", 4, " = ",
            5 * 4, "</h2>")


        document.write("<h2>", 5, " x ", 5, " = ",
            5 * 5, "</h2>")


        document.write("<h2>", 5, " x ", 6, " = ",
            5 * 6, "</h2>")


        document.write("<h2>", 5, " x ", 7, " = ",
            5 * 8, "</h2>")


        document.write("<h2>", 5, " x ", 8, " = ",
            5 * 8, "</h2>")


        document.write("<h2>", 5, " x ", 9, " = ",
            5 * 9, "</h2>")


        document.write("<h2>", 5, " x ", 10, " = ",
            5 * 10, "</h2>")
    }

}

//Task 6
function task6() {


    var sub1 = prompt("Enter the name of Subject 1");
    var marks1 = +prompt("Enter the Masks Obtained in " + sub1);
    var sub2 = prompt("Enter the name of Subject 2");
    var marks2 = +prompt("Enter the Masks Obtained in " + sub2);
    var sub3 = prompt("Enter the name of Subject 3");
    var marks3 = +prompt("Enter the Masks Obtained in " + sub3);
    var each_marks = 100;
    var total_obtain = marks1 + marks2 + marks3;
    var total_marks = 300;
    var eachper1 = (marks1 / 100) * 100;
    var eachper2 = (marks2 / 100) * 100
    var eachper3 = (marks3 / 100) * 100;
    var total_per = (total_obtain / total_marks) * 100;

    document.write(`<table>
        <tr>  
            <th>Subjects</th>  
            <th>Total Marks</th>  
            <th>Obtained Marks</th> 
            <th>Percentage</th>  
        </tr>  
        <tr>
            <td>${sub1}</td>
            <td>${100}</td>
            <td>${marks1}</td>
            <td>${eachper1}%</td>
        </tr>
        <tr>
            <td>${sub2}</td>
            <td>${100}</td>
            <td>${marks2}</td>
            <td>${eachper2}%</td>
        </tr>
        <tr>
        <td>${sub3}</td>
        <td>${100}</td>
        <td>${marks3}</td>
        <td>${eachper3}%</td>
    </tr> 
    <tr>
        <td><b>${"Total"}</b></td>
        <td> <b> ${300} </b> </td>
        <td><b>${total_obtain}</b></td>
        <td><b>${total_per}%</b></td>
    </tr> 

        </table>`)

}