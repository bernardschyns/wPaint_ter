
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$('#wColorPicker1').wColorPicker({
    theme           : 'classic',  // set theme
    opacity         : 0.8,        // opacity level
    color           : '#FF0000',  // set init color
    mode            : 'flat',     // mode for palette (flat, hover, click)
    position        : 'bl',       // position of palette, (tl, tc, tr, rt, rm, rb, br, bc, bl, lb, lm, lt)
    generateButton  : true,       // if mode not flat generate button or not
    dropperButton   : false,      // optional dropper button to use in other apps
    effect          : 'slide',    // only used when not in flat mode (none, slide, fade)
    showSpeed       : 500,        // show speed for effects
    hideSpeed       : 500,        // hide speed for effects
    onMouseover     : null,       // callback for color mouseover
    onMouseout      : null,       // callback for color mouseout
    onSelect        : null,       // callback for color when selected
    onDropper       : null        // callback when dropper is clicked
});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
