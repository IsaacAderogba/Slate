import uuid from "uuid";
export const GENERATE_TODOS = "GENERATE_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_TODO = "SET_TODO";

export const generateTodos = (user, emoji) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection(emoji)
      .get()
      .then(snapshot => {
        let todosArray = snapshot.docs.map(doc => doc.data());
        let currentIndex = todosArray.length,
          tempValue,
          randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          tempValue = todosArray[currentIndex];
          todosArray[currentIndex] = todosArray[randomIndex];
          todosArray[randomIndex] = tempValue;
        }

        let arrayOfObjects = todosArray.slice(0, 3).map(todo => {
          return {
            id: uuid(),
            todo: todo.todo,
            completed: false
          };
        });

        firestore
          .collection("users")
          .doc(user[0].id)
          .update({
            openTasks: [...user[0].openTasks, ...arrayOfObjects],
            todosReady: false
          });

        dispatch({ type: GENERATE_TODOS });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setTodoReady = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let currentDate = new Date().getDay();
    if (currentDate !== user[0].date) {
      const firestore = getFirestore();

      firestore
        .collection("users")
        .doc(user[0].id)
        .update({
          date: currentDate,
          todosReady: true
        });
    }
  };
};

export const toggleTodo = (user, todo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    let openTodos = user[0].openTasks.map(t => {
      if (t.id === todo.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    let closedTodos = user[0].closedTasks.map(t => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
        return t;
      }
      return t;
    });
    let todos = [...openTodos, ...closedTodos];

    let closedTasks = [];
    let openTasks = todos.filter(t => {
      if (t.completed === false) {
        return true;
      } else {
        closedTasks.push(t);
        return false;
      }
    });

    firestore
      .collection("users")
      .doc(user[0].id)
      .update({
        openTasks: openTasks,
        closedTasks: closedTasks
      });
  };
};

export const clearTodos = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(user[0].id)
      .update({
        closedTasks: []
      });
  };
};
