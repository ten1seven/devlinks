/*
 * Title: devlinks.js
 * Purpose: A nicer way to treat development placeholder links
 * Author: Jeremy Fields, Viget Labs
 */


var Util = Util || {};

(function () {

	'use strict';

	Util = {
		
		
		vars: {
			body: document.getElementsByTagName('body')[0],
			msgContainer: document.createElement('div')
		},

		
		/* block dev links
		========================================================================== */
		devLinks: function() {
			
			// append message container to body
			Util.vars.msgContainer.style.position = 'absolute';
			Util.vars.msgContainer.style.right = '30px';
			Util.vars.msgContainer.style.top = '30px';
			Util.vars.body.appendChild(Util.vars.msgContainer);
			
			// look through dom for all links and determine if they have _TEST in the url
			var links = document.getElementsByTagName('a');
			for (var i = 0; i < links.length; i++) {
				if (links[i].getAttribute('href').indexOf('_TEST') > -1) {
					
					// if it's a test link set a click handler
					links[i].onclick = function() {
						Util.addMessage(this.innerHTML);
						
						return false;
					}
				}
			}
			
		},
		
		// adds a div to the message container with the new message as text
		addMessage: function(msg) {
			
			// create new element
			var message = document.createElement('div');
			message.innerHTML = '<strong>' + msg + '</strong> is still in development!';
			
			// add styles
			Util.addStyles(message);
			
			// append to body
			Util.vars.msgContainer.appendChild(message);
			
			// set a timer to remove the element after 3s
			window.setTimeout(function() {
				
				// fade out
				Util.fadeOut(message);
				
			},3000);
			
		},
		
		// adds styles to the message
		addStyles: function(elm) {
			elm.style.backgroundColor = '#b94a48';
			elm.style.border = '1px solid #a74240';
			elm.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.2)';
			elm.style.textShadow = '0 -1px 0 rgba(0,0,0,0.2)';
			elm.style.borderRadius = '6px';
			elm.style.color = '#fff';
			elm.style.fontFamily = 'sans-serif';
			elm.style.fontSize = '14px';
			elm.style.marginBottom = '10px';
			elm.style.padding = '20px';
			elm.style.width = '260px';
			elm.className = 'util-message';
		},
		
		// runs a fadeout animation on a given element and removes it from the dom
		fadeOut: function(elm) {
			
			// starting opacity
			var opacity = 1;
			
			// timed function to increment the fade out
			var fadeTimer = function() {
				opacity = opacity - 0.04;
				
				window.setTimeout(function() {
					elm.style.opacity = opacity;
					elm.style.filter = 'alpha(opacity = ' + (opacity*100) + ')';
					
					testOpacity();
				},10);
			};
			
			// checks to see if the element is fully faded out
			var testOpacity = function() {
				
				// if 'yes', remove from the dom
				if (opacity < 0) {
					Util.vars.msgContainer.removeChild(elm);
				
				// if 'no', run the fadeout again
				} else {
					fadeTimer();
				}
			};
			
			// run the fadeout for the first time
			fadeTimer();
			
		}
		

	};

}());