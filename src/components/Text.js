import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    float: 'right',
    margin: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    height: 'auto',
    maxWidth: '60vw',
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

        if (this.props.query) {
          return (
            <div className={classes.root}>
                <Chip label={this.props.query} className={classes.chip} />
            </div>
          );
        } else {
          return (
            ''
          );
        }
    }
}

export default withStyles(styles)(Text);