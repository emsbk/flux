import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({ type: 'FETCH_TODOS' });

  // fake an api endpoint
  setTimeout(() => {
    dispatcher.dispatch({type: 'RECEIVE_TODOS', todos: [
      {
        id: 2,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 3,
        text: 'Wash car',
        complete: true
      },
    ]});

    // error
    // dispatcher.dispatch({ type: 'FETCH_TODOS_ERROR' })
  }, 1000);
}
