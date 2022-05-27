//Task 1 TO 6 snapshot attached with their respective question


//Task 7
function task7() {

    var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

    document.write("<h2>", "Qualification", "</h2>");

    document.write("<p>", qualification[0], "</p>");
    document.write("<p>", qualification[1], "</p>");
    document.write("<p>", qualification[2], "</p>");
    document.write("<p>", qualification[3], "</p>");
    document.write("<p>", qualification[4], "</p>");
    document.write("<p>", qualification[5], "</p>");
    document.write("<p>", qualification[6], "</p>");
    document.write("<p>", qualification[7], "</p>");
}

//Task 8 

function task8() {
    var names = ["Michael", "John", "Tony"];
    var score = [320, 230, 480];
    var totalMarks = 500;

    document.write("<p>", "Score of " + names[0] + " is " + score[0] + " & it's Percentage is " + (score[0] / totalMarks) * 100 + "%");
    document.write("<p>", "Score of " + names[1] + " is " + score[1] + " & it's Percentage is " + (score[1] / totalMarks) * 100 + "%");
    document.write("<p>", "Score of " + names[2] + " is " + score[2] + " & it's Percentage is " + (score[2] / totalMarks) * 100 + "%");
}

//Task 9
function task9() {
    var colors = ["Red", "Green", "Blue"];
    document.write(colors);
}

//Task 9a
function task9a() {
    var userColor = prompt("Which color do you want to add at the beginning");
    colors = ["Red", "Green", "Blue"];
    colors.unshift(userColor);
    document.write(colors);
}

//Task 9b
function task9b() {
    userColor = prompt("Which color do you want to a at the end")
    colors = ["Red", "Green", "Blue"];
    colors.push(userColor);
    document.write(colors)
}


//Task 9c
function task9c() {
    userColor1 = prompt("Enter Color Name to add at the begining");
    userColor2 = prompt("Enter Second Color Name to add at the begining");
    colors = ["Red", "Green", "Blue"];
    colors.unshift(userColor1, userColor2);
    document.write(colors);
}

//Task 9d 
function task9d() {
    colors = ["Red", "Green", "Blue"];
    colors.shift();
    document.write(colors);
}

//Task 9e
function task9e() {
    colors = ["Red", "Green", "Blue"];
    colors.pop();
    document.write(colors);
}

//Task 9f
function task9f() {

    colors = ["Red", "Green", "Blue"];
    var input = prompt("Please Ente the color Name you wanna add")
    var input2 = +prompt("Please Enter desired index / position, start from 0 ")
    colors.splice(input2, 0, input);
    document.write(colors);
}

//Task 9g
function task9g() {
    colors = ["Red", "Green", "Blue"];
    var deleteColor = prompt("which color do you want to delete on that index? (red , green , blue) ")
    var deletenumber = +prompt("At which index do you want to delete color (0, 1 , 2) ?");
    colors.splice(deletenumber);
    document.write(colors);
}


//Task 10
function task10() {

    var studentScore = [320, 230, 480, 120];
    document.write("<p>", "Scores of Students : " + studentScore, "</p>")
    studentScore.sort(); //Use for ascending sort
    document.write("<p>", "Ordered Scores of Students : " + studentScore, "</p>");
}

//Task 11 
function task11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write("<p>", "Cities List : " + cities, "</p>");
    document.write("<p>", "Selected Cities List : " + cities[2] + " " + cities[3] + "</p>");
}

//Task 12 
function task12() {
    var arr = ["This", "is", "my", "cat"];
    document.write("<h1>Array: </h1>");
    document.write(`<h1>${arr}</h1><br>`);

    var joined = arr.join(" ");

    document.write("<h1>String: </h1>");
    document.write(`<h1>${joined}</h1><br>`);
}


//Task 13
function task13() {

    var hardWare = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${hardWare}</h2><br>`);

    var value = hardWare.shift();
    document.write(`<h2> ${"Out :"} </h2>`);
    document.write(`<h2> ${value} </h2>`);

    value = hardWare.shift();
    document.write(`<h2> ${"Out :"} </h2>`);
    document.write(`<h2> ${value} </h2>`);

    value = hardWare.shift();
    document.write(`<h2> ${"Out :"} </h2>`);
    document.write(`<h2> ${value} </h2>`);

    value = hardWare.shift();
    document.write(`<h2> ${"Out :"} </h2>`);
    document.write(`<h2> ${value} </h2>`);
}

//Task 14 
function task14() {
    var hardWare2 = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${hardWare2}</h2><br>`);

    var value2 = hardWare2.pop();
    document.write(`<h2> ${"Out :"}</h2>`);
    document.write(`<h2> ${value2}</h2>`);

    value2 = hardWare2.pop();
    document.write(`<h2> ${"Out :"}</h2>`);
    document.write(`<h2> ${value2}</h2>`);

    value2 = hardWare2.pop();
    document.write(`<h2> ${"Out :"}</h2>`);
    document.write(`<h2> ${value2} </h2>`);

    value2 = hardWare2.pop();
    document.write(`<h2> ${"Out :"}</h2>`);
    document.write(`<h2> ${value2}</h2>`);
}


//Task 15 
function task15() {

    var companies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

    document.write(`
        <div class = dropdown>
        <select>
        <option>(${companies[0]})</option>
        <option>(${companies[1]})</option>
        <option>(${companies[2]})</option>
        <option>(${companies[3]})</option>
        <option>(${companies[4]})</option>
        <option>(${companies[5]})</option>
    </select>        
        <style>
         
            
            .dropdown{
                width:60%;
                margin:20px auto;
                text-align:center;
            }
            select {
                border: none;
                width: 30%;
                padding: 10px;
                font-size: 18px;
                box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
                
            }
        </style>
    `)

}