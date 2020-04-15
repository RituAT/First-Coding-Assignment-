/***********************************************************************/
//RITU ATALIYA 
//ICS4U0-C 
//DATE: APRIL 15 2020
//JAVASCRIPT FOR THE WORKER PROFILE 
/***********************************************************************/

// objects for the occupations- creates a drop down menu to choose from// 
var example_array = {
    ValueA : 'Plumber',
    ValueB : 'Dog Sitter',
    ValueC : 'Lawn Mower',
    ValueD : 'Babysitter',
    ValueE : 'Handicap Helper',
    ValueF : 'Painter',
    ValueG : 'Carpenter',
    ValueH : 'Snow Shoveller',
    ValueI : 'General Mechanic',
    ValueJ : 'Event Manager',
};
var select = document.getElementById("occupations");
for(index in example_array) {
    select.options[select.options.length] = new Option(example_array[index], index);
}

// Stores object values //
localStorage.setItem('example_array', JSON.stringify(example_array));
var example_array = JSON.parse(localStorage.getItem('example_array'))


//Window alert to notify user to input their information for their profile// 
window.alert("Welcome to At your service! Please fill out your profile information") 


