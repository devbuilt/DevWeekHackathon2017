var main = require('./index');
var constants = require('./constants');

var body = {

    "gallery_name": constants.gallery_name
}

var options = {
    method: 'post',
    body: body,
    json: true,
    url: 'https://api.kairos.com/gallery/view',
    headers: {
        'app_id': constants.app_id,
        'app_key' : constants.app_key
    }
};

main.doPost(options, function(response){
    console.log(JSON.stringify(response));
});



