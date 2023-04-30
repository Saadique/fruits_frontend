import './App.css';
import Routings from './routes/index';
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routings />
      </Provider>
    </div>
  );
}

export default App;