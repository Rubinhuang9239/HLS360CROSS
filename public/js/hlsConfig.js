
var HLS = {};

HLS.updateURL = function(streamLink){

	HLS.hlsInstance = null;

	if(Hls.isSupported()) {
	    var video = document.getElementById('video');
	    HLS.hlsInstance = new Hls();
	    HLS.hlsInstance.loadSource(streamLink);
	    HLS.hlsInstance.attachMedia(video);
	    HLS.hlsInstance.on(Hls.Events.MANIFEST_PARSED,function() {
	      video.play();
	      video.volume = 1.0;
	  });
	}
}
