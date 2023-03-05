// Start Scroller (Scrollbar )
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(height);

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop);
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// End Scroller (Scrollbar )

// Start menu
let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector("nav .close");

toggle.onclick = function () {
  nav.classList.add("open");
};
close.onclick = function () {
  nav.classList.remove("open");
};
// عند الضغط ع ذر ESC
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};

// End menu

// Start Scroll to Top
let up = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrolly);
  if (this.scrollY >= 500) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
  //using conditional operator
  //this.scrollY >= 500?up.classList.add("show") : up.classList.remove("show");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// End Scroll to Top

// Start tabs
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// End tabs

// Start Generate random serial
let btnEl = document.querySelector(".random .generate");
let serialEl = document.querySelector(".random .serial");

btnEl.onclick = function () {
  let characters =
    "123456789abcdefghigklemnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+}{]['\"";
  let charsCount = 10;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
};

// End Generate random serial

//Start Tabs section filter from all to spacfic

let switcherLis = document.querySelectorAll(".switcher li");

let imgs = Array.from(document.querySelectorAll(".gallery > img"));

switcherLis.forEach((li) => {
  li.addEventListener("click", function (e) {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
    });

    // console.log(e.currentTarget.dataset.cont);
    // console.log(document.getElementsByClassName(e.currentTarget.dataset.cont));

    imgs.forEach((img) => {
      // console.log(img.className);
      if (img.className == `card ${e.currentTarget.dataset.cont}`) {
        img.style.display = "block";
      }
    });
    // document.getElementsByClassName(
    //   e.currentTarget.dataset.cont
    // ).style.display = "block";
    // document.querySelectorAll(e.currentTarget.dataset.cont);
  });
});

// End Tabs section filter from all spacfic

// Radom Background Color using hex color example #ff00dd مكون من 6 ارقام يسبقهم علامه #

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let randomColor = [];
for (let i = 0; i < 6; i++) {
  randomColor.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${randomColor.join("")}`;

let randBackground = document.querySelector(".random-background");
randBackground.innerHTML = `Random Background When you refresh the page: ${finalColor} <div class="color"></div>`;
let randBackgroundColor = document.querySelector(".random-background .color");
randBackgroundColor.style.background = finalColor;

document.body.style.background = finalColor;
