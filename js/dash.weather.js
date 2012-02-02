/* This is the Weather Underground plugin. */

function getWeather() {
    var queryBase = 'http://api.wunderground.com/api/';
    var key = getAPIKey();
    var feature = 'conditions';
    var loc = 'zmw:00000.5.02354';

    var query = queryBase + key + '/' + feature + '/q/' + loc + '.json';

    var jsonRequest = new Request.JSON({url: query, onSuccess: function(reply){ } });
}
