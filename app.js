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



// chapter no 38 to 42

// qno#01
// var a= 16;
// var b= 2;
// function lo(x){
//    return  (a+b)-x
// }
// console.log(lo(a));




// qno#02
// function foo(){
//     var year = prompt("Enter your leap year");
//     if (year % 4 === 0){
//         alert(year + " is a leap year");
//     }else {
//         alert(year + " is not a leap year");
//     }
// }
// foo();

// qno#03
// function foo(){
//     var a = +prompt("Enter your ist value, in area of triangle");
//     var b = +prompt("Enter your 2nd value, in area of triangle");
//     var c = +prompt("Enter your 3rd value, in area of triangle");
//     var side = (a + b + c) / 2;
//     var calculateAreaOfTraingle = (side)*(side - a)*(side - b)*(side - c);
//     document.write("The area of triangle is " + calculateAreaOfTraingle);
// }
// foo();

// qno#04

// qno#05
// function foo() {
//     var str = "Web Developments in the saylani welafre it academy";
//     var index = str.indexOf("Developments");
//     alert(index);
// }
// foo();

// qno#06
// function foo(){
//         var input = prompt("Enter your string");
//         var replace = input.replace(/[aeiouAEIOU]/g , " ");
//         alert("Original string: " + input + "\n" + "The string remove a vowels: " + replace);
//     }
//     foo()

// qno#07
// function findOccurrences() {
    //     var str = "Pleases read this application and give me gratuity";
    //     var res = str.match(/[aeiou]{2}/g);
    //     var join = res.join(",")
    //     document.write("Original String: " + str + "<br>");
    //     document.write("This senntence any two vowels in succession: " + join);
    // }
    // findOccurrences();
    
    //   OR

    // function foo(){
    //     var input = prompt("Enter your sentence");
    //     var result = "";
    //     for(var i = 0; i < input.length; i++){
    //         if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u" || input[i] === "A" || input[i] === "E" || input[i] === "I" ||input[i] === "O" || input[i] === "U"){
    //             result += input[i] + ",";
    //         }
    //     }
    //     document.write("This sensetence is: " + input + "<br>");
    //     document.write("This senstence vowels are: " + result);
    // }
    // foo()
    
// qno#08
// function foo(){
//     var city1 = prompt("Enter your ist city name");
//     var city2 = prompt("Enter your 2nd city name");
//     var input = prompt("Distance between " + city1 + " and " + city2);
//     var meters = input * 1000;
//     var centimeters = input * 1000 * 100;
//     var feet = input * 3280.84;
//     var inches = input * 39370.1;
//     document.write("Distance between " + city1 + " and " + city2 + " in: " + input + " Km <br>");
//     document.write("Convert into Meters: " + meters + " M <br>");
//     document.write("Convert into Centemeters: " + centimeters + " Cm <br>");
//     document.write("Convert into Feet: " + feet + " Ft <br>");
//     document.write("Convert into Inches: " + inches + " In ");
// }
// foo();

// qno#09

// qno#09
// function foo() {
//     var overTime = +prompt("Enter a working hour of employee in overtime");
//     var perHourSalry = 12.00;
//     if (overTime >= 40){
//         var income = overTime * perHourSalry;
//         alert("You overtime pay salary is: " + income);
//     }else {
//         alert("You have to work for more than 40 hour to get over time pay");
//     }
// }
// foo();

// qno#10
// var user = +prompt("Enter Amount");
    // var result = 0;
    // var hun = 0;
    // var fiv = 0;
    // var ten = 0;
    // var one = 0;
    
    // for (i = 0; i < 5; i++) {
    
    //     if (user >= 100) {
    //         hun = Math.floor(user / 100);
    //         user -= hun * 100;
    //     }
    //     else if (user >= 50) {
    //         fiv = Math.floor(user / 50);
    //         user -= fiv * 50;
    //     }
    //     else if (user >= 10) {
    //         ten = Math.floor(user / 10);
    //         user -= ten * 10 ;
    //     }
    //     else if (user >= 1) {
    //         one = Math.floor(user / 1);
    //         user -= one * 1 ;
    //     }
    // }
    // alert(hun + " hundred rupee", fiv + " fivety rupee", ten + " ten rupee", one + " one rupee",)
    
    
    
    
    
    // Extra
    // function foo(a,b) {
    //     var c = a * 3;
    //     var d = b * 2;
    //     var e = c + d;
    //     var sum = 0;
    //     for (var i = e; i >= 1; i--){
    //         if (i % 2 !== 0){
    //             sum += i;
    //             var slit = sum.toString();
    //             var arr = slit.split(" ");
    //             for(var j = 0; j < arr.length; j++){
    //                 if (arr[j] === "49"){
    //                     console.log(Number(arr[j]));
    //                 }
    //             }
    //         }
    //     }
    // }
    // var func = foo(3,2);
    // console.log(func);
    
    
    function foo(a,b) {
        var c = a * 3;
        var d = b * 2;
        var e = c + d;
        var sum = 0;
        for (var i = e; i >= 1; i--){
            if (i % 2 !== 0){
                sum += i;
                var slit = sum.toString();
                var arr = slit.split(" ");
                for(var j = 0; j < arr.length; j++){
                    if (arr[j] === "49"){
                        console.log(Number(arr[j]));
                    }
                }
            }
        }
    }
    var func = foo(3,2);
    console.log(func);
