import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    float: 'right',
    margin: theme.spacing.unit,
    maxWidth: '100vw',
    marginLeft: '40vw'
  },
  chip: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    height: 'auto',
    maxWidth: '60vw',
    backgroundColor: '#17bd05',
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