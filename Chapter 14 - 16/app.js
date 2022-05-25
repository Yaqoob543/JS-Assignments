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
    document.write("<p>", "Array : " + arr, "</p>");
    arr.join();
    document.write("<p>", "String : " + arr, "</p>");





}