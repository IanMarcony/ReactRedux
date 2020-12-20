import React from 'react';

import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store,persistor} from "./store/index"

import TodoList from "./components/TodoList"

import Counter from "./components/Counter"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
     <TodoList/>
      <Counter/>
     </div>
      </PersistGate>
     
    </Provider>
    );
}

export default App;