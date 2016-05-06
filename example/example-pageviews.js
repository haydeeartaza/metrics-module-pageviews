var PVCount = require('../lib/pageviewscount');
var pageviewscount = new PVCount();
var keyword = process.argv[2]; //'blast, Basic Local Alignment Search Tool' 



pageviewscount.count(keyword, function(result,msg){

	 console.log(result + "\n" + msg);

}) 
	
	 





