let button = document.querySelector('.btn-toggle-nav');
let navButtons = document.getElementsByClassName('inner-link');
let navBar = document.getElementById('mobile-nav');
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarTitle = document.querySelector(".nav-sidebar span");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let navIcons = document.getElementsByTagName('svg');
let socialIcons = document.getElementById('nav-icons').style.opacity = "0";


let toggleNav = function() {
  let newIcon = document.createElement('IMG');
  button.style.backgroundImage = "url(images/whiteburger.png)";
  button.setAttribute('onclick', 'hideSideBar()');
  document.querySelector('.close-nav').appendChild(newIcon);
  document.getElementById('nav-icons').style.opacity = "1";
  
  getSidebar.style.width = "100%";
  getSidebar.style.opacity = "1";
  getSidebarTitle.style.opacity = "1";
  

  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1";
  }
  
  getSidebarUl.style.visilbility = "visible";
  toggleNavStatus = true; 
} 
  
const hideSideBar = function() {
  let newIcon = document.querySelector('.close-nav');
  //trickyIcon = document.getElementById('annoying-icon');

  button.style.backgroundImage = "url('images/burger.png')";
  button.setAttribute('onclick', 'toggleNav()');
  getSidebar.style.width = "0%";
  getSidebarTitle.style.opacity = "0";
  document.getElementById('nav-icons').style.opacity = "0";
  
  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }

  getSidebarUl.style.visilbility = "hidden";
  toggleNavStatus = false;
}

