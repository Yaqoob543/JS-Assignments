//Task 1
function task1() {
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    var numTotal = num1 + num2;

    document.write("<h2>", "Sum of " + num1 + " and " + num2 + " is " + numTotal, "</h2>");
}


//Task 2 
function task2() {
    var num_1 = Number(prompt("Enter First Number"));
    var num_2 = Number(prompt("Enter Second Number"));

    var total = num_1 - num_2;
    document.write("<h2>", "Subtraction of " + num_1 + " and " + num_2 + " is " + total, "</h2>");

    var total = num_1 * num_2;
    document.write("<h2>", "Multiplication of " + num_1 + " and " + num_2 + " is " + total, "</h2>");

    var total = num_1 / num_2;
    document.write("<h2>", "Division of " + num_1 + " and " + num_2 + " is " + total, "</h2>");

    var total = num_1 % num_2;
    document.write("<h2>", "Modulus of " + num_1 + " and " + num_2 + " is " + total, "</h2>");
}

//Task 3 
function task3() {
    var number;
    document.write("<p>", "Value after variable is " + number, ("</p>"))

    var number = 8;
    document.write("<p>", "Initial Value : " + number, ("</p>"));

    var number = ++number;
    document.write("<p>", "Value after Increment is : " + number, ("</p>"));

    var number = number + 7;
    document.write("<p>", "Value after addition is : " + number, ("</p>"));

    var number = --number;
    document.write("<p>", "Value after decrement is : " + number, ("</p>"));

    var number = number / 3;
    document.write("<p>", "The Remainder is " + number, ("</p>"));
}

//Task 4 
function task4() {
    var qty = 5;
    var price = 600;

    var total = qty * price;

    document.write("<p>", "Total cost to buy " + qty + " tickets to a movie is " + total, ("</p>"));
}

//Task 5
function task5() {
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
}

//Task 6 
function task6() {
    var celcius = 33;
    var CtoF = (celcius * 9 / 5) + 32;
    document.write("<h2>", celcius + "\xB0C is + " + CtoF + "\xB0F", "</h2>");

    var farenheit = 80;
    var FtoC = (farenheit - 32) * 5 / 9;
    document.write("<h2>", farenheit + "\xB0F is + " + FtoC + "\xB0C", "</h2>");
}

//Task 7
function task7() {

    var item1 = 800;
    var item2 = 250;
    var qty1 = 3;
    var qty2 = 7;
    var shipping = 100;

    var item_1_total = item1 * qty1;
    var item_2_total = item2 * qty2;
    var final_total = item_1_total + item_2_total + shipping;

    document.write("<h1>", "Shopping Cart", "</h1>");

    document.write("<p>", "Price of item 1 is " + "<b>", item1, "</b>", ("</p>"));
    document.write("<p>", "Quantity of item 1 is " + "<b>", qty1, "</b>", ("</p>"));
    document.write("<p>", "Price of item 2 is " + "<b>", item2, "</b>", ("</p>"));
    document.write("<p>", "Quantity of item 2 is " + "<b>", qty2, "</b>", ("</p>"));
    document.write("<p>", "Shipping Charges is  " + "<b>", shipping, "</b>", ("</p>"));

    document.write("<p>", "Total Cost of Your Order is " + final_total);

}

//Task 8
function task8() {

    var totalmarks = 980;
    var obtain = 804;
    var percentage = obtain / totalmarks * 100;


    document.write("<h1>", "Marks Sheet", "</h1>");

    document.write("<p>", "Total Marks : " + totalmarks, "</p>");
    document.write("<p>", "Marks Obtained : " + obtain, "</p>");
    document.write("<p>" + "Percentage : " + percentage, "</p>");
}

//Task 9 
function task9() {
    var usd = 104.80;
    var riyal = 28;
    var totalpkr = 10 * usd + 25 * riyal;

    document.write("<h2>", "Currency in PKR ", "</h2>");

    document.write("<p>", "Total Currency in PKR : " + totalpkr, "</p>");

}


//Task 10 Contain a snapshot of relevant code


//Task 11
function task11() {
    var current = 2022;
    var birthyear = prompt("Enter Your Birth Year");
    var age = current - birthyear;

    document.write("<h2>", "Age Calculator", "</h2>");

    document.write("<p>", "Current Year is : " + current, "</p>");
    document.write("<p>", "Your Birth Year is : " + birthyear, "</p>");
    document.write("<p>", "Your Age is : " + age, "</p>");

}


//Task 12
function task12() {

    var radius = 20;
    var circum = 2 * 3.142 * radius;
    var area = 3.142 * radius * radius;

    document.write("<h2>", "The Geometrizer", "</h2>");

    document.write("<p>", "Radius of a Circle is : " + radius, "</p>");
    document.write("<p>", "The circumference is : " + circum, "</p>");
    document.write("<p>", "The area is : " + area, "</p>");
}

//Task 13 
function task13 () {
    var snack = prompt("Enter the Name of Your Favorite Snack");
    var current_age = prompt("Enter Your Age");
    var max_age = 65;
    var perday = prompt("Enter the Amount of Snacks for Per day");
    var need = ( max_age-current_age ) *365;


    document.write("<h1>" , "The Lifetime Supply Calculator" , "</h2>");
    
    document.write("<p>", " Your Favorite Snack is : " + snack , "</p>");
    document.write("<p>" , "Your Current age is : " + current_age , "</p>");
    document.write("<p>" , "Your Estimated Maxiumu age is : " + max_age , "</p>");
    document.write("<p>" , "Amount of Snacks per day : " + perday , "</p>");
    document.write("<p>" , "You will need " + need + " " + snack + " to last you until the ripe old age of " + max_age , "</p>");

}