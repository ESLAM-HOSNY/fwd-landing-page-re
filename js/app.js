/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// build the nave bar list and the anchor ID 
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
const navBar = document.getElementById("navbar__list") ;
const navBarList=navBar.innerHTML= `
<li><a href="#section1">section1</li>
<li><a href="#section2">section2</li>
<li><a href="#section3">section3</li>
<li><a href="#section4">section4</li>
<li><a href="#section5">section5</li>
`;


 //navBar.style.backgroundColor="black";
//navBar.style.padding= "30px";


navBar.style.background="black";

//navBar.style.padding= "30px";
navBar.style.padding= "30px";
const li =document.getElementsByTagName("li");
li[0].style.marginLeft="30%";


// add button function    display of button and go up on page
// 
const upButton = document.getElementById("up");

window.onscroll=function(){
    "use strict";
    if(window.pageYOffset>=401){
    upButton.style.display="block"; 
    }if (window.pageYOffset<=400) {
        upButton.style.display="none" ;
        
    };
};
upButton.onclick  =function(){
    window.scrollTo(0,0);
};










// Add class 'active' to  when near top of viewport
const sections =  document.querySelectorAll("section");
window.addEventListener("scroll",  function (){
    
    sections.forEach(section => {
        const pageTop = section.offsetTop;
        const pagehigth = section.offsetHeight;


        if (pageYOffset > (pageTop - pagehigth /3)) {
            section.previousElementSibling.removeAttribute("class","your-active-class");
            section.nextElementSibling.removeAttribute("class","your-active-class");
            if (! section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
                
                
                
            
        }};
    });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



