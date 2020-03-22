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
