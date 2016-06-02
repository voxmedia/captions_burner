/**
* Makes a gif from a video and srt subtitles
*/
var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath("./bin/ffmpeg");

function makeGif(src,srt, output, cb){

var subtitle =  "subtitles="+srt+":force_style='FontName=DejaVu Serif,FontSize=24'";

var comand = ffmpeg(src)
	.videoFilters(subtitle)
	.output(output)
	.format('gif')
	.on('progress', function(progress) {
	  //  progress // {"frames":null,"currentFps":null,"currentKbps":256,"targetSize":204871,"timemark":"01:49:15.90"}
	  console.log('Processing: ' + progress.timemark + ' done ' + progress.targetSize+' kilobytes');
	}).on('end',
	//listener must be a function, so to return the callback 	wrapping it inside a function
	 function() {
		  if(cb){cb(output)}
	     console.log('Finished processing '+output+"!");
	  }
	).run();
}


module.exports = {
  makeGif: function(src, srt,output, cb) {
    return makeGif(src, srt,output, cb);
  }
};
