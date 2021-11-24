// click img and scale img in boximg
let imgScale = document.querySelectorAll(".setImg img");
let boximages = document.getElementById("boximg");

window.onload = function () {
  boximages.style.display = "none";
  imgScale.forEach((scale) => {
    scale.onclick = function () {
      boximages.style.display = "block";
      let setSrc = scale.getAttribute("Src");
      document.getElementById("copyImg").setAttribute("src", setSrc);
      boximages.onclick = function () {
        boximages.style.display = "none";
      };
    };
  });
};

// start in filter img
let li = document.querySelectorAll(".filter li");
let img = document.querySelectorAll(".img-filter img");

function filte() {
  li.forEach(function (element) {
    img.forEach(function (imgs) {
      imgs.style.display = "none";
    });
    element.onclick = function () {
      img.forEach(function (imgs) {
        imgs.style.display = "none";
      });

      document
        .querySelectorAll(element.getAttribute("data-cat"))
        .forEach(function (data) {
          data.style.display = "block";
        });
    };
  });
}
filte();

// start in progress skills

let sectionPrgres = document.getElementById("ourSkill");
let progres = document.querySelectorAll(".the-progress span");

function ProgresSpan() {
  if (window.scrollY >= sectionPrgres.offsetTop - 400) {
    progres.forEach((span) => {
      span.style.width = span.dataset.width;
      console.log("dd");
    });
  }
};

// start in counter numbers

let nums = document.querySelectorAll(".nums .num");
let section = document.getElementById("counter");
let started = true;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (started) {
      counterNumbers();
    }
    started = false;
  }

  // function back to top
 function btnContainerTop() {

      let ContainerTop = document.getElementById("ContainerTop");
      let BackTop = document.getElementById("backTop");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          ContainerTop.style.display = "block";
          BackTop.onclick =  function() {
            document.documentElement.scrollTop = 10 + "px"
          }
    }else{
        ContainerTop.style.display = "none";
    }
  };
  btnContainerTop();
  ProgresSpan();
};

// counter our awesome stats 
function counterNumbers() {
  nums.forEach((num) => {
    let intervalCount = setInterval(() => {
      num.textContent++;
      if (num.textContent == num.dataset.goal) {
        clearInterval(intervalCount);
      }
    }, 1000 / num.dataset.goal);
  });
}
