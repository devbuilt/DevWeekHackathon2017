This project does following :

- Takes a picture of you on the computer
- Saves the file in your local filesystem.

What else do we have?

https://github.com/abhagupta/kairos-face-detection . face detection with Kairos API.

What we need to do?

- Picture can be uploaded to Kairos for verification instead of downloading it to local filesystem, or we can do both.
- If matched with what we have in our gallery, we get a response of 'Success' and what it matched with, for example, Julia.
- If 'success', `googleTTS` will say "Hello Julia". 
- If 'failure' `googleTTS` will say, "Sorry I don't know you".