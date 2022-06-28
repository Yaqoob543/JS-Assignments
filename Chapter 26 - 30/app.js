//Task 1
function task1() {
    var userInput = prompt("Please Enter Any Positive Integer e.g  7.4613");
    if (userInput.charCodeAt() >= 49 && userInput.charCodeAt() <= 57) {
        document.write(" Number : " + userInput + "<br>");
        document.write(" Round off value : " + Math.round(userInput) + "<br>");
        document.write(" Floor value : " + Math.floor(userInput) + "<br>");
        document.write(" Ceil value : " + Math.ceil(userInput) + "<br>")
    } else {
        swal("Please Type any Positive Integer with decimal !")
    }


}

//Task 2
function task2() {
    var userInput = prompt("Please Enter Any Positive Integer e.g  7.4613"); {
        document.write(" Number : " + userInput + "<br>");
        document.write(" Round off value : " + Math.round(userInput) + "<br>");
        document.write(" Floor value : " + Math.floor(userInput) + "<br>");
        document.write(" Ceil value : " + Math.ceil(userInput) + "<br>")
    }

}
//Task 3
function task3() {
    var num = -7.6
    document.write("the absolute value of " + num + " is : " + Math.abs(num));

}


//Task 4
function task4() {
    var a = Math.floor(Math.random() * 6) + 1;
    document.write("Random dice value : " + a + "<br>" + "<br>");
}

//Task 5
function task5() {

    var a = Math.floor(Math.random() * 2) + 1;
    if (a === 1) {
        document.write("Random coin value : Heads <br>");
    } else {
        document.write("Random coin value : Tails <br>");
    }

}

//Task 6
function task6() {
    var a = Math.floor(Math.random() * 100) + 1;
    document.write("random number between 1 and 100 is : " + a)
}

//Task 7    

function task7() {
    var a = prompt("Please Enter your height").toLowerCase();

    if (a.includes("kgs")) {
        document.write(" The weight of user is  " + a.split("kgs").join("") + " " + "kilograms")
    } else if (a.includes("kilograms")) {
        document.write(" The weight of user is  " + a.split("kilograms").join("") + " " + "kilograms")
    } else if (a.includes("kilogram")) {
        document.write(" The weight of user is  " + a.split("kilogram").join("") + " " + "kilograms")
    } else if (a.includes("kg")) {
        document.write(" The weight of user is  " + a.split("kg").join("") + " " + "kilograms")
    } else if (a === " " || a === "") {
        alert("Please Enter your height")
    } else {
        document.write(" The weight of user is  " + a + " kilograms")
    }
}




//Task 8 
function task8() {
    var a = Number(prompt("Enter a number between 1 and 100"));
    var b = Math.floor(Math.random() * 10) + 1;
    console.log(b)

    if (a === b) {
        alert("Congratulation ! you guess the correct Random Secret Number")
    } else {
        alert("Incorrect ! Please Try Again")
    }
}