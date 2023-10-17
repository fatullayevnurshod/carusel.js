// let maydon_1 = document.querySelector(".maydon");
// let ball = document.querySelector(".top");

// maydon_1.onclick = function (event) {
//   console.log(event.clientX);
//   console.log(event.clientY);
// };

// console.log("here");

let left = document.querySelector(".left");

let right = document.querySelector(".right");
let imgs = document.querySelectorAll(".img");
let maydon = document.querySelector(".maydon");
let input = document.querySelector("input");
let nuqtalar = document.querySelectorAll(".nuqta");
let son = 0;

imgs[son].style.transform = `translateX(` + `${-600 * son}px)`;

right.onclick = function () {
  son >= imgs.length - 1 ? (son = -1) : son;
  maydon.style.transition = "2s all ease-in-out";
  son++;
  maydon.style.transform = `translateX(` + `${-600 * son}px)`;
};

left.onclick = function () {
  if (son == 0) son = imgs.length;

  son--;
  maydon.style.transform = `translateX(` + `${-600 * son}px)`;
};

input.onclick = function () {
  input.addEventListener("keydown", function (event) {
    console.log(event.key);
    // console.log(input.value);
    maydon.style.transition = "2s all ease-in-out";
    son = input.value;
    son >= imgs.length ? (son = 0) : son;
    maydon.style.transform = `translateX(` + `${-600 * son}px)`;
    input.value = "";
  });
};
// console.log(nuqtalar);

nuqtalar[0].onclick = function () {
  maydon.style.transform = `translateX(` + `${0}px)`;
};

nuqtalar[1].onclick = function () {
  maydon.style.transition = "2s all ease-in-out";
  maydon.style.transform = `translateX(` + `${-600}px)`;
};

nuqtalar[2].onclick = function () {
  maydon.style.transition = "2s all ease-in-out";
  maydon.style.transform = `translateX(` + `${-600 * 2}px)`;
};

nuqtalar[3].onclick = function () {
  maydon.style.transition = "2s all ease-in-out";
  maydon.style.transform = `translateX(` + `${-600 * 3}px)`;
};

nuqtalar[4].onclick = function () {
  maydon.style.transition = "2s all ease-in-out";
  maydon.style.transform = `translateX(` + `${-600 * 4}px)`;
};

nuqtalar[5].onclick = function () {
  maydon.style.transition = "2s all ease-in-out";
  maydon.style.transform = `translateX(` + `${-600 * 5}px)`;
};
