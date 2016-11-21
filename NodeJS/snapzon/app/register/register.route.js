var registerCtrl = require("./registerCtrl.js");

function registerRoute (app){
    app.get("/register",registerCtrl.get);
    app.post("/register",registerCtrl.post);

    app.get("/login",registerCtrl.login);
    app.post("/authenticate",registerCtrl.authenticate);
}

module.exports= registerRoute;