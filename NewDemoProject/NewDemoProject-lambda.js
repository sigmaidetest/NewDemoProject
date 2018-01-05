const sqs = new AWS.SQS();
let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {

    sqs.sendMessage({
        MessageBody: `${event.message}`,
        QueueUrl: 'sqsusEast1udithTest',
        DelaySeconds: 'NaN',
        MessageAttributes: {
            "dewdew": {
                "DataType": "String",
                "StringValue": "ewdew"
            }
        }
    }, function (err, data) {
        if (err) {
            // your logic (logging etc) to handle failures, should be here
        } else {
            // your logic (logging etc) to handle successful completion, should be here
        }
    });



}