CloudFlare.define('thedaywefightback',[
	'thedaywefightback/config'
],
function(
	config
){

	var tdwfb_widget_url = '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
	return CloudFlare.require([tdwfb_widget_url]);
});
