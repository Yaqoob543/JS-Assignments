//Task 1
function task1() {
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    var numTotal = num1 + num2;

    document.write("<h2>", "Sum of " + num1 + " and " + num2 + " is " + numTotal , "</h2>");
}


//Task 2 
function task2() {
    var num_1 = Number(prompt("Enter First Number"));
    var num_2 = Number(prompt("Enter Second Number"));

    var total = num_1 - num_2;
    document.write("<h2>", "Subtraction of " + num_1 + " and " + num_2 + " is " + total , "</h2>");

    var total = num_1 * num_2;
    document.write("<h2>", "Multiplication of " + num_1 + " and " + num_2 + " is " + total , "</h2>");

    var total = num_1 / num_2;
    document.write("<h2>", "Division of " + num_1 + " and " + num_2 + " is " + total , "</h2>");

    var total = num_1 % num_2;
    document.write("<h2>", "Modulus of " + num_1 + " and " + num_2 + " is " + total , "</h2>");
}

//Task 3 
function task3() {
    var number;
    document.write("<p>" , "Value after variable is " + number , ("</p>") )

    var number = 8;
    document.write("<p>", "Initial Value : " + number , ("</p>"));

    var number = ++number;
    document.write("<p>", "Value after Increment is : " + number , ("</p>"));

    var number = number + 7;
    document.write("<p>", "Value after addition is : " + number , ("</p>"));

    var number = --number;
    document.write("<p>" , "Value after decrement is : " + number , ("</p>"));

    var number = number / 3;
    document.write("<p>" , "The Remainder is " + number, ("</p>"));
}

//Task 4 
function task4() {
    var qty = 5;
    var price = 600;

    var total = qty*price;

    document.write("<p>", "Total cost to buy " + qty + " tickets to a movie is " + total , ("</p>"));
}

//Task 5
function task5() {
    var num = prompt("Please Enter Your Desired Table Number")

    document.write("<h1> Table of ", num, "</h1>")
    document.write("<br>")
    
    
    
    document.write( "<h2>", num, " x ", 1, " = ",
        num * 1 , "</h2>" )
    
    document.write("<h2>", num, " x ", 2, " = ",
        num * 2, "</h2>")
    
    
    document.write("<h2>", num, " x ", 3, " = ",
        num * 3, "</h2>")
    
    
    document.write("<h2>", num, " x ", 4, " = ",
        num * 4, "</h2>")
    
    
    document.write("<h2>", num, " x ", 5, " = ",
        num * 5, "</h2>")
    
    
    document.write("<h2>", num, " x ", 6, " = ",
        num * 6 ,"</h2>")
    
    
    document.write("<h2>", num, " x ", 7, " = ",
        num * 8, "</h2>")
    
    
    document.write( "<h2>", num, " x ", 8, " = ",
        num * 8, "</h2>")
    
    
    document.write("<h2>", num, " x ", 9, " = ",
        num * 9, "</h2>")
    
    
    document.write("<h2>", num, " x ", 10, " = ",
        num * 10, "</h2>")
}

//Task 6 
function task6() {
    var celcius = 33;
    var CtoF = ( celcius * 9/5) + 32  ;   
    document.write( "<h2>" , celcius + "\xB0C is + " + CtoF + "\xB0F", "</h2>" );
    
    var farenheit = 80;
    var FtoC = (farenheit - 32 ) * 5/9;
    document.write("<h2>" , farenheit + "\xB0F is + " + FtoC + "\xB0C", "</h2>" );
}