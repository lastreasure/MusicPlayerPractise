import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './store';
// import {MuiThemeProvider} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
    document.getElementById('root')
);

