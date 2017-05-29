// Documentation for legacy - https://devhub.io/repos/plaid-plaid-node#examples
// Documentation for 2.x - https://github.com/plaid/plaid-node
const plaid = require('plaid');

// Initialize products
const products = [
    // 'auth',
    // 'balance', 
    // 'credit_details', 
    // 'identity', 
    // 'income', 
    'transactions'
];

exports.getInstitutions = function (mode, count, offset) {
    var plaidClient = getPlaidClient(mode);

    return plaidClient.getInstitutions(
        parseInt(count),
        parseInt(offset));
}

exports.getCategories = function (mode) {
    var plaidClient = getPlaidClient(mode);
    
    return plaidClient.getCategories();
}

exports.createItem = function (mode, credentials, institutionId) {
    var plaidClient = getPlaidClient(mode);
    
    return plaidClient.createItem(credentials, institutionId, products);
}

function getPlaidClient(mode){
    var mode = mode || 'development';
    const env = plaid.environments[mode];

    // Initialize a client
    const clientId = mode === 'sandbox' ? 'test_id' : '589e414e4e95b84a1cde1901';
    const secret = mode === 'sandbox' ? 'test_secret' : '54218f21aac3779d29f258e131350c';
    const publicKey = '235a3b537415abe213fbc286a4e06d';
    var test = new plaid.Client('test_id', 'test_secret', publicKey, env);
    var forReals =  new plaid.Client(clientId, secret, publicKey, env);

    return forReals;
}



//////////////////////////

// lets just leave api calls here till we come back to this project.

// app.post('/bank/getInstitutions', function (req, res) {
//     var count = req.body.count;
//     var offset = req.body.offset;
//     var promise = bank.getInstitutions(req.body.mode, count, offset);

//     // after api is completed, just return the promise
//     // res.send(promise);
//     // this is just for postman testing
//     promise.then(function (data) {
//         res.send(data);
//     })
//     .catch(function(err){
//         console.log(err);
//         res.send(err);
//     });
// });

// app.post('/bank/getCategories', function (req, res) {
//     var promise = bank.getCategories(req.body.mode);

//     // after api is completed, just return the promise
//     // res.send(promise);
//     // this is just for postman testing
//     promise.then(function (response) {
//         res.send(response);
//     })
//     .catch(function(err){
//         console.log(err);
//         res.send(err);
//     });
// });

// app.post('/bank/createItem', function (req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     var credentials = {username: username, password: password};
    
//     var institutionId = req.body.institutionId;

//     var promise = bank.createItem(req.body.mode, credentials, institutionId);

//     promise.then(function ([mfaResponse, successResponse]) {
//         console.log(mfaResponse);
//         res.send(successResponse.access_token);
//     }).catch(function(err){
//         console.log(err);
//         res.send(err);
//     });

//     // res.send(promise);
// });