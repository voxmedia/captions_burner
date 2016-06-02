var srtToVideo =require('./burn_srt_on_video');

var src ="../../SubtitleBurner/demo/norman_door.mp4";
var srt = "../../SubtitleBurner/demo/nroman_door_manual_transcription.srt";

var output = "../captioned_norman_door.mp4";

srtToVideo.burn_text(src,srt,output, function(resp){
    console.log("done with video"+resp)
  }
);
