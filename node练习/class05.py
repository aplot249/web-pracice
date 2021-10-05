# @author: sareeliu
# @date: 2021/9/13 15:31
class Father:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say(self):
        print(f'我的名字是 {self.name}，我的年龄是 {self.age}')


class Son(Father):
    def __init__(self, name, age):
        # self.name = name
        # self.age = age
        super(Son, self).__init__(name, age)


son = Son('王佳明', 24)
son.say()
