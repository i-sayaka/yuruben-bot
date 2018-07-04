import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Form from './containers/Form';
import Text from './containers/Text';
import Ans from './containers/Ans';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Text />
        <Ans />
      </div>
    );
  }
}

export default App;
