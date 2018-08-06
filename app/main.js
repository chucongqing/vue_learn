import Vue from './vue';
import VueRouter from './vue-router';
import Vuex from './vuex';
import app3 from './hello.vue';
Vue.use(VueRouter);
Vue.use(Vuex);


// import greeter from './Greeter';
// document.querySelector('#root').appendChild(greeter());

// import say from './util';
// say();

const User = {
    template:'<div>User {{$route.params.id}}</div>'
};

const Foo = {template:'<div>foo</div>'};
const Bar = { template:'<div>bar</div>'};

const routes = [
    { path:'/foo', component:Foo},
    { path:'/bar', component:Bar},
    { path:'/user/:id', component: User}
];

const router = new VueRouter({
    routes // 缩写 相当于 routes:routes
});



var app = new Vue({
    router
}).$mount('#app');


var app12 = new Vue({
    el:'#app2',
    render: h=> h(app3)
    // template:'<App/>',
    // component: {
    //     app3
    // }
})