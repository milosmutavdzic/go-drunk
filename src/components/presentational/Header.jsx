import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>                
                <AppBar position="absolute">
                    <Toolbar >
                        <Link to="/login">
                            <Avatar src="./favicon.ico" className={classes.img}>
                            </Avatar>
                        </Link>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            GO Drunk
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    img: {
        backgroundColor: theme.palette.primary.main,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        flexGrow: 1,
    }  
});

export default (withStyles(styles)(withRouter(Header)));