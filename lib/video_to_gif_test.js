var videoToGif =require('./video_to_gif.js');

var src ="../../SubtitleBurner/demo/norman_door.mp4";
var srt = "../../SubtitleBurner/demo/nroman_door_manual_transcription.srt";

var output = "../test.gif";

videoToGif.makeGif(src,srt,output, function(resp){
    console.log("done with video"+resp)
  });
