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
  if (document.contains(review) == true) {
    var elem = document.querySelector(".review_carousel");
    const flrespon = new FlickityResponsive(elem, {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      groupCells: 2,
      prevNextButtons: false,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       wrapAround: true,
      //       cellAlign: "center",
      //       groupCells: 2,
      //     },
      //   },
      // ],
      on: {
        ready: function () {
          let dotted = $(".flickity-page-dots"),
            post = document.querySelectorAll(".review_carousel .item"),
            paging = $(".review_dotted");
          dotted.appendTo(paging);
          //set heigthitem
          let hmax = 0,
            hitem = 0;
          post.forEach(function (item, index) {
            let hitem = item.scrollHeight;
            if (hmax < hitem) {
              hmax = hitem;
            }
          });
          post.forEach(function (item, index) {
            item.style.height = `${hmax}px`;
          });
        },
      },
    });
  }
}
sliderReview();
function popupVideo() {
  let video = document.querySelector(".video .video_imgbox-img"),
    btnclose = document.querySelector(".popupvideo_inner-iframe .close"),
    iframevideo = document.querySelector(".popupvideo_inner-iframe iframe"),
    modalVideo = document.querySelector(".popupvideo");
  if (document.contains(video) == true) {
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
}
popupVideo();
function changeBloglist() {
  let btns = document.querySelectorAll(".listblog_top-btns .btn"),
    list = document.querySelectorAll(".listblog_gr .listblog_gr-list");
  function removeactive() {
    btns.forEach(function (item, index) {
      item.classList.remove("active");
    });
    list.forEach(function (item, index) {
      item.classList.remove("active");
    });
  }
  btns.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      removeactive();
      item.classList.add("active");
      let typebtn = item.getAttribute("data-type");
      list.forEach(function (item, index) {
        let typeitem = item.getAttribute("data-type");
        if (typeitem == typebtn) {
          item.classList.add("active");
        }
      });
    });
  });
}
changeBloglist();
