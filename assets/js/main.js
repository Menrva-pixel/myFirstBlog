/* tidak berfungsi, di kerjakan nanti
function openTab(evt, projName) {

    var i, isiTab, tablink;
  

    isiTab = document.getElementsByClassName("isiTab");
    for (i = 0; i < isiTab.length; i++) {
      isiTab[i].style.display = "none";
    }
  
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
  
    document.getElementById(projName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("active").click();
  } 

   */
/* untuk transform style semua element yang ada di navbar */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add(
      "navbar-scrolled",
      "dropdown-menu-scrolled",
      "konten-drop-transform"
    );
  } else {
    navbar.classList.remove(
      "navbar-scrolled",
      "dropdown-menu-scrolled",
      "konten-drop-transform"
    );
  }
});
/*=========================================*/

/* untuk transform style element */
const perkenalan = document.querySelector(".perkenalan");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    perkenalan.classList.add("perkenalan-scrolled");
  } else {
    perkenalan.classList.remove("perkenalan-scrolled");
  }
});
/*======================================*/

/* untuk transform style element */
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    logo.classList.add("logo-rotated");
  } else {
    logo.classList.remove("logo-rotated");
  }
});
/*======================================*/
$(document).ready(function () {
  $(".post-card").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );
});

/**untuk menyembunyikan dan menampilkan elemen */
$(document).ready(function () {
  $(".tmbl1").click(function () {
    $(".youtube").hide();
  });
  $(".tmbl2").click(function () {
    $(".youtube").show();
  });
});
/*------------------------------------------*/

let mybutton = document.getElementById("goUp");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
/* untuk spesifik browser **/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(".profile-text").addGlow({
    radius: 20,
    textColor: "#ff0",
    haloColor: "#ffa",
    duration: 200,
  });
});

