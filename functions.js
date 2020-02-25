var images_array = ['imgs/placeholder1.jpg', 'imgs/placeholder2.jpg',
                  'imgs/placeholder3.jpg', 'imgs/placeholder4.jpg',
                'imgs/img-5.jpg', 'imgs/gustavo.jpg']

// Preload Images
function preloadImages() {
  for (x of images_array) {
    var img = new Image();
    img.src = x;
  }
}

preloadImages();


function change_image() {
  if (img_number == 1) {
    $("#top-home-img").css("background-image", "url("+ images_array[0] +")");
    img_number++;
  } else if (img_number == 2) {
    $("#top-home-img").css("background-image", "url("+ images_array[1] +")");
    img_number++;
  } else if (img_number == 3) {
    $("#top-home-img").css("background-image", "url("+ images_array[2] +")");
    img_number++;
  }
  else if (img_number == 4) {
    $("#top-home-img").css("background-image", "url("+ images_array[3] +")");
    img_number = 1;
  }
}

var img_number = 1;
setInterval(change_image, 2500);

// Scroll Load

$(window).scroll(function() {
    if(document.getElementsByClassName("about")[0].getBoundingClientRect()["y"] < 1200 && $(".about").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
      $(".about").css("transform", "scale(1)")
    }
});

$(window).scroll(function() {
    if(document.getElementsByClassName("projects")[0].getBoundingClientRect()["y"] < 1400 && $(".projects").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
      $(".projects").css("transform", "scale(1)")
    }
});

$(window).scroll(function() {
    if(document.getElementsByClassName("hire-me")[0].getBoundingClientRect()["y"] < 900 && $(".hire-me").css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
      $(".hire-me").css("transform", "scale(1)")
    }
});


// TODO: Load at scroll
// TODO: Add the real PROJECTS
// TODO: Send to Jean
