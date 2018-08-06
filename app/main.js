import Vue from './vue';

import greeter from './Greeter'
document.querySelector('#root').appendChild(greeter());

import say from './util'
say();


var app = new Vue({
    el:"#app",
    data:{
        message:'Hello Vue!'
    }
})