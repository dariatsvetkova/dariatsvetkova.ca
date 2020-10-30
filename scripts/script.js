// MOBILE MENU

//Defining menu components:
const mobileNav = document.querySelector(".mobile-nav-icon");
const mobileNavIcon = mobileNav.querySelector("span");
const menuItems = document.querySelector(".menu-items");
const menuItemsAll = menuItems.querySelectorAll("a");
const menuLogo = document.querySelector(".main-menu .logo");

//Toggles menu overlay, menu icon type:
function toggleMobileMenu() {
    mobileNavIcon.classList.toggle("hamburger");    
    mobileNavIcon.classList.toggle("cross");
    menuItems.classList.toggle("menu-items-active");
}

//Listens for clicks on the menu icon:
mobileNav.addEventListener("click", toggleMobileMenu, false);

//Listenes for clicks on menu items:
for (let i = 0; i < menuItemsAll.length; i++) {
    menuItemsAll[i].addEventListener("click", toggleMobileMenu, false);
}
menuLogo.addEventListener("click", function() {
    if (menuItems.className === "menu-items menu-items-active") {
        toggleMobileMenu();
    }; 
}, false);


// PROJECTS DROP-DOWN TEXT

//Defining project cards:
const allProjects = document.querySelectorAll(".project");
const allDescriptions = document.querySelectorAll(".project-description")

function activateProject(project, description) {

    //activates/deactivates the project:
    project.classList.toggle("project-active");
    description.classList.toggle("project-description-active");

    //deactivates other projects, if active:
    for (var i = 0; i < allProjects.length; i++) {
        if (allProjects[i] !== project) {
            allProjects[i].classList.toggle("project-active", false);
        }
    } 

    //hides other description, if shown:
    for (let i = 0; i < allDescriptions.length; i++) {
        if (allDescriptions[i] !== description) {
            allDescriptions[i].classList.toggle("project-description-active", false);
        }
    }
}

//Event listeners for projects:
document.addEventListener("DOMContentLoaded", function() {

    allProjects.forEach( function(project) {

        let projectName = project.id.split("-")[0];

        project.addEventListener("click", function() { 
            activateProject(project, document.getElementById(projectName + "-description")); 
        }, false);
    });

}, false);