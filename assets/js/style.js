$(window).scroll(function () {
  var headerHeight = $(".header").outerHeight();
  // kiểm tra điều kiện > header thì mới addClass
  if ($(window).scrollTop() > headerHeight) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }

  //scroll to div
  // if ($(this).scrollTop() >= $('.navigator').offset().top) {
  //     $('.navigator-container').addClass('fixed');
  //     $('.navigator-logo').show();
  // } else {
  //     $('.navigator-container').removeClass('fixed');
  //     $('.navigator-logo').hide();
  // }
});

/* back to top */
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0
    },
    "1000"
  );
});

$(document).ready(function () {
  // $("#check-in").datepicker();
  // $("#check-out").datepicker();

  // $("#check-in").flatpickr({
  //   dateFormat: "d/m/Y"
  // });
  // $("#check-out").flatpickr({
  //   dateFormat: "d/m/Y"
  // }); 
  $(".searchDate").flatpickr({
    mode: "range",
    minDate: "today",
    dateFormat: "M d,Y"
  });
});


$(document).mouseup(function (e) {
  if ($(e.target).closest(".actnumber").length === 0) {
    $(".actnumber").slideUp();
    $(".actbtn").removeClass("active");
  }
});


$(".hasChildren .menu-link").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).parents(".hasChildren").children(".submenu").slideToggle();
});

$(".header-nav .menu-toggle .hamburger").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).parents(".header-nav").children(".menu-nav").slideToggle();
});

//slider
$(".banner-slider").owlCarousel({
  loop: true,
  margin: 0,
  items:1,
  nav: false,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
});

$(".benefits-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});
$(".offers-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

$(".reviews-slider").owlCarousel({
  loop: true,
  margin: 10,
  items:1,
  nav: false,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  dots: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
});

$(".offers-inner-slider").owlCarousel({
  loop: true,
  margin: 0,
  items:1,
  nav: false,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
});


