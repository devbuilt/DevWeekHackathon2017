/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Vision = require('@google-cloud/vision');
const Storage = require('@google-cloud/storage');

module.exports = {
    detectLabel: function(fileName) {
        return detectLabels(fileName);
    },
    detectLogos: function(fileName) {
        return detectLogos (fileName);
    },
    detectText: function(fileName){
        return detectText(fileName);
    },
    detectProperties: function(fileName){
        return detectProperties(fileName);
    }

}

// [START vision_label_detection]
function detectLabels (fileName) {
    // Instantiates a client
    const vision = Vision();

    // Performs label detection on the local file
    return vision.detectLabels(fileName)
            .then((results) => {
            const labels = results[0];
            //console.log("all result :", results[1].responses[0].labelAnnotations);

    console.log('Labels:');
    labels.forEach((label) => console.log(label));

    return results;
});
}
// [END vision_label_detection]


// [START vision_text_detection]
function detectText (fileName) {
    // Instantiates a client
    const vision = Vision();

    // Performs text detection on the local file
    return vision.detectText(fileName)
            .then((results) => {
            const detections = results[0];

    console.log('Text:');
    detections.forEach((text) => console.log(text));

    return detections;
});
}
// [END vision_text_detection]

// [START vision_logo_detection]
function detectLogos (fileName) {
    // Instantiates a client
    const vision = Vision();

    // Performs logo detection on the local file
    return vision.detectLogos(fileName)
            .then((results) => {
            const logos = results[0];

    console.log('Logos:');
    logos.forEach((logo) => console.log(logo));

    return logos;
});
}
// [END vision_logo_detection]

// [START vision_logo_detection_gcs]
function detectLogosGCS (bucketName, fileName) {
    // Instantiates clients
    const storage = Storage();
    const vision = Vision();

    // The bucket where the file resides, e.g. "my-bucket"
    const bucket = storage.bucket(bucketName);
    // The image file to analyze, e.g. "image.jpg"
    const file = bucket.file(fileName);

    // Performs logo detection on the remote file
    return vision.detectLogos(file)
            .then((results) => {
            const logos = results[0];

    console.log('Logos:');
    logos.forEach((logo) => console.log(logo));

    return logos;
});
}
// [END vision_logo_detection_gcs]

// [START vision_image_property_detection]
function detectProperties (fileName) {
    // Instantiates a client
    const vision = Vision();

    // Performs image property detection on the local file
    return vision.detectProperties(fileName)
            .then((results) => {
            const properties = results[0];

    console.log('Colors:');
    properties.colors.forEach((color) => console.log(color));

    return properties;
});
}
// [END vision_image_property_detection]

