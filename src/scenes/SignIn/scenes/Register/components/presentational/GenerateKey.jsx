import React, { Component } from 'react'
import { PrivateKey, key } from 'bitsharesjs';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import dictionary from '../../dictionary.js';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import FileSaver from 'file-saver';
import CryptoJS from 'crypto-js';

class GenerateKey extends Component {

    constructor(props) {
        super(props);
        let brainKey = key.suggest_brain_key(dictionary.en);
        let pkey = PrivateKey.fromSeed(key.normalize_brainKey(brainKey));
        let privateKey = pkey.toWif();
        let publicKey = pkey.toPublicKey().toString();
        this.state = {
            brainKey,
            privateKey,
            publicKey
        };
        this.props.setFieldValue('seedWords',brainKey);
        this.props.setFieldValue('privateKey',privateKey);       
    }

    generateKeys = () => {
        let brainKey = key.suggest_brain_key(dictionary.en);
        let pkey = PrivateKey.fromSeed(key.normalize_brainKey(brainKey));
        let privateKey = pkey.toWif();
        let publicKey = pkey.toPublicKey().toString();
        this.setState({
            brainKey,
            privateKey,
            publicKey
        });
        this.props.setFieldValue('seedWords',brainKey);
        this.props.setFieldValue('privateKey',privateKey);          
    }

    saveKeys = (e) => {
        e.preventDefault();
        try {
            var isFileSaverSupported = !!new Blob;
            if (isFileSaverSupported) {
                let { brainKey, privateKey, publicKey } = this.state;
                let data = { brainKey, privateKey, publicKey }
                // Encrypt
                var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
                // Decrypt
                // var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
                // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

                var blob = new Blob([ciphertext],
                    { type: "text/plain;charset=utf-8" });
                FileSaver.saveAs(blob, "APKeys.key");              
            }
        } catch (e) {
            return
        }
    }

    render() {
        let { brainKey, privateKey, publicKey} = this.state;
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom >
                    {"Let's generate your key!"}
                </Typography>
                <SnackbarContent
                    className={classNames(classes.warning, classes.margin)}
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            <WarningIcon className={classNames(classes.icon, classes.iconVariant)} />
                            {"Please take some time to make a backup of your key and store in safe."}
                        </span>
                    }
                />
                <Typography className={classes.margin}> 
                    Private Key:<br />
                    <b>{privateKey}</b><br /><br />

                    Seed words:<br />
                    <b>{brainKey}</b><br /><br />

                    Public Key: <br />
                    <b>{publicKey}</b><br /><br />
                </Typography>
                <Button
                    variant="contained"
                    onClick={this.generateKeys}
                    size="small"
                    className={classes.button}>
                    Generate new key
                    </Button>
                <Button variant="contained" size="small" className={classes.button} onClick={this.saveKeys}>
                    <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                    Save keys
                    </Button>
            </React.Fragment>
        )
    }
}

GenerateKey.propTypes = {
    classes: PropTypes.object,
    setFieldValue: PropTypes.func
}

export default GenerateKey;





