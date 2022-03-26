var { google } = require('googleapis');
var key = require('../config/service_account.json');
var axios = require('axios');

const submitPost = (req, res) => {
    const jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key, ['https://www.googleapis.com/auth/indexing'],
        null
    );

    const url = req.body.link;
    jwtClient.authorize(function(err, tokens) {
        if (err) {
            return res.json(err.response.data);
        }

        var data = JSON.stringify({
            "url": url,
            "type": "URL_UPDATED"
        });

        var config = {
            method: 'post',
            url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function(response) {
                res.send({
                    "status": 200,
                    "url": response.data.urlNotificationMetadata.url,
                    "data": response.data
                })
            })
            .catch(function(error) {
                return res.send({
                    "status": 403,
                    "url": JSON.parse(error.config.data)['url'],
                    "data": error.message
                })
            });
    });
};

module.exports = {
    postSubmit: submitPost
};