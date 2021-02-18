import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from "./Theme/Theme";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Theme>
          <Provider store={store}>
            <App />
          </Provider>
      </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
