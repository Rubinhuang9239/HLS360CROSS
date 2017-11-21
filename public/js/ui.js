//ui

var ui = {};

ui.init = function(){

	var urlInput = document.getElementById("urlInput");
	var updateBtn = document.getElementById("updateUrlBtn");

	updateBtn.addEventListener("click", function(){

		var streamLink = urlInput.value;
		if(streamLink == ""){
			alert("Stream link can not be empty!");
			return;
		}

		HLS.updateURL(streamLink);

	});

}