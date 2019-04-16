import React, { Component } from 'react';
import { ProfileView } from '../presentational/ProfileView.jsx';
import { profileServices } from '../../services/profile.services.js';
import Notifier, { openSnackbar } from '../../../../../../components/presentational/Notifier.jsx';

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: undefined
        }
    }

    handleSubmit = async (values, actions) => {       
        let response = await profileServices.saveProfileData(values);
        if(response.status=="ok"){
            openSnackbar('Profile data successfully saved.','success',{vertical:'bottom',horizontal:'right'});
        }
        else{
            openSnackbar(response.error.errorMessage,'error',{vertical:'bottom',horizontal:'right'});
        }
        actions.setSubmitting(false);
        console.log(response);
    }

    async componentDidMount() {
        let response = await profileServices.getProfileData();
        this.setState({ profile: response.data })       
    }

    render() {
        let profile = this.state.profile
        return (
            <React.Fragment>
                <Notifier />
                <ProfileView profile={profile} handleSubmit={this.handleSubmit} />
            </React.Fragment>
        )
    }
}