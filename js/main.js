(function ($) {
    'use-strict';

jQuery(document).ready(function ($) {
  menuOpenClose();

  $(window).scroll(function (i) {
    var offset = $(this).scrollTop();
    var headerHeight = $("#header-area").height();
    if (offset > headerHeight) {
      $("#header-area").addClass("sticky");
      $("#menu_icon").addClass("active-menu");
      menuTriigerOn();
    } else {
      $("#menu_icon").removeClass("active-menu");
      menuTriigerOff();
      $("#header-area").removeClass("sticky");
    }
  });

//   Confetti
var confettiSettings = {
  target: "my-canvas",
  size: 1,
  clock: 10,
  props: ["circle", "square", "triangle", "line"],
  start_from_edge: false,
  animate: true,
  rotate: true,
  respawn: true,
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();



// Typed
new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
});



});

function menuTriigerOff() {
  var menulist = $("#mainmenu li");
  menulist.each(function (i) {
    setTimeout(() => {
      $(this).removeClass("opened");
    }, i * 50);
  });
  $("#menu_icon i.fa.fa-bars").fadeIn();
  $("#menu_icon i.fa.fa-close").fadeOut();
}

function menuTriigerOn() {
  var menulist = $("#mainmenu li");
  var menuParent = $("#mainmenu");

  if (menuParent.hasClass("enable")) {
    $("#menu_icon i.fa.fa-bars").fadeOut();
    $("#menu_icon i.fa.fa-close").fadeIn();
    menulist.each(function (i) {
      setTimeout(() => {
        $(this).addClass("opened");
      }, i * 50);
    });
  }
}
function menuOpenClose() {
  // Menu Open Close
  $("#menu_icon").on("click", function () {
    $(this).toggleClass("active-menu");

    if ($(this).hasClass("active-menu")) {
      $("#mainmenu").addClass("enable");
      menuTriigerOn();
    } else {
      $("#mainmenu").removeClass("enable");
      menuTriigerOff();
    }
  });
}


}(jQuery));