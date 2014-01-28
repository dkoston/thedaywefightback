CloudFlare.define(
	'thedaywefightback',
	['cloudflare/dom', 'thedaywefightback/config', 'cloudflare/jquery1.9'],
	function(dom){
		var tdwfb_banner = {};

		tdwfb_banner.showBanner = function(){
			var banner = dom.createElement('div');
			//populate div
			document.body.appendChild(banner);

			return banner;
		};

		//Check to make sure it's Feb 11th
		var isTheDay = function(){
			var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var year = date.getFullYear();

			if( year == '2014' && month == '2' && day == '11' ){
				return 1;
			}

			return 0;
		};


		dom.onLoad.then(
			function(){
				if( isTheDay() ){
					var banner = tdwfb_banner.showBanner();
				}
			}
		);
		
		return tdwfb_banner;

	}
);
