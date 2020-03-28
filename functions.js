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
