let homepage = document.querySelector("body"),
  header = document.querySelector(".header");
function navmobile() {
  let btn = document.querySelector(".btnmobile"),
    menu = document.querySelector(".menumobile");
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
    btn.classList.toggle("active");
    homepage.classList.toggle("--disable-scroll");
  });
  function removeactive() {
    menu.classList.remove("active");
    btn.classList.remove("active");
    homepage.classList.remove("--disable-scroll");
  }
  window.addEventListener("resize", function () {
    let sz = window.innerWidth;
    console.log(sz);
    if (sz > 767) {
      removeactive();
    }
  });
}
navmobile();
function setHeader() {
  let scrollY = window.scrollY;
  if (scrollY > header.clientHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
document.addEventListener("scroll", function () {
  setHeader();
});
function accordion() {
  let btnacc = document.querySelectorAll(".accordion_list-item .btns");
  function removeactive() {
    btnacc.forEach(function (item, index) {
      item.classList.remove("active");
      var panel = item.nextElementSibling;
      panel.style.maxHeight = null;
    });
  }
  btnacc.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      var panel = item.nextElementSibling;
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        panel.style.maxHeight = null;
      } else {
        removeactive();
        this.classList.toggle("active");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
      // removeactive();
    });
  });
}
accordion();
