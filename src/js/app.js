window.addEventListener("scroll", function() {
    var isScrolling = window.pageYOffset > 0;
    document.querySelector(".menu").style.backgroundColor = isScrolling ? "transparent" : "#fff";
  });
  