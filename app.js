const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);



//highlight menu when scrolling
var aboutAnchor = $("#about-anchor").offset().top;
var heightAnchor = $("#about-anchor").outerHeight();

if($(window).width() > 992) {
  $(window).scroll(function() {
    if($(window).scrollTop() > (aboutAnchor)) {
      $("#about-page").addClass("highlight");
      $("#work-page").removeClass("highlight");
    }
    else {
      $("#work-page").addClass("highlight");
      $("#about-page").removeClass("highlight");
    }
  })
}
//hightlight work by default
if($(window).width() > 992) {
  $(function() {
    $("#work-page").addClass("highlight")
  })
}

//highlight menu when clicking on menu
$(function() {                       //run when the DOM is ready
  $(".clickable").click(function() {  //use a class, since your ID gets mangled
    $(this).addClass("active");      //add the class to the clicked element
  });
});


//Show navbar when scrolling
var $navLogo = $(".navbar, .navbar__container, #navbar__logo, .navbar__toggle");
var $navMenu = $(".navbar__links, .navbar__item, .navbar__menu");


$(document).scroll(colorNavbar)

function colorNavbar() {
  $navLogo.toggleClass('background-col', $(this).scrollTop() > $(".navbar").height());
  $navMenu.toggleClass('background-col', $(this).scrollTop() > $(".navbar").height());
}
/*
if($(window).width() > 992) {
  $(function () {
    $(document).scroll(function () {
      
      $navLogo.toggleClass('background-col', $(this).scrollTop() > $(".navbar").height());
      $navMenu.toggleClass('background-col', $(this).scrollTop() > $(".navbar").height());
    });
  });
} 
*/

/*
if($(window).width() <= 992) {
  $(function () {
    $navLogo.addClass("background-col");
    $navMenu.addClass("background-col");
  });
}
*/




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


//adds highlight class to projects filters
//default highlights all
$('#all').addClass("highlight");
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
