// 定义接口
interface IPerson {
  name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: 'jing',
  age: 22
}

// 访问属性: 可选链: ?.
console.log(info.friend?.name)

// 给属性赋值:
// 解决方案一:
if (info.friend) {
  info.friend.name = 'you'
}

// 解决方法二: 非空类型断言(有点危险, 只有确保friend一定有值的情况才能使用, !.是告诉TS这里我确定有值, 跳过TS的编译检测)
info.friend!.name = 'you'

export {}
