var productCtrl = require("./productCtrl.js");
function productRoute (app){
    app.get("/products",productCtrl.get);
}
module.exports= productRoute;