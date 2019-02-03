"use strict";

var nameFirst = prompt("What is your first name?");
var nameRap = prompt("What is your rap name?");
var nameFirstRap = nameFirst + nameRap;
var nameLength = nameFirstRap.length;

document.write("Hello ", nameFirst, " also known as ", nameRap, ". The combined characters in both of your names is ",nameLength,".");
