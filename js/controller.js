// query selectors
const bgAnimation = document.getElementById("bgAnimation");
const navbarContainer = document.querySelector(".navbar__links");
const navLink = document.querySelectorAll(".navbar__link");
const sectionAll = document.querySelectorAll(".section");
const navbarLinks = document.querySelectorAll(".navbar__link");
const closeNavBtn = document.querySelector(".mobile-nav__btn");
const mobileLinksContainer = document.querySelector(".mobile-nav__links");
const mobileLink = document.querySelectorAll(".mobile-nav__link");
const openNavBtn = document.querySelector(".hamburger__btn");

// bg animation
const numberOfBoxes = 1400;
for (let i = 0; i < numberOfBoxes; i++) {
  const colorBox = document.createElement("div");

  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}

// navbar change change active class
navbarContainer.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  const clicked = e.target.closest(".navbar__link");
  if (!clicked) return;

  const linkHash = clicked.getAttribute("href");

  console.log(clicked);

  console.log(linkHash);
  document
    .querySelector(`${linkHash}`)
    .scrollIntoView({ block: "center", behavior: "smooth" });

  navLink.forEach((t) => {
    t.classList.remove("active");
  });

  clicked.classList.toggle("active");
});

// observe sections
const sectionCallback = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting === true) {
    entry.target.classList.remove("hidden");

    navbarLinks.forEach((link) => {
      if (`#${entry.target.id}` === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
};

const sectionOptions = {
  root: null,
  threshold: 0.8,
};

const sectionObserver = new IntersectionObserver(
  sectionCallback,
  sectionOptions
);

sectionAll.forEach(function (section) {
  sectionObserver.observe(section);
});

// mobile navbar mechanics

mobileLinksContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".mobile-nav__link");
  if (!clicked) return;

  const linkHash = clicked.getAttribute("href");

  console.log(clicked);

  console.log(linkHash);
  document
    .querySelector(`${linkHash}`)
    .scrollIntoView({ block: "center", behavior: "smooth" });

  mobileLink.forEach((t) => {
    t.classList.remove("active");
  });

  clicked.classList.toggle("active");
  mobileLinksContainer.classList.toggle("hide");
});

openNavBtn.addEventListener("click", function () {
  mobileLinksContainer.classList.toggle("hide");
});

closeNavBtn.addEventListener("click", function () {
  mobileLinksContainer.classList.toggle("hide");
});
