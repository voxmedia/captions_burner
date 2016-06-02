# Captions Burner

A small os x app to burn srt file captions onto a video.

![Captions burner](./img/captions_burner.png)

## Release

Check out release if you want to download a working version

## Development

```
npm start
```
The app uses, NWJS, ffmpeg fluent-ffmpeg,  

you might need to install `npm install nw -g`


## Deployment

Use deploy script

```
node deploy.js
```

This creates a build folder inside the repo. The build folder is also in `.gitignore` to avoid accidentally pushing it to remote.

## Packaged app ready for use

See [release section](https://github.com/voxmedia/captions_burner/releases)
