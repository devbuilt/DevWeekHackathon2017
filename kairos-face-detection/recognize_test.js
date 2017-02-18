var main = require('./index');
var constants = require('./constants');

var body = {
    "image":"https://picture-uploader-hackathon.herokuapp.com/webcam.jpg",
    "gallery_name":constants.gallery_name,
    "threshold": constants.threshold
}

var options = {
    method: 'post',
    body: body,
    json: true,
    url: 'https://api.kairos.com/recognize',
    headers: {
        'app_id': constants.app_id,
        'app_key' : constants.app_key
    }
};

main.doPost(options, function(response){
    console.log(JSON.stringify(response));
});



