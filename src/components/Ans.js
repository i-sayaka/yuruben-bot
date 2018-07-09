import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip, CircularProgress } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    float: 'left',
  },
  chip: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    height: 'auto',
    maxWidth: '60vw'
  },
  iframe: {
    mborder: '1px solid #CCC',
    borderWidth: '1px',
    marginBottom: '5px',
    maxWidth: '100%',
  },
});

class Text extends React.Component {
    constructor(props) {
      super(props)
      this.classes = props.classes
      this.state = {
      }
    }

    render() {
        const { classes } = this.props;

        {if (this.props.loading) {
          return (
            <div className={classes.root}>
              <Chip label={<CircularProgress />} className={classes.chip} />
            </div>
          );
        }}
        {if (this.props.ans === 'None') {
          return (
            <div className={classes.root}>
              <Chip label='すみません、わかりませんでした。' className={classes.chip} />
            </div>
          );
        } else if (this.props.ans === 'LT登壇者') {
          return (
            <div className={classes.root}>
              <Chip label={
                <div>
                  <p>山村さん「野球観戦について」</p>
                  <p>大石さん「訓練について」</p>
                  <p>岩堀さん「夢の国について」</p>
                  <p>井藤さん「ざっくり金融史<br />と保険選び」</p>
                  <p>銀羽さん「手書き文字」</p>
                  <p>辻さん「期待値の考え方」</p>
                  <p>下岡さん「AI知識なしでできる<br />チャットボットの作り方」</p>
                  <p>黒木さん「xcodeについて」</p>
                </div>
              }
                className={classes.chip} />
            </div>
          );
        } else if (this.props.ans === '開催場所') {
          return (
            <div className={classes.root}>
              <Chip label='本社5階、セミナールームで行います' className={classes.chip} />
            </div>
          );
        } else if (this.props.ans === '開催日時') {
          return (
            <div className={classes.root}>
              <Chip label='次回ゆるべんは、7/5(木)に開催します' className={classes.chip} />
            </div>
          );
        } else if (this.props.ans === '資料') {
          return (
            <div className={classes.root}>
              <Chip label='ゆるべん 1限目の資料です' className={classes.chip} />
              <div>
                <iframe className={classes.iframe} src="//www.slideshare.net/slideshow/embed_code/key/kvMrAH44LYMUYV" width="340" height="290" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe>
              </div>
              <div>
                <iframe className={classes.iframe} src="//www.slideshare.net/slideshow/embed_code/key/1M5rsReu9PyKM2" width="340" height="290" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe>
              </div>
            </div>
          );
        } else {
          return (
            <div className={classes.root}>
              <Chip label={
                <div>
                  <p>次回開催日時</p>
                  <p>開催場所</p>
                  <p>LT登壇者</p>
                  <p>について答えます</p>
                </div>
              }
                className={classes.chip} />
            </div>
          );
        }
      }
    }
}

export default withStyles(styles)(Text);