	if(document.location.href.indexOf("imgur") > 0 && document.location.href.endsWith(".gif")) {
		window.location.assign(document.location.href.replace(".gif", ".gifv"));
	} else {
		//do nothing
	}
