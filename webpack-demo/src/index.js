import "./style.css";

const lists = [
  {
    description: "Descriptions of task 1.",
    completed: false,
    index: 1,
  },
  {
    description: "Descriptions of task 2.",
    completed: false,
    index: 2,
  },
  {
    description: "Descriptions of task 3.",
    completed: false,
    index: 3,
  },
  {
    description: "Descriptions of task 4.",
    completed: false,
    index: 4,
  },
  {
    description: "Descriptions of task 5.",
    completed: false,
    index: 5,
  },
];

const section = document.getElementById("wholeList");
window.onload = () => {
  lists.forEach((toDo) => {
    const listHTML = `<li>
    <input class="check-input" type="checkbox" name="" id="" value="${toDo.index}">
    <label class="label" tabindex="0">${toDo.description}</label>
    <i class="fa-solid fa-ellipsis-vertical"></i>
</li>`;
    section.insertAdjacentHTML("beforeend", listHTML);
  });
};
