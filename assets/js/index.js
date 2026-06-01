var savedTheme = localStorage.getItem("theme");
var savedColorTheme = localStorage.getItem("colorTheme");

if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}
if (savedColorTheme) {
  document.documentElement.style = savedColorTheme;
}

//! Theme Event

var themeBtn = document.getElementById("theme-toggle-button");

themeBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "");
  }
});

//! SideBar Event

var settingBtn = document.getElementById("settings-toggle");
var sidebar = document.getElementById("settings-sidebar");
var closeBtn = document.getElementById("close-settings");

settingBtn.addEventListener("click", function () {
  sidebar.classList.replace("translate-x-full", "translate-x-0");
  settingBtn.style.transform = "translateX(-320px)";
});
function closeSideBar() {
  sidebar.classList.replace("translate-x-0", "translate-x-full");
  settingBtn.style.transform = "translateX(0)";
}
closeBtn.addEventListener("click", function () {
  closeSideBar();
});

//! Change Font Event

var fontButtons = document.querySelectorAll(".font-option");

function removeActive() {
  fontButtons[0].classList.remove(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );

  fontButtons[1].classList.remove(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );

  fontButtons[2].classList.remove(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );

  fontButtons[0].classList.add("border-slate-200", "dark:border-slate-700");

  fontButtons[1].classList.add("border-slate-200", "dark:border-slate-700");

  fontButtons[2].classList.add("border-slate-200", "dark:border-slate-700");
}

function activateFont(button, fontName) {
  removeActive();

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo",
  );

  button.classList.remove("border-slate-200", "dark:border-slate-700");

  button.classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );

  document.body.classList.add(fontName);

  localStorage.setItem("font", fontName);
}

fontButtons[0].addEventListener("click", function () {
  activateFont(fontButtons[0], "font-alexandria");
});

fontButtons[1].addEventListener("click", function () {
  activateFont(fontButtons[1], "font-tajawal");
});

fontButtons[2].addEventListener("click", function () {
  activateFont(fontButtons[2], "font-cairo");
});

var savedFont = localStorage.getItem("font");

if (savedFont === "font-alexandria") {
  activateFont(fontButtons[0], "font-alexandria");
}

if (savedFont === "font-tajawal") {
  activateFont(fontButtons[1], "font-tajawal");
}

if (savedFont === "font-cairo") {
  activateFont(fontButtons[2], "font-cairo");
}

//! Reset Button

var resetBtn = document.getElementById("reset-settings");

resetBtn.addEventListener("click", function () {
  closeSideBar();
  activateFont(fontButtons[1], "font-tajawal");
  for (var i = 0; i < colorBtns.children.length; i++) {
    colorBtns.children[i].classList.remove(
      "active",
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  }
  colorBtns.children[0].classList.add(
    "active",
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );
  document.documentElement.style =
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;";
  localStorage.setItem(
    "colorTheme",
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;",
  );
});

//! NavBar Events

var navLinks = document.querySelector(".nav-links");

for (var i = 0; i < navLinks.children.length; i++) {
  navLinks.children[i].addEventListener("click", function (e) {
    for (var j = 0; j < navLinks.children.length; j++) {
      navLinks.children[j].classList.remove("active");
    }

    e.target.classList.add("active");
  });
}
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  if (window.scrollY >= sections[0].offsetTop - 100) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[0].classList.add("active");
  }

  if (window.scrollY >= sections[1].offsetTop - 100) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[1].classList.add("active");
  }

  if (window.scrollY >= sections[2].offsetTop - 100) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[2].classList.add("active");
  }
  if (window.scrollY >= sections[3].offsetTop - 50) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[3].classList.add("active");
  }
  if (window.scrollY >= sections[4].offsetTop - 50) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[4].classList.add("active");
  }
  if (window.scrollY >= sections[5].offsetTop - 50) {
    for (var i = 0; i < navLinks.children.length; i++) {
      navLinks.children[i].classList.remove("active");
    }
    navLinks.children[5].classList.add("active");
  }
});

//! Scroll To Top Event

var scroollTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= sections[0].offsetTop + 100) {
    scroollTopBtn.classList.remove("opacity-0", "invisible");
  }
  if (window.scrollY < sections[0].offsetTop + 100) {
    scroollTopBtn.classList.add("opacity-0", "invisible");
  }
});

scroollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

//! Mobile Menu Nav
var mobileMenuBtn = document.createElement("button");
mobileMenuBtn.className =
  "mobile-menu-btn lg:hidden text-slate-900 dark:text-white text-2xl focus:outline-none";
mobileMenuBtn.setAttribute("aria-label", "فتح القائمة");
mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
document.querySelector("#header").firstElementChild.appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

//! Nav&Tabs Events

var tabsBtns = document.getElementById("portfolio-filters");
var allProjects = document.getElementById("portfolio-grid").children;
var webProjects = document.querySelectorAll('[data-category="web"]');
var appProjects = document.querySelectorAll('[data-category="app"]');
var designProjects = document.querySelectorAll('[data-category="design"]');
var ecommerceProjects = document.querySelectorAll(
  '[data-category="ecommerce"]',
);

