function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
Person.prototype.say = function() {
    return `${this.name} 说了他性别为： ${this.sex}，年龄为：${this.age}`
}

function Student(name, age, sex) {
    Person.call(this, name, age, sex)
}

Student.prototype = Object.create(Person.prototype)
let s1 = new Student("lisirui", 23, '男')
console.log(s1.name)
console.log(s1.age)
console.log(s1.sex)
console.log(s1.say())