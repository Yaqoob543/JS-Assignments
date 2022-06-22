//Task 1

function task1() {
    var user1 = prompt("Please Enter your first name").toUpperCase();
    var user2 = prompt("Please Enter your last Name").toUpperCase()
    var result = alert(user1 + " " + user2).toUpperCase();
}

//Task 2
function task2() {
    var userMobile = prompt("Please Enter the name of your favorite Mobile Phone Model");
    document.write("My Favorite Mobile Phone Model is " + userMobile + "<br>")
    document.write("Length of String is : " + userMobile.length)
}


//Task 3
function task3() {
    var country = "Pakistan"
    document.write("String : " + country + "<br>")
    document.write("Index of 'n' : " + country.indexOf("n"))
}

//Task 4
function task4() {
    var greet = "Hello World";
    document.write("String : " + greet + "<br>");
    document.write("Last index of ' l ' is : " + greet.lastIndexOf("l"))
}

//Task 5
function task5() {
    var nation = "Pakistani"
    document.write("String : " + nation + "<br>");
    document.write("Character at index 3 is : " + nation.charAt(3));
}

//Task 6
function task6() {
    var user1 = prompt("Please Enter your first name").toUpperCase();
    var user2 = prompt("Please Enter your last Name").toUpperCase()
    swal(user1.concat(" " + user2))
}

//Task 7
function task7() {
    var city = "Hyderabad";
    document.write("City : " + city + "<br>");
    document.write("After Replacement : " + city.replace("Hyder", "Islam"))
}

//Task 8
function task8() {
    var message = "Ali and Sami are best friends. They Play cricket and football together"
    document.write("Before Replacement : " + message + "<br>")
    document.write("<br>" + "After Replacement : " + message.replaceAll("and", "&"))
}

//Task 9
function task9() {
    var num = "472";
    var num2 = 472
    document.write("Value : " + num + "<br>")
    document.write("Value : " + typeof num + "<br>")
    document.write("Value : " + num2 + "<br>")
    document.write("Value : " + typeof num2 + "<br>")
}

//Task 10
function task10() {
    var userInput = prompt("Please enter any word in small letters . i.e abc")
    document.write("User input : " + userInput + "<br>")
    document.write("Upper Case : " + userInput.toUpperCase() + "<br>")
}


//Task 11
function task11() {
    var user = prompt("Please enter any word to change it's case.")
    document.write("User input : " + user + "<br>")
    document.write("Title Case : " + user.charAt(0).toUpperCase() + user.substring(1).toLowerCase() + "<br>")
}

//Task 12
function task12() {
    var num = +prompt("Enter a Number in Decimal Value");
    var num2 = String(num)
    swal(num2)
}

//Task 13
function task13() {
    var user = prompt("Please Enter Your Username");
    if (user != "!" && user != "," && user != "." && user != "@") {
        swal("Your Username is Valid ");
    } else {
        swal("Your username is Invalid")
    }
}


//Task 14
function task14() {
    var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery , What do you want to orde sir/ma'am").toLowerCase();
    var match = true;
    for (var i = 0; i < arr.length; i++) {
        if (userInput === arr[i]) {
            match = false;
            swal(userInput + " is available at index " + i + " in our bakery");
            break;
        }
    }
    if (match === true) {
        swal("We are sorry " + userInput + " is not available at our bakery");
    }
}

//Task 15

//Task 16
function task16() {
    var university = "University of Karachi";
    var final = university.split("").join("<br>")
    document.write(final)
}

//Task 17
function task17() {
    var userInput = prompt("Please Enter Any Input");
    var result = userInput.charAt(userInput.length - 1);
    document.write("User input : " + userInput + "<br>")
    document.write("Last Character of input : " + result + "<br>");
}

//Task 18
function task18() {
    var text = "the quick brown fox jumps over the lazy dog";
    var occur = (text.match(/the/g) || []).length
    console.log(occur)
    document.write("Text : the quick brown fox jumps over the lazy dog" + "<br>")
    document.write("There are " + occur + " occurence (s) of word 'the' .")
}