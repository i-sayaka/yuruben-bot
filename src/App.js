import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import './App.css';
import Form from './containers/Form';
import Text from './containers/Text';
import Ans from './containers/Ans';

const styles = theme => ({
  root: {
    width: '100vw'
  },
});

class App extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <div className={this.classes.root}>
          <Form />
        </div>
        <div className={this.classes.root}>
          <Text />
        </div>
        <div className={this.classes.root}>
          <Ans />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
