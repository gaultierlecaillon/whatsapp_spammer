var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

function whatsAppText(t) {
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var textbox = document.querySelector('#main > footer > div.block-compose > div.input-container > div > div.input');
	textbox.textContent = t;
	textbox.dispatchEvent(event);
	$( "div[data-icon='send']" ).click();
}

function spam(message, loop) {
	for (var i = 0; i < loop; i++){
		window.setTimeout(function(){
			whatsAppText(message);
		}, 1000*i);
	}
}