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
			Util.vars.msgContainer.style.right = '20px';
			Util.vars.msgContainer.style.top = '20px';
			Util.vars.body.appendChild(Util.vars.msgContainer);
			
			var links = document.getElementsByTagName('a');
			for (var i = 0; i < links.length; i++) {
				if (links[i].getAttribute('href').indexOf('_TEST') > -1) {
					links[i].onclick = function() {
						Util.addMessage(this.innerHTML);
						
						return false;
					}
				}
			}
			
		},
		
		addMessage: function(msg) {
			
			// create new element
			var message = document.createElement('div');
			var text = document.createTextNode(msg);
			message.appendChild(text);
			
			// add styles
			message.style.backgroundColor = '#c00';
			message.style.borderRadius = '6px';
			message.style.color = '#fff';
			message.style.fontFamily = 'sans-serif';
			message.style.fontSize = '14px';
			message.style.marginBottom = '10px';
			message.style.padding = '20px';
			message.style.width = '260px';
			message.className = 'util-message';
			
			// append to body
			Util.vars.msgContainer.appendChild(message);
			
		},
		
		positionMessage: function() {
			
			var messages = Util.getElementsByClassName(document.body,'util-message');
			var top = 20;
			
			if (messages.length > 0) {
				top = messages[messages.length - 1].offsetTop + messages[messages.length - 1].clientHeight + 10;
			}
			
			return top;
			
		},
		
		
		getElementsByClassName: function(node, classname) {
			
			var a = [];
			var re = new RegExp('(^| )'+classname+'( |$)');
			var els = node.getElementsByTagName("*");
			for(var i=0,j=els.length; i<j; i++)
				if(re.test(els[i].className))a.push(els[i]);
			return a;
			
		}
		

	};

}());