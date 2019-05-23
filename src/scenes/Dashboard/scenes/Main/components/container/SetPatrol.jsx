import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import SetPatrolView from '../presentational/SetPatrolView.jsx';
import { addLocationActions } from '../../actions/addlocation.action.js';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';

class SetPatrol extends Component {
    constructor(props) {
        super(props);
    }

    toggleAddPatrol = (locationData) => {
        let { addlocation } = this.props;
        addlocation(locationData,
            successMessage => openSnackbar(successMessage, 'success', { vertical: 'top', horizontal: 'center' }),
            errorMessage => openSnackbar(errorMessage, 'error', { vertical: 'top', horizontal: 'center' })
        );
    }

    render() {
        const { user_id, marker } = this.props;
        marker.user_id = user_id;
        return (
            <React.Fragment>
                <Notifier />
                <SetPatrolView 
                    addPatrol={ this.toggleAddPatrol }
                    marker = { marker }
                />
            </React.Fragment>
        )
    }
}

SetPatrol.propTypes = {
    user_id: PropTypes.number.isRequired,
    marker: PropTypes.object.isRequired,
    addlocation: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        user_id: state.auth.id
    }
}
const mapDispatchToProps = {
    addlocation: (locationData, successHandler, errorHandler) => addLocationActions.addlocation(locationData, successHandler, errorHandler),
}

export default connect(mapStateToProps, mapDispatchToProps)(SetPatrol);