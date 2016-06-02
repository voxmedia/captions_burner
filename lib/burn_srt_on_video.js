var ffmpeg = require('fluent-ffmpeg');
/**
* Burns cotent of srt file on a video file.
* uses fluent ffmpeg. and sets the binary of the ffmpeg file to use to allow ease of packaging it inside NWJS
* takes in a callback that retuned when transcoding is done. with file path of output.
*/

//set ffmpeg binary to local binary to make module portbale eg for packaging in NWJS
//Altho this file is inside lib folder, once it's required in index.html the path to ffmpeg is relative to the index.html file. which is why is . and not ..
ffmpeg.setFfmpegPath("./bin/ffmpeg");

/**
* src: file path of video, with file name
* srt: file path of srt file with file name
* output: file path of
*/
function burn_text(src, srt, output, callback){
	var finalOutput = output;
	var subtitle =  "subtitles="+srt+":force_style='FontName=DejaVu Serif,FontSize=24'";
	// var subtitle =  "subtitles="+srt+":force_style='FontFile=./balto-book.otf,FontSize=24'";
	var comand = ffmpeg(src)
		.videoFilters(subtitle)
		.output(finalOutput)
		// .format('gif')
		.on('progress', function(progress) {
    //  progress // {"frames":null,"currentFps":null,"currentKbps":256,"targetSize":204871,"timemark":"01:49:15.90"}
      console.log('Processing: ' + progress.timemark + ' done ' + progress.targetSize+' kilobytes');
    })
		.on('error', function(err) {
        console.log('An error occurred: ' + err.message);
    })
		//listener must be a function, so to return the callback 	wrapping it inside a function
		.on('end', function(stdout, stderr) {
			if(callback){callback(finalOutput)}
     	console.log('Finished processing '+output+"!");
  })
	.run();
}

//export
module.exports = {
  burn_text: function(src, srt,output, cb) {
    return burn_text(src, srt,output, cb);
  }
};
