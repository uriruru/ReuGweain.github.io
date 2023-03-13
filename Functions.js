var thumbTitle = $(".thumb-title");
for (var i = 0; i <= thumbTitle.length; i++) {
  if (thumbTitle[i].innerHTML.length > 50) {
    var shortendTitle = thumbTitle[i].innerHTML.slice(0, 50);
    thumbTitle[i].innerHTML = shortendTitle.concat("...");
  }
}


/* I dunno this */
window.onload = function () {
  const boxes = document.querySelectorAll('.box');

  function checkWindowSize() {
    if (window.innerWidth <= 600) {
      boxes.forEach(box => box.style.width = "50%");
    } else {
      boxes.forEach(box => box.style.width = "25%");
    }
  }

  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
};

/* nav bar */

/* Jquery Smooth Scroll */


