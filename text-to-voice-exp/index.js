var googleTTS = require('google-tts-api');
var Afplay = require('afplay');
var download = require('download-file');
var chokidar = require('chokidar');

var player = new Afplay;
var options = {
    directory: ".",
    filename: "voice.mp3"
}

var watcher = chokidar.watch('/Library/WebServer/Documents/webcamjs/webcam.jpg');



watcher.on('change', function(path){
    console.log("file changed" + path);

googleTTS('Hello', 'en', 1)   // or Hello <person matched>
    .then(function (url) {
        console.log(url); // https://translate.google.com/translate_tts?...
        download(url, options, function(err){
            if (err) throw err
            console.log("meow");
            player.play('./voice.mp3')
                .then(function() {
                console.log('Audio done playing');
            }).catch(error => {
                console.log('Error playing file');
        });

    })

    })
    .catch(function (err) {
        console.error(err.stack);
    });
});