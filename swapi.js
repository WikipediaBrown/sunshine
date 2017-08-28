
const rp = require('request-promise-native');

module.exports = async function(context) {

	var options = 	{	uri: 'https://swapi.co/api/planets/3/',
    					headers: { 'User-Agent': 'Request-Promise'},
    					json: true
					};


    console.log('hello.js is working')

	return rp(options)
    .then(function (info) {
        
        console.log('SWAPI returned a result')
        
        return {
        	status: 200,
        	body: info,
        	headers: {'Foo': 'Bar'}
    	} 
    })
    .catch(function (error) {
        
        console.log('SWAPI returned an error')

        return {
        	status: 500,
        	body: error,
        	headers: {'Foo': 'Bar'}
    	}
    });

}