CloudFlare.define('the_day_we_fight_back',[
	'the_day_we_fight_back/config',
	'cloudflare/dom'
],
function(
	config,
	dom
){

	config.callOnly = (config.callOnly === 'true');

	window.tdwfb_config = config;

	var tdwfb_widget_url = '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
	return CloudFlare.require([tdwfb_widget_url]);

});
