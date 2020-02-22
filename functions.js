function change_image() {
  if (img_number == 1) {
    $("#top-home-img").css("background-image", "url('imgs/placeholder1.jpg')");
    img_number++;
  } else if (img_number == 2) {
    $("#top-home-img").css("background-image", "url('imgs/placeholder2.jpg')");
    img_number++;
  } else if (img_number == 3) {
    $("#top-home-img").css("background-image", "url('imgs/placeholder3.jpg')");
    img_number++;
  }
  else if (img_number == 4) {
    $("#top-home-img").css("background-image", "url('imgs/placeholder4.jpg')");
    img_number = 1;
  }
}

var img_number = 1;
setInterval(change_image, 2500);
