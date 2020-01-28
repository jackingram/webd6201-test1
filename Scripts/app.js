/*
    Student Name  : Jack Ingram
    StudentID     : 100710241
    Date Completed: Jan 28th 2019
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        //change text content from "Large Button" to "Learn More"
        let buttonElement = document.getElementById("largeButton");
        buttonElement.textContent = "Learn More";

        //add personal student info (name and student id to a new h3 element and insert it before the large button)
        let h3Element = document.createElement("h3");
        let mainDivContent = document.getElementById("mainContent");
        h3Element.textContent = "[Jack Ingram] [100710241]";
        .insertBefore(h3Element, buttonElement);
        console.log(buttonElement);



    }



    window.addEventListener("load", Start);
})(app || (app = {}));

