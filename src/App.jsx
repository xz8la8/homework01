import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import DB from "./db";

const db = new DB();

const initialState = { items: db.getAll() };

function ormReducer(_, action) {
  const { type, payload } = action;
  switch (type) {
    case "finish":
      db.finishItem(payload.no);
      break;
    case "reopen":
      db.reopenItem(payload.no);
      break;
    default:
      db.addItem(payload.item);
  }

  return { items: db.getAll() };
}

function App() {
  const [state, dispatch] = useReducer(ormReducer, initialState);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TodoList
            db={state.items}
            reopen={(no) =>
              dispatch({
                type: "reopen",
                payload: {
                  no,
                },
              })
            }
            finish={(no) =>
              dispatch({
                type: "finish",
                payload: {
                  no,
                },
              })
            }
          />
        </Route>
        <Route exact path="/add">
          <AddTodo db={state.items} add={(item) => {
            dispatch({
              type: 'add',
              payload: {
                item,
              }
            })
          }} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
