const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const workMenu = document.querySelector("#work-page");
  let scrollPos = window.scrollY;
  

  // adds highlight class to my menu items
  //CHECK CONSOLE FOR RIGHT NUMBERS: uncomment following code in order to log to console to check numbers
  //console.log(scrollPos); 
  if(window.innerWidth > 1100 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    workMenu.classList.remove("highlight");
    return
  } else if (window.innerWidth > 1100 && scrollPos < 1850) {
    workMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    return
  } else if (window.innerWidth > 1100 && scrollPos < 4000) {
    aboutMenu.classList.add("highlight");
    workMenu.classList.remove("highlight");
    return
  }

  if((elem && window.innerWidth < 1100 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile menu when clicking on menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active")
  if(window.innerWidth <= 1100 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);


//adds highlight class to work filters
//default highlights all
$('.filter-active').click(function() {
    $(this).addClass('highlight');

    $('.filter-active').removeClass('highlight');
    $(this).addClass('highlight');
})

//filter content
$(document).ready(function(){
  $(".filter-active").click(function(){
    const value = $(this).attr("data-filter");
    if (value == "all"){
      $(".itemBox").fadeIn({duration: 1, easing: "linear"});
    }
    else {
      $(".itemBox").not("."+value).fadeOut({duration: 1, easing: "linear"});
      $(".itemBox").filter("."+value).fadeIn({duration: 1, easing: "linear"});
    }
  })
})

//copy email
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

//hover mobile
