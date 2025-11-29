import { Provider } from "react-redux";
import { Routes, store } from "../config";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* SETUP REDUX */}
      <Routes />;
    </Provider>
  );
}

export default App;
