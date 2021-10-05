// var func1 = {
//     name: "李素日",
//     age: 26
// }

function Func1() {
    this.name = "王佳明"
    this.age = 25
}

var func1 = new Func1()

var func2 = function() {
    console.log(this.name)
    console.log(`我叫 ${this.name} ，我年龄是 ${this.age}`)
}

func2.call(func1)

// add.apply(null, [6, 6])
// add.bind(null, 5, 5)() //必须要执行