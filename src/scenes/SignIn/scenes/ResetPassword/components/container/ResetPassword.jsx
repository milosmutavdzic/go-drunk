import React, { Component } from 'react';
import RequestCodeForm from '../container/RequestCodeForm.jsx';
import ConfirmationForm from '../container/ConfirmationForm.jsx';
import SuccessMessage from '../../../../../../components/presentational/SuccessMessage.jsx';
export default class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            codeSent: false,
            confirmed: false,
        };
    }

    setCodeSent = () => {
        this.setState({ codeSent: true })
    }

    setConfirmed = () => {
        this.setState({ confirmed: true })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.codeSent ?
                    <RequestCodeForm setCodeSent={this.setCodeSent} />
                    : !this.state.confirmed ?
                        <ConfirmationForm setConfirmed={this.setConfirmed} />
                        : <SuccessMessage
                        title = "Reset password"
                        info = "Your password has been reset."
                        redirectLinkInfo = "to login with your new credentials."
                        />}
             </React.Fragment>
        )
    }
}