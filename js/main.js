var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})


// var data_0 = {
//   Name:"Mr Lee",
//   Age: 30,
//   Sex:"Male",
// }

// var vue = new Vue({
//   el:"#app0",
//   data: data_0,
// })


var app3 = new Vue({
  el:'#app3',
  data:{
    message:"test msg"
  }
})


var app4 = new Vue({
  el:"#app4",
  data:{
    message: ''
  }
})

var data5 = {
        Name: '李先生',
        Age: "<label>20</label>",
        School:'大连某校',
    }

var vue5 = new Vue({
        el: '#app5',
        data: data5,
    });


Vue.component('todo-item', {
   props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

Vue.component("test-c0", {
  template:'<h1>hello!</h1>'
})

// 定义名为 todo-item 的新组件
Vue.component('todo-item1', {
  template: '<li>这是个待办项</li>'
})


var vm0 = new Vue({
  el: '#example0',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})


var btn0 = new Vue({
  el:"#btn0",
  data :{
    label:"ClickMe!",
    message:"none",
  },

  methods:{
    click:function(){
      alert("clicked!")
    },

    once:function(){
      alert("first!")
    }
  }
})