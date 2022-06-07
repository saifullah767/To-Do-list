// import {
//  displayToDo, saveData,List 
//   } from './AddRemove.js';
  
const addTodo = () => {
    const desc = document.getElementById('addtodo');
    if (desc.value) {
      const completed = false;
      const description = desc.value;
      const index = List.length + 1;
      List.push({ completed, description, index });
      displayToDo();
      saveData();
      desc.value = null;
    }
    List = List.map((todo, index) => ({
      completed: todo.completed,
      description: todo.description,
      index: index + 1,
    }));
  };

  const removeList = (indexID) => {
    List = List.filter((ind) => ind.index !== indexID);
    List = List.map((todo, index) => ({
      completed: todo.completed,
      description: todo.description,
      index: index + 1,
    }));
    displayToDo();
  };
  

  // module.exports = sum;

  // export {
  //       addTodo, removeList, sum,
  //   };

  module.exports = addTodo;