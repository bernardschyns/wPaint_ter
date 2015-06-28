
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var maPhotoEvent = {};	// @dataSource
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	maPhotoEvent.onCurrentElementChange = function maPhotoEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
			if(waf.sources.maPhoto.maPhoto){
			//Create an image from data URI
//			debugger;
			var img = new Image();
		    img.src = location.origin + waf.sources.maPhoto.maPhoto.__deferred.uri;
//		    img.width = 120;
		    $('#customImageDiv').html(img);
//		    	    wheelzoom(document.querySelectorAll('img'), {
//	        zoom: 0.05
//	    }); 
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		    // update elements dimensions
	    // call wPaint('resize')
	    $(window).resize(function() {
	        $('#wPaint').css({
	            width: $('#wPaint').width(),
	            height: $('#wPaint').height()
	        }).wPaint('resize');
	    })

	    // init size based on browser dimensions - on ne va pas faire cela
//	    $(window).resize();

	    //on crée le tableau des images de fond dans la variable [images]
	    var images = ['/test/uploads/maison.jpg', '/test/uploads/test1.png'];

	    //on crée la fonction saveImg()
	    function saveImg(image) {
	        var _this = this;
	        $.ajax({
	            type: 'POST',
	            url: '/test/upload.php',
	            data: {
	                image: image
	            },
	            success: function(resp) {

	                // internal function for displaying status messages in the canvas
	                _this._displayStatus('Image saved successfully');

	                // doesn't have to be json, can be anything
	                // returned from server after upload as long
	                // as it contains the path to the image url
	                // or a base64 encoded png, either will work
	                resp = $.parseJSON(resp);

	                // update images array / object or whatever
	                // is being used to keep track of the images
	                // can store path or base64 here (but path is better since it's much smaller)
	                images.push(resp.img);

	                // do something with the image
	                $('#wPaint-img').append($('<img/>').attr('src', image));
	            }
	        });
	    }

	    //on crée la fonction loadBg
	    function loadImgBg() {

	        // internal function for displaying background images modal
	        // where images is an array of images (base64 or url path)
	        // NOTE: that if you can't see the bg image changing it's probably
	        // becasue the foregroud image is not transparent.
	        this._showFileModal('bg', images);
	    }

	    //on crée la fonction loadFg
	    function loadImgFg() {

	        // internal function for displaying foreground images modal
	        // where images is an array of images (base64 or url path)
	        this._showFileModal('fg', images);
	    }

	    // set test image
	    // get from tapping enter below
	    debugger;
	    $('#wPaint').wPaint({
	        menuOffsetLeft: 0,
	        menuOffsetTop: 0,
	        saveImg: saveImg,
	        loadImgBg: loadImgBg,
	        loadImgFg: loadImgFg,
	        image: '/test/uploads/maison.jpg'
	    });

	    // get an image for testing (just tap enter key)
	    $(document).keypress(function(e) {
	        if (e.keyCode === 13) {
	            console.log($('#wPaint').wPaint('image'));
	        }
	    });
	   debugger;
	    wheelzoom(document.querySelectorAll('img'), {
	        zoom: 0.05
	    }); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("maPhoto", "onCurrentElementChange", maPhotoEvent.onCurrentElementChange, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
