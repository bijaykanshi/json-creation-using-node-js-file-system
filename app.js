var express = require('express'),
	app = express();

var port = process.env.PORT || 8087;
require('./config')(app);
require('./routes')(app);
app.listen(port);
console.log('Your application is running on http://localhost:' + port);
//app.listen(port);