var defaultCtrl = require("./defaultCtrl.js");
module.exports = function(app){
app.get("/",defaultCtrl.get);

};