import { Provider } from "react-redux";
import HomePage from "./pages";
import "./styles/index.global.scss";
import { store } from "./packages/redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
