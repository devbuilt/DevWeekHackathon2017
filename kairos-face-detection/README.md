# kairos-face-detection

Instructions

```
npm install
```

Run
`enroll_test` to enroll a new face in the gallery
`recognize_test` to recognize whether a picture is matched against any of the pictures in the gallery
`viewAll_test` to see what are the subject_ids in the gallery

In order to test, 

grab a publicly located picture from google. for example google search for Brad Pitt, Julia Roberts etc.

change the `image` property in `body` `recognize_test.js` and run the file.

If matched, you will get a response of 'success', otherwise failure.

Right now, the only people it will match against are, "Brad","Bradley","Julia","Tom"  .   Brad Pitt, Bradley Cooper, Julia Roberts, Tom Cruise

## Usage

- This project can be used to match the face for identification for controlling home lock system. 






