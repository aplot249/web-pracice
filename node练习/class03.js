function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}

Person.prototype.say = function() {
    return `${this.name} 说了他性别为： ${this.sex}，年龄为：${this.age}`
}

function Parent(address) {
    this.familyAddress = address
}

Parent.prototype.sayFamily = function() {
    return `我的家庭地址是：${this.familyAddress}`
}

function Student(name, age, sex, address) {
    Person.call(this, name, age, sex)
    Parent.call(this, address)
}

Student.prototype = Object.create(Person.prototype)
Object.assign(Student.prototype, Parent.prototype)

let s1 = new Student("lisirui", 23, '男', '陕西省安康市')
console.log(s1.name)
console.log(s1.age)
console.log(s1.sex)
console.log(s1.say())
console.log('*************')
console.log(s1.familyAddress)
console.log(s1.sayFamily())