const addTodo = require('./module/addRemoveitem');


describe('add function', () => {
  test('testing addition', () => {
      const completed = false;
      // const description = desc.value;
      // const index = List.length + 1;
    expect(addTodo.completed.toEqual(false));
  });
});


// import {addTodo} from './module/addRemoveitem.js';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// describe("Calculator tests", () => {
//   test('adding 1 + 2 should return 3', () => {
//     expect(mathOperations.sum(1, 2)).toBe(3);
//   });
//  })




