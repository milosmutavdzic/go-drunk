import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import VoteView from '../presentational/VoteView.jsx';
import { votingActions } from '../../actions/voting.action.js';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';



class Vote extends Component {
    constructor(props) {
        super(props);
    }

    toggleVoting = (votingData) => {
        let { vote } = this.props;
        vote(votingData,
            successMessage => openSnackbar(successMessage, 'success', { vertical: 'top', horizontal: 'center' }),
            errorMessage => openSnackbar(errorMessage, 'error', { vertical: 'top', horizontal: 'center' })
        );
    }
    render() {
        let { locationData, user_id, updatedLocation } = this.props;
        locationData.user_id = user_id;
        return (
            <React.Fragment>
                <Notifier />
                <VoteView vote={this.toggleVoting}
                locationData={ locationData }
                updatedLocation={ updatedLocation }
                />
            </React.Fragment>
        )
    }
}

Vote.propTypes = {
    location_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    locationData: PropTypes.object.isRequired,
    updatedLocation: PropTypes.object,
    vote: PropTypes.func.isRequired
}
const mapStateToProps = (state, ownProps) => {
    return {
        user_id: state.auth.id,
        locationData: state.locations.markers.filter(item => item.id === ownProps.location_id)[0],
        updatedLocation: state.vote.data
    }
}
const mapDispatchToProps = {
    vote: (votingData, successHandler, errorHandler) => votingActions.vote(votingData, successHandler, errorHandler),
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);