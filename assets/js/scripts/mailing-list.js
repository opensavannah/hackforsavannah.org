
Event.observe(window, 'load', init, false);

function init(){
	Event.observe('signup','submit',storeAddress);
}

function storeAddress(event) {

	$('response').innerHTML = 'Adding email address...';

	var pars = 'ajax=true&email=' + escape($F('email'));
	var myAjax = new Ajax.Updater('response', 'inc/store-address.php', {method: 'get', parameters: pars});
	Event.stop(event); 
}
