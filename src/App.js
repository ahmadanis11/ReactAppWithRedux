import React from "react";
import store from "./store";
import AppRouter from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
export default App;
