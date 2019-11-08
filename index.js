const WEBHOOK_SECRET = 'webhook secret key';
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
    // verification success
});