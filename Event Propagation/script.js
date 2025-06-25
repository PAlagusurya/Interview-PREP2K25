const button = document.querySelector("button");
const form = document.querySelector("form");
const div = document.querySelector("div");

//EVENT BUBBLING
button.addEventListener("click", function () {
  alert("BUTTON");
});

//To stop propogating after this
form.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("FORM");
});

div.addEventListener("click", function () {
  alert("DIV");
});

//OUTPUT QUESTIONS:

// button.addEventListener("click", func);

// form.addEventListener("click", func);

// div.addEventListener("click", func);

// function func(e) {
//   alert(
//     "current " +
//       e.currentTarget.tagName +
//       " target " +
//       e.target.tagName +
//       " this " +
//       this.tagName
//   );
// }

//EVENT TRICKLING/CAPTURING
/*button.addEventListener(
  "click",
  function () {
    alert("BUTTON");
  },
  {
    capture: true,
  }
);

form.addEventListener(
  "click",
  function () {
    alert("FORM");
  },
  {
    capture: true,
  }
);

div.addEventListener(
  "click",
  function () {
    alert("DIV");
  },
  {
    capture: true,
  }
);*/
