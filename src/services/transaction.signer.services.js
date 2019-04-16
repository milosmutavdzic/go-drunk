import {TransactionBuilder,TransactionHelper,PrivateKey,Apis,Aes} from 'bitsharesjs';

export const transactionSignerServices = {

}

let dataKey = null;

function initTransactionSigner(sunDataKey) {   
    dataKey = sunDataKey;
}

function createDataInsertTransaction(hashUserData, key, blockchain_id) {
    let transaction = new TransactionBuilder()
    transaction.add_type_operation("announce_data_insert", {
        fee: {
            amount: 0,
            asset_id: "1.3.0"
        },
        "data_inserter_id": blockchain_id,
        "sha256": hashUserData
    });
    return SingTransactionOnly(transaction, key)
}


function SingTransactionOnly(transaction, key){
    var privateKey = PrivateKey.fromWif(key)
    transaction.add_signer(privateKey);
    return Apis.instance(BLOCKCHAIN_API_URL, true)
        .init_promise
        .then(() => {
            return transaction.finalize()
        })
        .then(() => {
            transaction.sign()
            return transaction.serialize();
        })
}

function createAnnounceAD(user_id, query, memo, unitPrice, count, key){   
    let transaction = new TransactionBuilder();
    transaction.add_type_operation("announce_ad", {
        fee: {
            amount: 0,
            asset_id: "1.3.0"
        },
        advertiser: user_id,
        query: query,
        memo: memo,
        unit_price: unitPrice,
        total_count: count,
    })
    return SingTransactionOnly(transaction, key)
}


function encryptData(data, key) {
    let privateKey = PrivateKey.fromWif(key)
    let nonce = TransactionHelper.unique_nonce_uint64();
    let dataString = JSON.stringify(data)

    var encryptedMessage = Aes.encrypt_with_checksum(
        privateKey,
        dataKey,
        nonce,
        dataString
    );

    return { msg: encryptedMessage.toString("base64"), nonce: nonce }

}