export const GENERATE_TODOS = "GENERATE_TODOS";

export const generateTodos = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(user);

    firestore
      .collection(user[0].emoji)
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

        firestore
          .collection("users")
          .doc(user[0].id)
          .update({
            openTasks: [...user[0].openTasks, ...todosArray.slice(0, 3)]
          });

        dispatch({ type: GENERATE_TODOS });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
