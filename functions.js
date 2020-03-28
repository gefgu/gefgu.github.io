// PRELOAD IMAGES

var images_array = ['imgs/placeholder1.jpg', 'imgs/placeholder2.jpg',
                  'imgs/placeholder3.jpg', 'imgs/placeholder4.jpg',
                'imgs/img-5.jpg', 'imgs/gustavo.jpg']

function preloadImages() {
  for (x of images_array) {
    var img = new Image();
    img.src = x;
  }
}

preloadImages();

// SHOW EMAIL

function showEmail() {
  $(".email").css("visibility", "visible").css("opacity", "1");
}

// BUTTON GO TOP

mybutton = $("#btnGoTop");

window.onscroll = function () {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.css("visibility", "visible").css("opacity", "0.75");
  } else {
    mybutton.css("visibility", "hidden").css("opacity", "0");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FADE IN AT SCROLL
function fadeInScroll(selector) {
  elem = $(selector);

  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  if (((elemBottom <= docViewBottom) && (elemTop >= docViewTop))) {
    elem.css("opacity", "1");
  }
}
console.log($(window).scrollTop() - $(".point-plan").first().height())
$(window).scroll(function() {
  fadeInScroll(".point-plan"),
  fadeInScroll(".point-develop"),
  fadeInScroll(".point-deliver")
});
