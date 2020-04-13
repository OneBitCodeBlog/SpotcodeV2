import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/menu';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;