//const state = require("../state");
//let UserModel = require("../models/foxesModels");

module.exports.list =  function list(request, response) {
    let fetch = require('node-fetch');

    fetch('https://randomfox.ca/floof/', 
    { 
        method: 'GET', 
        headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
    })
    .then(resp => resp.json())
    .then(json => {
        console.log(json);
    return response.json(json.image)
    });    
}
