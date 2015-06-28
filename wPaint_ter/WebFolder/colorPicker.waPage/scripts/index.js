
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var wColorPicker1 = {};	// @container
	var wColorPicker2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	wColorPicker1.mouseover = function wColorPicker1_mouseover (event)// @startlock
	{// @endlock
				$('#wColorPicker1').wColorPicker({
				    theme: 'classic',
				    // set theme
				    opacity: 0.8,
				    // opacity level
				    color: '#FF0000',
				    // set init color
				    mode: 'hover',
				    // mode for palette (flat, hover, click)
				    position: 'bl',
				    // position of palette, (tl, tc, tr, rt, rm, rb, br, bc, bl, lb, lm, lt)
				    generateButton: true,
				    // if mode not flat generate button or not
				    dropperButton: false,
				    // optional dropper button to use in other apps
				    effect: 'slide',
				    // only used when not in flat mode (none, slide, fade)
				    showSpeed: 500,
				    // show speed for effects
				    hideSpeed: 500,
				    // hide speed for effects
				    onMouseover: null,
				    // callback for color mouseover
				    onMouseout: null,
				    // callback for color mouseout
				    onSelect: null,
				    // callback for color when selected
				    onDropper: null // callback when dropper is clicked
				});
	};// @lock


	wColorPicker2.click = function wColorPicker2_click (event)// @startlock
	{// @endlock
		debugger;
		$('#wColorPicker1').wColorPicker({
		    theme: 'classic',
		    // set theme
		    opacity: 0.8,
		    // opacity level
		    color: '#FF0000',
		    // set init color
		    mode: 'flat',
		    // mode for palette (flat, hover, click)
		    position: 'bl',
		    // position of palette, (tl, tc, tr, rt, rm, rb, br, bc, bl, lb, lm, lt)
		    generateButton: true,
		    // if mode not flat generate button or not
		    dropperButton: false,
		    // optional dropper button to use in other apps
		    effect: 'slide',
		    // only used when not in flat mode (none, slide, fade)
		    showSpeed: 500,
		    // show speed for effects
		    hideSpeed: 500,
		    // hide speed for effects
		    onMouseover: null,
		    // callback for color mouseover
		    onMouseout: null,
		    // callback for color mouseout
		    onSelect: null,
		    // callback for color when selected
		    onDropper: null // callback when dropper is clicked
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("wColorPicker1", "mouseover", wColorPicker1.mouseover, "WAF");
	WAF.addListener("wColorPicker2", "click", wColorPicker2.click, "WAF");
// @endregion
};// @endlock
