import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: '100%'
  },
});

const CustomTextField = withStyles(theme => ({
  root: {
      margin: theme.spacing.unit,
  },
}))(TextField)

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
        text: '',
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /**
   * フィールドの値が変更されたときの処理
   * @param e
   */
  onChangeField(e) {
    this.setState({ text: e.target.value })
  }

  /**
   * 送信ボタンが押下されたときの処理
   */
  onSubmit() {
    this.props.onSubmit(`https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/77b58474-9fa0-4514-8916-70302690fc4b?subscription-key=7d19f95e144b410fa6d10952ec61a447&verbose=true&timezoneOffset=0&q=${this.state.text}`)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CustomTextField
            label="ご質問"
            value={this.state.text}
            onChange={this.onChangeField}
        />
        <IconButton
          variant="fab"
          onClick={this.onSubmit}
        >
          <Send />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Form);