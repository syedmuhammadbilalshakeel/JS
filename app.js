//Q1
var rightnow= new Date();
console.log(rightnow);
document.write(rightnow);


//q2
var monthName= [ "january" ,"february" , "March" ,"April","May" ,"June" ,"July" ,"Augest" ,"Septembar" ,"Octobar","November","December"];

var now= new Date();
var Theonth= now.getMonth();
var nameOfMonth = monthName[Theonth];
alert("current month: " + nameOfMonth);


//q3

var DayName= ["sun" ,"mon", "tue" ,"wedn" ,"thus" ,"fir" ,"sat"];
var nowDay = new Date();
var Gday = nowDay.getDay();
var sepDay = DayName[Gday];
alert("today is :" + sepDay);




//q4

if(sepDay == 0  && sepDay == 6){
    document.write("today is fun day");
}else {
    document.write("today is working day")
}



// chapter 31 to 34

// qno#01
// var now = new Date();
// document.write(now);

// qno#02
// var array = ["January","Feburuary","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var date = now.getMonth();
// document.write("Current month: " + array[date]);

// qno#03
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var now = new Date();
// var day = now.getDay();
// document.write("Today is: " + arr[day]);

// qno#04
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var now = new Date();
// var day = now.getDay();
// if(arr[day] === "Saturday"){
//     document.write("It's Fun Day");
// }
// else if(arr[day] === "Sunday"){
//     document.write("It's Fun Day");
// }
// else if(arr[day] === "Monday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Tuesday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Wednesday"){
//     document.write("Today is: " + arr[day]);
// } 
// else if(arr[day] === "Thursday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Friday"){
//     document.write("Today is: " + arr[day]);
// }else{
//     document.write("Nothing");
// }

// OR
// var now = new Date().toString();
// var day = now.slice(0,3);
// day = "Saturday,Sunday";
// if(day === "Saturday,Sunday"){
//     document.write("It's Fun Day");
// }
// else if(day === "Monday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Tuesday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Wednesday"){
//     document.write("Today is: " + day);
// } 
// else if(day === "Thursday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Friday"){
//     document.write("Today is: " + day);
// }else{
//     document.write("Nothing");
// }

// qno#05
// var now = new Date();
// var date = now.getDate();
// if (date >= 1 && date <= 15){
//     document.write("First Fifteen days of Month");
// }
// else if (date > 15 && date <= 31){
//     document.write("Last days of the month");
// }

// qno#06
// var now = new Date();
// var mili = now.getTime();
// var minute = mili / (1000 * 60 * 60);
// document.write("Current Date: " + now + "<br>" + "Elapsed millisecond since January 1, 1970: " + mili + "<br>" + "Elapsed minutes since January 1, 1970: " + minute);

// qno#07
// var now = new Date();
// var hour = now.toLocaleTimeString().toString();
// var extract = hour.slice(7);
// document.write("It's " + extract);

// qno#08
// var now = new Date("Dec 31 2020");
// document.write("Lather date: " + now);

// qno#09
// var now = new Date().getTime();
// var ramdan = new Date("Mar 22 2023").getTime();
// var diff = ramdan - now;
// var floor = diff / (1000 * 60 * 60 * 24);
// var round = Math.round(floor);
// document.write(round + " days have passsed since Ist Ramdan, 2023");

// qno#10
// var now = new Date();
// var pass = new Date("Jan 1 2022");
// var mili = now.getTime();
// var millisec = pass.getTime();
// var diff = mili - millisec;
// var floor = Math.round(diff / (1000));
// document.write("On reference date: " + now + "<br>" + floor + " seconds had passed since begining of 2022");

// qno#11
// var now = new Date();
// var now1 = new Date();
// var hour = now1.getHours();
// now1.setHours(hour - 1);
// document.write("Current date: " + now + "<br>");
// document.write("1 hour ago, it was " + now1);  

// qno#12
// var now = new Date();
// var now1 = new Date();
// var year = now1.getFullYear();
// now1.setFullYear(year - 100);
// document.write("Current date: " + now + "<br>");
// document.write("100 years back, it was " + now1); 

// qno#13
// var user = new Date(prompt("Enter your birth year, Jan 1 2015").toLowerCase());
// var time = user.getTime();
// var now = new Date().getTime();
// var diff = now - time;
// var round = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
// document.write("Your age is " + round + "<br>" + "Your birth year is " + user.getFullYear());

// qno#14
// var user = prompt("Enter your name");
// var month = ["Jnauray","Feburary","March","April","May","June","July","August","September","October","November","December".toLowerCase()];
// var now = new Date();
// var getMon = now.getMonth();
// var today = month[getMon];
// var unit = +prompt("Number of units");
// var charge = +prompt("Charge per unit");
// var late = 350;
// var net = unit * charge;
// var gross = net + late;
// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer Name: " + user + "<br>" + "Month: " + today + "<br> Number of units: " + unit + "<br> Charges per units: " + charge + "<br> <br>");
// document.write("Net Amount Payable (Within Due Date): " + net + "<br> Late payament surcharge: " + late + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + gross);
