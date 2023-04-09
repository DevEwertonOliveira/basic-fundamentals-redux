import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/tasks";
import { addEmployee } from "./store/employess";

const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));
console.log(store.getState());

unsubscribe();
store.dispatch(completedTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());

store.dispatch(addEmployee({ name: "Harley" }));
store.dispatch({ type: "SHOW_ERROR", payload: { error: "User not found!" } });
