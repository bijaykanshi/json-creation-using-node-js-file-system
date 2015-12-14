
var fs = require('fs');
module.exports = function(app){

	app.get('/', function(req, res){
		res.send('kdk');
	});
	app.get('/json', function(req, res) {
		console.log('json');
		var a = [{
		    "category": "abc",
		    "key": "abc_t",
		    "label": "t",
		    "order": 7.9
		}
		,{
		    "category": "abc",
		    "key": "abc_k",
		    "label": "k",
		    "order": 8.0
		}
		];
		var Obj = {
		  0:'kjs',
		  1:'kjkis'
		}
		Object.keys(Obj).forEach(function(key) {
			a.forEach(function(x) {
				var disp = JSON.parse(JSON.stringify(x));
				disp.category = disp.category === 'abc' ? Obj[key] + 'Label' : Obj[key];
				disp.key = disp.category + '_'  + disp.label;
				var outputFilename = './json/' + disp.key + '.json';
				fs.writeFile(outputFilename, JSON.stringify(disp, null, 4), function(err) {
					    if(err) {
					      console.log(err);
					    } else {
					      console.log("JSON saved to " + outputFilename);
					    }
					}); 
				});
		})

		
	});
};


