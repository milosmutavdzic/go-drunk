import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AlarmIcon from '@material-ui/icons/Alarm';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';

class VoteView extends Component {
    
    render() {
        const { classes, vote, locationData, updatedLocation } = this.props;
        const time = updatedLocation ? updatedLocation.updated_at : locationData.updated_at;
        const localTime = (new Date(time)).toString().split(' ')[4];
        const numberOfVotes = updatedLocation ? updatedLocation.vote_number : locationData.vote_number;
        const percentage = updatedLocation ? updatedLocation.percentage : locationData.percentage;

        const votingData = {
            location_id: locationData.id,
            user_id: locationData.user_id,
         }
        return (
            <div className={classes.root}>
                <Grid container spacing={ 8 } justify="center">
                    <Grid item xs={ 12 } align="center">
                        <Chip
                            icon={<ExposurePlus1Icon className={classes.icon}/>}
                            label={`number of votes: ${ numberOfVotes}`}
                            className={classes.votes}
                        />
                    </Grid>
                    <Grid item xs={ 12 } align="center">
                        <Avatar className={classes.possibility}>{ percentage }%</Avatar>
                    </Grid>
                    <Grid item xs={ 12 } align="center">
                        <Chip
                            label={`Patrol type: ${locationData.patrol_type ? 'SPEED TEST' : 'ALCOHOL TEST'}`}
                            className={classes.votes}
                        />
                    </Grid>
                    {numberOfVotes ?
                    (<Grid item xs={ 12 } align="center">
                        <Chip
                            icon={<AlarmIcon className={classes.icon}/>}
                            label={`Last vote on: ${ localTime }`}
                            className={ classes.lastEdit }
                        />
                    </Grid>)
                    :
                    (<Grid item xs={ 12 } align="center">
                        <p>Become first voter for this location!</p>
                    </Grid>)}
                    <Grid item xs={ 6 }>
                        <Button variant="contained" color="primary" onClick={ ()=>vote({...votingData, valid_location: 1 })}>
                            Confirm
                    </Button>
                    </Grid>
                    <Grid item xs={ 6 }>
                        <Button variant="contained" color="secondary" onClick={ ()=>vote({...votingData, valid_location: 0 })}>
                            Disclaim
                    </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

VoteView.propTypes = {
    classes: PropTypes.object.isRequired,
    vote: PropTypes.func.isRequired,
    locationData: PropTypes.object.isRequired,
    updatedLocation: PropTypes.object,
};

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    possibility: {
        width: 100,
        height: 100,
        padding: 5,
        color: '#fff',
        backgroundColor: grey[400],
    },
    votes: {
        marginBottom: 8,
        color: '#fff',
        backgroundColor: grey[800]
    },
    lastEdit: {
        marginTop: 8,
        marginBottom: 18,
        color: '#fff',
        backgroundColor: grey[800]
    },
    icon: { fill: '#fff' }
});

export default withStyles(styles)(VoteView);
