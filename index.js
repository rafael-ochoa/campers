var express=require('express');
var app=express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));
app.listen(app.get('port'), function(){
	           console.log('App is available on http://localhost:', app.get('port'));
           }
);
