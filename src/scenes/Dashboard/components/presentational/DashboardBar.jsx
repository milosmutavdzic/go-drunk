import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {authActions} from '../../../SignIn/scenes/Login/actions/auth.actions.js';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {withRouter} from 'react-router-dom';

class DashboardBar extends Component {
    state = {
        anchorEl: null
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleProfile = () =>{
        this.setState({ anchorEl: null });
        this.props.history.push('/Profile')
    }

    handleLogout = ()=> {       
        this.setState({anchorEl: null});
        this.props.logout();
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>                
                <AppBar
                    position="absolute"
                >
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <Link to="/">
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
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
                            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

DashboardBar.propTypes = {
    classes: PropTypes.object.isRequired,
    logout: PropTypes.func,
    history: PropTypes.object
};

const mapDispatchToProps = {  
    logout: () => authActions.logout()     
}

const styles = theme => ({
    img: {
        backgroundColor: theme.palette.primary.main,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginRight: 20
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    }  
});

export default connect(null,mapDispatchToProps)(withStyles(styles)(withRouter(DashboardBar)));