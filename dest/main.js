function initLoaded() {
  let loadedCount = 0,
    imgs = document.querySelectorAll("img").length,
    body = document.querySelector("body");

  let imgLoaded = imagesLoaded(body);

  imgLoaded
    .on("progress", (instance) => {
      loadedCount++;
      percent = Math.floor((loadedCount / imgs) * 100);
      handleLoading(percent);
    })
    .on("always", (instance) => {
      console.log("always");
    })
    .on("fail", (instance) => {
      console.log("fail");
    })
    .on("done", (instance) => {
      console.log("done");
      hideLoad();
      sliderReview();
    });

  function handleLoading(percent) {
    const progess = document.querySelector(".loading__inner-progess"),
      textProgess = document.querySelector(".loading__percent");
    progess.style.width = `${percent}%`;
    textProgess.innerHTML = `${percent}%`;
  }
  function hideLoad() {
    let load = document.querySelector(".loading");
    body.classList.remove("--disable-scroll");
    load.classList.add("--is-loaded");
  }
}
initLoaded();
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
  let btnacc = document.querySelectorAll(".accordion__list--item .btns");
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
function popupVideo() {
  let video = document.querySelector(".video .video__imgbox--img"),
    btnclose = document.querySelector(".popupvideo__inner--iframe .close"),
    iframevideo = document.querySelector(".popupvideo__inner--iframe iframe"),
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
  let btns = document.querySelectorAll(".listblog__top--btns .btn"),
    list = document.querySelectorAll(".listblog__gr .listblog__gr--list");
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
function validateForm() {
  let from = document.querySelector(".formcontact__boxs--form "),
    inputName = document.querySelector(".name input"),
    inputSub = document.querySelector(".subject input");
  (email = document.querySelector(".formgr input[type='email']")),
    (gremail = document.querySelector(".formcontact__boxs--form .email"));
  kq = true;
  const emailRegex = /^\S+@\S+\.\S+/;
  // /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email.value == null || email.value == "") {
    gremail.classList.add("err");
    document.querySelector(".email .messageipt").innerHTML = "Please  fill in this field";
    return false;
  } else if (emailRegex.test(email.value) == false) {
    gremail.classList.add("err");
    document.querySelector(".email .messageipt").innerHTML = "Wrong Format";
    return false;
  }
  if (inputName.value == null || inputName.value == "") {
    document.querySelector(".naem .messageipt").innerHTML = "Please  fill in this field";
    document.querySelector(".formcontact__boxs--form .name").classList.add("err");
    return false;
  }
  if (inputSub.value == null || inputSub.value == "") {
    document.querySelector(".subject .messageipt").innerHTML = "Please  fill in this field";
    document.querySelector(".formcontact__boxs--form .subject").classList.add("err");
    return false;
  }
  return true;
}
// desc = document.querySelectorAll(".review__carousel .item .desc");

function sliderReview() {
  let review = document.querySelector(".main .review .review__carousel");
  var flktySlide = new FlickityResponsive(review, {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    groupCells: 2,
    initialIndex: 1,
    prevNextButtons: false,
    on: {
      ready: function () {
        setH();
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          cellAlign: "center",
        },
      },

      {
        breakpoint: 768,
        settings: {
          groupCells: 1,
        },
      },
    ],
  });

  function setH() {
    let contents = document.querySelectorAll(".review__carousel .item .desc");
    // slides = document.querySelectorAll(".review__carousel .item");
    let hmaxItem = 0,
      hitem = 0;

    contents.forEach(function (item, index) {
      item.style.height = `auto`;
      hitem = item.offsetHeight;
      console.log(hitem);
      if (hmaxItem < hitem) {
        hmaxItem = hitem;
      }
    });
    contents.forEach(function (item) {
      item.style.height = `${hmaxItem}px`;
    });
  }
  window.addEventListener("resize", () => {
    setH();
    flktySlide.resize();
  });
}
