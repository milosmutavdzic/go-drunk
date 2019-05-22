import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileView  from '../presentational/ProfileView.jsx';
import { profileServices } from '../../services/profile.services.js';
import Notifier, { openSnackbar } from '../../../../../../components/presentational/Notifier.jsx';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: undefined
        }
    }

    handleSubmit = async (values, actions) => {
        let response = await profileServices.saveProfileData(values);
        if(response.success === true){
            openSnackbar('Profile information successfully updated.','success',{vertical:'bottom',horizontal:'right'});
        }
        else{
            openSnackbar(response.message || response.error,'error',{vertical:'bottom',horizontal:'right'});
        }
        actions.setSubmitting(false);
    }

    async componentDidMount() {
        let response = await profileServices.getProfileData(this.props.user_id);
        this.setState({ profile: response.data })       
    }

    render() {
        let profile = this.state.profile;
        return (
            <React.Fragment>
                <Notifier />
                <ProfileView profile={profile} handleSubmit={this.handleSubmit} />
            </React.Fragment>
        )
    }
}

Profile.propTypes = {
    user_id: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
    return {
      user_id: state.auth.id,
    }
}

export default connect(mapStateToProps)(Profile);