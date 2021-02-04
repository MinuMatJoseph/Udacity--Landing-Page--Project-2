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
*/
const navLinks = document.querySelector(".header-list__items");
const sections = document.querySelectorAll(".section");
const topScrollBtn = document.querySelector("#top-button");

/**
 * 
 * 
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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// build the nav - for existing 'ul' element

function linkBar() {
    const fragment = document.createDocumentFragment();

    for (const section of sections) {
        const newLiElmt = document.createElement('li');
        const id = section.id;
        const navData = section.dataset.nav;
        const navLink = `<a class="item-link header-list__item-link section" href="#${id}">${navData}</a>`;
        newLiElmt.innerHTML = navLink;
        fragment.appendChild(newLiElmt);

    }

    //appending elements to the navigation//
    // navLinks.insertAdjacentHTML('beforeend',fragment );
    navLinks.appendChild(fragment);

    //top button not displayed
    topScrollBtn.style.display = "none";

};

linkBar();

// Set sections as active
// Add class 'active' to section when near top of viewport
for (const section of sections) {
    document.addEventListener("scroll", function() {
        const getAxis = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        if (getAxis.top <= 110 && getAxis.bottom >= 100) {
            document.querySelector(`[href="#${id}"]`).classList.add('active-link');
            // console.log("href",document.querySelector(`[href="#${id}"]`),  "section", section);
            section.classList.add("active-class");
        } else {
            document.querySelector(`[href="#${id}"]`).classList.remove('active-link');
            section.classList.remove("active-class");
        }
    });
}

// Scroll to section on link click
const clickLinks = document.querySelectorAll('.header-list__items li a');
for (clickLink of clickLinks) {
    clickLink.addEventListener("click", function(event) {
        // this.style.color = 'black';
        event.preventDefault();
        const navClickLink = document.querySelector(this.getAttribute("href"));
        navClickLink.scrollIntoView({
            behavior: "smooth"
        });
    });
};

// scroller - top button
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        topScrollBtn.style.display = "block";
    } else {
        topScrollBtn.style.display = "none";
    }
});

// Scroll to section on link click

topScrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});