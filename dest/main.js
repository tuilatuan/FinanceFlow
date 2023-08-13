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

function sliderReview() {
  let review = document.querySelector(".main .review");
  let num = 2;

  window.addEventListener("resize", function () {
    if (window.innerWidth < 600) {
      let num = 1;
    }
  });
  if (document.contains(review) == true) {
    var elem = document.querySelector(".review_carousel");
    console.log(elem);
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      groupCells: num,
      adaptiveHeight: true,
      initialIndex: 2,
      on: {
        ready: function () {
          let dotted = $(".flickity-page-dots");
          paging = $(".review_dotted");
          dotted.appendTo(paging);
        },
      },
    });
  }
}
sliderReview();
function popupVideo() {
  let video = document.querySelector(".video_imgbox-img"),
    btnclose = document.querySelector(".popupvideo_inner-iframe .close"),
    iframevideo = document.querySelector(".popupvideo_inner-iframe iframe"),
    modalVideo = document.querySelector(".popupvideo");
  video.addEventListener("click", function () {
    modalVideo.classList.add("active");
    homepage.classList.add("--disable-scroll");

    let code = video.getAttribute("data-video-src");
    iframevideo.setAttribute("src", `https://www.youtube.com/embed/${code}?autoplay=1`);
  });
  function closeModal() {
    modalVideo.classList.remove("active");
    iframevideo.setAttribute("src", ``);
    homepage.classList.remove("--disable-scroll");
  }
  btnclose.addEventListener("click", function () {
    closeModal();
  });
  modalVideo.addEventListener("click", function () {
    closeModal();
  });
}
popupVideo();
