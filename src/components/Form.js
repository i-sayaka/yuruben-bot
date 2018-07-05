import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: '100vw'
  },
});

const CustomTextField = withStyles(theme => ({
  root: {
      margin: theme.spacing.unit,
      width: '80vw'
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
     * コンポーネントマウント時の処理
     */
    componentWillMount() {
      this.eventHandler = this.onEnter.bind(this)
      document.body.addEventListener('keydown', this.eventHandler)
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
    this.props.onSubmit(`https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/b405b5bb-28b7-4640-b2b9-ec4c0123f2c1?subscription-key=7d19f95e144b410fa6d10952ec61a447&spellCheck=true&bing-spell-check-subscription-key=7d19f95e144b410fa6d10952ec61a447&verbose=true&timezoneOffset=0&q=${this.state.text}`)
    this.setState({ text: '' })
  }

  /**
     * テキストエリアででエンターキーが押下されたときの処理
     */
    onEnter = (e) => {
      if (document.activeElement.id === 'form' && e.keyCode === 13) {
          this.onSubmit()
      }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CustomTextField
            label="質問する..."
            value={this.state.text}
            onChange={this.onChangeField}
            id='form'
            autoFocus
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