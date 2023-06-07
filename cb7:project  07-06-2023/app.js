import { falseCart, trueCart } from "./utils/fn.js";

const falseEl = document.querySelector(".false-list");
const trueEl = document.querySelector(".true-list");
const allBtn = document.querySelector("#all");
const completedBtn = document.querySelector("#completed");
const notCompletedEl = document.querySelector(".false-contain");

const userList = [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    userList.push(...data);

    userList
      .filter((user) => user.completed === false && user.id <= 50)
      .forEach((user) => {
        falseEl.append(falseCart(user));
        console.log(user);
      });
  })
  .then(() =>
    userList
      .filter((user) => user.completed === true && user.id <= 50)
      .forEach((user) => {
        trueEl.append(trueCart(user));
      })
  );

completedBtn.addEventListener("click", () => {
  notCompletedEl.style.display = "none";
});

allBtn.addEventListener("click", () => {
  notCompletedEl.style.display = "flex";
  notCompletedEl.style.flexDirection = "column";
});
