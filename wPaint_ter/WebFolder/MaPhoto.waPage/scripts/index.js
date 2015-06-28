
WAF.onAfterInit = function onAfterInit() {// @lock
		document.getElementById("fileUpload1").addEventListener("drop", drop, false);
	function drop(e) {
		debugger;
	  e.stopPropagation();
	  e.preventDefault();

	  var dt = e.dataTransfer;
	  var files = dt.files;
	}
	

// @region namespaceDeclaration// @startlock
// @endregion// @endlock


// eventHandlers// @lock
//	$('#fileUpload1').on(
//	    'drop',
//	    function(e) {
//	    	debugger;
//	        e.preventDefault();
//	        e.stopPropagation();
//	        var files = $$(this.id).getFiles();
//	    }
//	    )

	

// @region eventManager// @startlock
// @endregion
};// @endlock
