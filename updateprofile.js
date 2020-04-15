/***********************************************************************/
// RITU ATALIYA 
// ICS4U0-C 
//DATE: APRIL 15 2020
//JAVASCRIPT TO UPDATE THE WORKER'S PROFILE 
/***********************************************************************/

//local storage, for the worker to update their Occupation// 
function mySavef() {
        var Occupation = 
document.getElementById("myTextareaz").value;
        localStorage.setItem("Occupation", Occupation);
      }
function myLoad() {
var Occupation = localStorage.getItem("Occupation");
document.getElementById("myTextarea").value = Occupation;
      }

//local storage, for the worker to update their Address text entry// 
function mySave() {
        var Address = 
document.getElementById("myTextarea").value;
        localStorage.setItem("Address", Address);
      }
function myLoad() {
var Address = localStorage.getItem("Address");
document.getElementById("myTextarea").value = Address;
      }

//local storage, for the worker to update the days of the week in which they are avaliable//
function Save() {
        var Daysoftheweek = 
document.getElementById("Textarea").value;
        localStorage.setItem("Daysoftheweek", Daysoftheweek);
      }
function myLoad() {
var Daysoftheweek = localStorage.getItem("Daysoftheweek");
document.getElementById("Textarea").value = Daysoftheweek;
      }

//local storage, for the worker to update their Timings text entry//
function Savez() {
        var Timings = 
document.getElementById("RTextarea").value;
        localStorage.setItem("Timings", Timings);
      }
function myLoad() {
var Timings = localStorage.getItem("Timings");
document.getElementById("RTextarea").value = Timings;
      }

//local storage, for the worker to update their Area of Avaliability text entry //
function Savess() {
        var AOA = 
document.getElementById("RRTextarea").value;
        localStorage.setItem("AOA", AOA);
      }
function myLoad() {
var AOA = localStorage.getItem("AOA");
document.getElementById("RRTextarea").value = AOA;
      }

//local storage for the worker to update Bio Entry//
function Saver() {
        var Bio = 
document.getElementById("Textareaa").value;
        localStorage.setItem("Bio", Bio);
      }
function myLoad() {
var Bio = localStorage.getItem("Bio");
document.getElementById("Textareaa").value = Bio;
      }

//local storage for the worker to update Past Experience text entry//
function Saverz() {
        var PastE = 
document.getElementById("Textareaas").value;
        localStorage.setItem("PastE", PastE);
      }
function myLoad() {
var PastE = localStorage.getItem("PastE");
document.getElementById("Textareaas").value = PastE;
      }
