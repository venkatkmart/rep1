var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');

module.exports=function (){

    function authenticate(req,res,next){
        if(req.body.user=="kiran"){
            next();
        }
        else{
            res.send("user not authenticated");
        }
    }

    function authorize(req,res,next){
        if(req.body.role=="manager"){
            next();
        }
        else{
            res.send("You are authenticated but not authorized");
        }
    }
var app = express();
console.log(__dirname);
var accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//custom middle ware.
// app.use(authorize);
// app.use(authenticate);





//setup the view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../public')));

//route registration.
require("../register/register.route.js")(app);
require("../products/products.route.js")(app);
require("../default/default.route.js")(app);
require("../blog/blog.route.js")(app);
return app;
};
