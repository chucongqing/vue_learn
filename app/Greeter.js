var config = require("./config.json")

export default function(){
    var greet = document.createElement('div');
    greet.textContent = config.greetText + " waht?";
    return greet;
}