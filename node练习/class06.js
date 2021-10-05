class Father {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log(`我的名字是${this.name}，年龄是${this.age}`)
    }
}

class Son extends Father {
    constructor(name, age) {
        super(name,age)
        // this.name = name
        // this.age = age
    }

    sonsay(){
        console.log('fffffffffffffffffff')
        super.say()
    }
}

let son = new Son('刘嗣瑞', 26)
// son.say()
son.sonsay()