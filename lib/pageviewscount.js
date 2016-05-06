var pageviews = require('./pageviews.js');

/**
 * Object to admin Pageviewscount.
 * @constructor
 */
var Pageviewscount = function () {}

/**
 * Pageviewscount module.
 * @module Pageviewscount
 */

Pageviewscount.prototype ={
 /**
 * Receive the single article name(s) and obtain the total number of views of this article(s)
 * @param {list}  keyword - list of article name(s).
 * @param {function} callback - Callback function (return total views and success or error message).
 * @memberOf  Pageviewscount
 */

 count: function (keyword,callback) {
	var totalviews = 0;
	var params = {};
	var articles = keyword.split(",");
	var start_date = end_date = new Date(new Date() - 2 * 24 * 60 * 60 * 1000)
	if(articles.length == 0){
		params = {article : keyword, project: 'en.wikipedia', start: start_date , end: end_date }
	}else{
		params = {articles : articles, project: 'en.wikipedia', start: start_date, end: end_date }
	}
	pageviews.getPerArticlePageviews(params
		).then(function(result) {
	  		console.log(JSON.stringify(result, null, 2));
			for(item in result){ 
				totalviews += parseInt(JSON.stringify(result[item].items[0].views));
				//console.log("item: "+JSON.stringify(result[item].items[0].views));
			}
			callback(totalviews,"wiki article(s): " + articles + " found.");
		}).catch(function(error) {
		  //console.log(error);
			callback(totalviews, error);
		});
 }

}

/** Do accesible module Pageviewscount */
module.exports = Pageviewscount;


