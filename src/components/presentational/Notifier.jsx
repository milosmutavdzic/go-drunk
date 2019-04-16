import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

import MySnackbarContent from './SnackbarContentWrapper.jsx';


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});


let openSnackbarFn;

class Notifier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: '',
            variant: 'error',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            }
        }
    }

    openSnackbar = (message, variant,anchorOrigin) => {        
        this.setState({           
            open: true,
            message,
            variant,
            anchorOrigin
        })      
    }

    handleSnackBarClose = () => {
        this.setState({
            ...this.state,
            open: false,
            message: ''
        })
    }

    componentDidMount() {
        openSnackbarFn = this.openSnackbar       
    }


    render() {
        const message = (
            <span
                id="snackbar-message-id"
                dangerouslySetInnerHTML={{ __html: this.state.message }} />
        );
        const { classes } = this.props;
        return (
            <Snackbar
                anchorOrigin={this.state.anchorOrigin}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleSnackBarClose}
            >            
                <MySnackbarContent
                    onClose={this.handleSnackBarClose}
                    variant={this.state.variant}
                    message={message}
                    className={classes.margin}
                />          
            </Snackbar>
        )
    }
}
Notifier.propTypes = {
    classes: PropTypes.object.isRequired,
};

export function openSnackbar(message, variant, anchorOrigin) {
    openSnackbarFn(message, variant, anchorOrigin);
}

export default withStyles(styles)(Notifier);