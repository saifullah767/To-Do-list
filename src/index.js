import './style.css';
import {
  retrivedata,
  addTodo,
  saveEdit,
  displayToDo,
  getIsEditing,
  clearCheckBox, 
  clearallcompleted
} from './module/AddRemove.js';

window.onload = () => {
  retrivedata();
  displayToDo();
};
const desc = document.querySelector('#addtodo');
desc.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing()) addTodo();
    else saveEdit();
  }
});

const clearbutton = document.getElementById('clearallbutton');
clearbutton.addEventListener('click' , () => {
  clearallcompleted();
});

const reloadBtn = document.getElementById('reloadbtn');
reloadBtn.addEventListener('click', () => {
  clearCheckBox();
  window.location.reload();
});
