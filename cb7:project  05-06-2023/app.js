import { listCart } from "./utils/fn.js";

const falseEl = document.querySelector(".false-list");
const trueEl = document.querySelector(".true-list");

const userList = [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    userList.push(...data);

    userList
      .filter((user) => user.completed === true && user.id <= 50)
      .forEach((user) => {
        falseEl.append(listCart(user));
        console.log(user);
      });
  })
  .then(() =>
    userList
      .filter((user) => user.completed === false && user.id <= 50)
      .forEach((user) => {
        trueEl.append(listCart(user));
      })
  );
//   data.map((contact) => {
//     if (contact.completed === true && contact.id <= 10) {

//     }
//   });
// });

// rootEl.append(listCart())
