const WEBHOOK_SECRET = 'f273cfab9dc7884b15cba428338a69bf2028f77517a7d639ffcf49f4413d252b0e0d058db438b769525ce9dc9257451d';
const crypto = require('crypto');
function verifySignature (body, signature) {
    const digest = crypto
        .createHmac('sha1', WEBHOOK_SECRET)
        .update(body)
        .digest('hex');
    return signature === digest;
};
app.post('/webhooks', function (req, res, next) {
    if (!verifySignature(req.rawBody, req.headers['x-tawk-signature'])) {
        // verification failed
    }
    debugger;
    // verification success
});