function viewTabs(element) {
  // 1- اخفي الكل (animation out)
  for (var i = 0; i < allProjects.length; i++) {
    allProjects[i].style.transition = "opacity 0.3s, transform 0.3s";
    allProjects[i].style.opacity = "0";
    allProjects[i].style.transform = "scale(0.8)";
  }
  document.body.offsetHeight;

  for (var i = 0; i < allProjects.length; i++) {
    allProjects[i].style.display = "none";
  }

  for (var i = 0; i < element.length; i++) {
    element[i].style.display = "block";

    element[i].style.transition = "opacity 0.3s, transform 0.3s";
    element[i].style.opacity = "0";
    element[i].style.transform = "scale(0.8)";

    element[i].offsetHeight;

    element[i].style.opacity = "1";
    element[i].style.transform = "scale(1)";
  }
}

function activateTabsBtn(element) {
  for (var i = 0; i < tabsBtns.children.length; i++) {
    tabsBtns.children[i].classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "shadow-lg",
      "shadow-primary/50",
    );
  }
  element.classList.add(
    "active",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "shadow-lg",
    "shadow-primary/50",
  );
}

tabsBtns.children[0].addEventListener("click", function () {
  viewTabs(allProjects);
  activateTabsBtn(tabsBtns.children[0]);
});
tabsBtns.children[1].addEventListener("click", function () {
  viewTabs(webProjects);
  activateTabsBtn(tabsBtns.children[1]);
});
tabsBtns.children[2].addEventListener("click", function () {
  viewTabs(appProjects);
  activateTabsBtn(tabsBtns.children[2]);
});
tabsBtns.children[3].addEventListener("click", function () {
  viewTabs(designProjects);
  activateTabsBtn(tabsBtns.children[3]);
});
tabsBtns.children[4].addEventListener("click", function () {
  viewTabs(ecommerceProjects);
  activateTabsBtn(tabsBtns.children[4]);
});

//! Carousel Events

var carouselSlider = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");

var currentSlide = 0;

var maxSlide = cards.length - 3;

var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");

var indicators = document.querySelectorAll(".carousel-indicator");

function updateSlider() {
  var cardWidth = cards[0].offsetWidth;
  carouselSlider.style.transform = `translateX(${currentSlide * cardWidth}px)`;

  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("bg-accent", "scale-125", "active");

    indicators[i].classList.add("bg-slate-400");
  }
  indicators[currentSlide].classList.remove("bg-slate-400");

  indicators[currentSlide].classList.add("active", "bg-accent", "scale-125");
}

nextBtn.addEventListener("click", function () {
  if (currentSlide < maxSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  updateSlider();
});

prevBtn.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlide;
  }

  updateSlider();
});

indicators.forEach(function (indicator, index) {
  indicator.addEventListener("click", function () {
    currentSlide = index;

    updateSlider();
  });
});

updateSlider();

//! Website Color theme

function changeColor(element, primary, secondary, accent) {
  for (var i = 0; i < colorBtns.children.length; i++) {
    colorBtns.children[i].classList.remove(
      "active",
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  }
  element.classList.add(
    "active",
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );
  document.documentElement.style =
    "--color-primary: " +
    primary +
    "; --color-secondary: " +
    secondary +
    "; --color-accent: " +
    accent +
    ";";
  localStorage.setItem(
    "colorTheme",
    "--color-primary: " +
      primary +
      "; --color-secondary: " +
      secondary +
      "; --color-accent: " +
      accent +
      ";",
  );
}

var colorBtns = document.getElementById("theme-colors-grid");

colorBtns.children[0].addEventListener("click", function () {
  changeColor(colorBtns.children[0], "#6366f1", "#8b5cf6", "#a855f7");
});
colorBtns.children[1].addEventListener("click", function () {
  changeColor(colorBtns.children[1], "#ec4899", "#f97316", "#fb923c");
});
colorBtns.children[2].addEventListener("click", function () {
  changeColor(colorBtns.children[2], "#10b981", "#14b8a6", "#2dd4bf");
});
colorBtns.children[3].addEventListener("click", function () {
  changeColor(colorBtns.children[3], "#3b82f6", "#06b6d4", "#22d3ee");
});
colorBtns.children[4].addEventListener("click", function () {
  changeColor(colorBtns.children[4], "#8b5cf6", "#c084fc", "#e879f9");
});
colorBtns.children[5].addEventListener("click", function () {
  changeColor(colorBtns.children[5], "#f43f5e", "#fb7185", "#fda4af");
});

if (
  savedColorTheme ===
  "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;"
) {
  changeColor(colorBtns.children[0], "#6366f1", "#8b5cf6", "#a855f7");
} else if (
  savedColorTheme ===
  "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;"
) {
  changeColor(colorBtns.children[1], "#ec4899", "#f97316", "#fb923c");
} else if (
  savedColorTheme ===
  "--color-primary: #10b981; --color-secondary: #14b8a6; --color-accent: #2dd4bf;"
) {
  changeColor(colorBtns.children[2], "#10b981", "#14b8a6", "#2dd4bf");
} else if (
  savedColorTheme ===
  "--color-primary: #3b82f6; --color-secondary: #06b6d4; --color-accent: #22d3ee;"
) {
  changeColor(colorBtns.children[3], "#3b82f6", "#06b6d4", "#22d3ee");
} else if (
  savedColorTheme ===
  "--color-primary: #8b5cf6; --color-secondary: #c084fc; --color-accent: #e879f9;"
) {
  changeColor(colorBtns.children[4], "#8b5cf6", "#c084fc", "#e879f9");
} else if (
  savedColorTheme ===
  "--color-primary: #f43f5e; --color-secondary: #fb7185; --color-accent: #fda4af;"
) {
  changeColor(colorBtns.children[5], "#f43f5e", "#fb7185", "#fda4af");
}
