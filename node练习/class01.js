function Student(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
        // this.say = function() {
        //     return `${this.name} 说了他性别为： ${this.sex}，年龄为：${this.age}`
        // }

    //  写在构造方法内部就是不相等的 console.log(s1.say() === s2.say())
    // this.say = () => {
    //     return `${this.name} 说了他性别为： ${this.sex}，年龄为：${this.age}`
    // }
}

//加在原型上就是相等的 console.log(s1.say() === s2.say())
Student.prototype.say = () => {
    return `${this.name} 说了他性别为： ${this.sex}，年龄为：${this.age}`
}

let s1 = new Student("lisirui", 23, '男')
let s2 = new Student("王佳明", 25, '女')
    // console.log(s1.say())
console.log(s1.say() === s2.say())