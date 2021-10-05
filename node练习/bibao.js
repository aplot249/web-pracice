function a() {
    console.log(this); //输出函数a中的this对象
}

function b() {} //定义函数b
var obj = { name: 'onepixel' }; //定义对象obj
a.call(); //window
a.call(null); //window
a.call(undefined); //window
a.call(1); //Number
a.call(''); //String
a.call(true); //Boolean
a.call(b); // function b(){}
a.call(obj); //Object