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
        let childDivContent= document.getElementById("contentArea");
        h3Element.textContent = "Jack Ingram 100710241";
        childDivContent.insertBefore(h3Element, buttonElement);

        //change paragraph contents of the id =  firstParagraph
        let firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = "JavaScript is a prototype-based language, and every object in "
        + "JavaScript has a hidden internal property called Prototype that can be used to extend "
        + "object properties and methods."

        //hide element with the id = firstParagraph
        firstParagraph.style.display = "none";

        //event listener for mouse click on the large button element with a function to hide paragraph element depending on the buttons text content.
        buttonElement.addEventListener("click", function(){
            if(buttonElement.textContent == "Learn More")
            {
                firstParagraph.style.display = "block";
                buttonElement.textContent = "Hide Details";
            }
            else if (buttonElement.textContent == "Hide Details")
            {
              firstParagraph.style.display = "none";
              buttonElement.textContent = "Learn More";
            }
        });
    
    }



    window.addEventListener("load", Start);
})(app || (app = {}));

