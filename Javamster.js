//Simple If Statements
/*var youLikeMeat = true;
var myNum = 8;


if (myNum == 10){

    document.write("myNum is equal to 10");

} else{

    document.write("myNum is not equal to 10")

}*/

//Else if Statements

/*var myAge = 39;

if (myAge > 30) {

    document.write("You are over 30!");
} else if (myAge > 20) {

    document.write("You are over 20!");
} else if (myAge > 10) {

    document.write("You are over 10!");
} else {
    document.write("You are not over 10!");
}*/
//Logical Operators and(&&) or(||)

/*var myAge = 37;

if (myAge >= 18 && myAge <= 30){
    document.write("Age within Parameters");
} else{
    document.write("Age not within the Paramesters");
}*/

/*var myAge = 26;

if (myAge < 18 || myAge > 30 || myAge === 25){
    document.write("No");

} else{
    document.write("Yes");
}*/

//While Loops

/*var age = 5;

while (age < 10 ){
    console.log("Your Age is Less tnan 10");
    age++;
}

document.write("You are now over 10");*/

//FOR LOOPS

/*var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++ ){
    console.log("This is link number" +i);
    }

document.write("All links looped");*/

//Continue and break Keywords
/*for (i = 0; i < 10; i++ ){
    console.log(i);

    if(i === 7){

        break;
    }
    }

console.log("i Have broken out of the Loop")*/

/*for (i = 0; i < 10; i++ ){

    if(i === 5 || i === 3){
        continue;
    }
    console.log(i);
    document.write(i);
    if(i === 7){

        break;
    }
}
console.log("i Have broken out of the Loop") */
//Functions
/*function getAverage (a,b){
    var average =(a + b)/2; local variable
    console.log(average);
    return average;
}

var myResult = getAverage(7,8); Global Variable
console.log("The Average is" + " "+  myResult);*/

//Working with Numbers:
/*
var a = 9;
var b = 5;
console.log(a +b);

console.log(Math.round(7.5));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.3));
console.log(Math.max(7, 5, 12, 8));
console.log(Math.PI);*/

//NaN - Not a number:
/*var a = 9;
var b = "Hello";
//Double Negative !NaN
if (!isNaN(b)){ 
console.log("That isnt a number");
} else{
    console.log("Meaning of life " + (a * b));
}*/

//Strings

/*var myString = "I'm a 'fun'Duane String";
console.log(myString);
//Propert of a String
console.log(myString.length);
//Upper case:
console.log(myString.toUpperCase(myString));
//Index:
console.log(myString.indexOf("String"));
//Index doesnt exist: -1
console.log(myString.indexOf("Duane"));
if (myString.indexOf("Duane") === -1){
    console.log("The Word doesn't exist");
} else{
    console.log("The word Duane starts at position " +
    myString.indexOf("Duane"))
}*/

//Arrays []
/*var myArray = [1,"Hello There",5,"Happy Arrays"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray.sort());
console.log(myArray.reverse());*/

//Objects:
/*var myArray = new Array();
myArray[0] = 8;
myArray[1] = "Duane is the best";

console.log(myArray);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.Driver = "Duane";
myCar.drive = function () {
    console.log("Now Driving");
};

myCar.drive();

console.log(this);
var myCar2 = {
    maxSpeed: 90,
    driver: "Duane",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function(){console.log("Driver name " + this.driver);
}
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 2);*/

//Constructor Function
/*var Car = function(maxSpeed, driver){
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function(speed, time){
                console.log(speed * time);
        };
                this.logDriver = function(){
                    console.log("Driver Name is " + this.driver);
        };
    }

        var myCar = new Car(70, "Duane Fourie");
        var myCar2 = new Car(80, "Loule Fourie");
        var myCar3 = new Car(90, "Speed Mc Queen");
        var myCar4 = new Car(100, "King Edward");
        var myCar5 = new Car(110, "Boss Lady");

        myCar.drive(30,5);
        myCar3.logDriver();*/

//The Date object:

/*var myDate = new Date();
console.log(myDate);*/

/*var myPastDate = new Date(1545, 11, 27, 10,30,25);
var myFutureDate = new Date(2515, 0, 15, 12, 59, 59);

console.log(myPastDate);
console.log(myFutureDate);*/
/*var Birthday = new Date(1991, 11, 27, 15, 12, 18);
var Birthday2 = new Date(1991, 11, 27, 15, 12, 18);


//Get the month of the date(0-11)
console.log(Birthday.getMonth());
//Get the full Year (YYYY)
console.log(Birthday.getFullYear());
//Get the Date of the Month (1-31)
console.log(Birthday.getDate());
//Get the Day of the week (0-6)
console.log(Birthday.getDay());
//Get the hours of the date (0-23)
console.log(Birthday.getHours());
//Get the number of milliseconds since 1st Jan 1970
console.log(Birthday.getTime());

if(Birthday.getTime === Birthday2.getTime){
    console.log("Birthdays are the same");
} else{
    console.log("Birthdays are not the same");
}*/

//What is the DOM : Document object model
//Changing Content via the DOM


