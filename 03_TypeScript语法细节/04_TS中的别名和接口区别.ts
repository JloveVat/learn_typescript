// 1. 区别一: type 类型使用范围更广, 接口类型只能用来声明对象
type MyNumber = number
type IDType = number | string

// 2.区别二: 在声明对象时, interface可以多次声明
// type不允许两个相同名称的别名同时存在
type PointType = {
  x: number
  y: number
}
// type PointType ={
//   z?: number
// }

// interface可以多次声明同一个接口名称
interface PointType2 {
  x: number
  y: number
}
interface PointType2 {
  z?: number
}

const point: PointType2 = {
  x: 100,
  y: 200,
  z: 50
}

// 3.interface支持继承
interface IPerson {
  name: string
  age: number
}

interface IKun extends IPerson {
  slogan: string
}

const ikun1: IKun = {
  name: '小黑子',
  age: 20,
  slogan: '你干嘛~, 诶呦~'
}

// 4.interface可以被类实现 (TS面向对象时候细讲)
// class Person implements IPerson {}

// 总结: 如果是非对象类型的定义使用type, 如果是对象类型的声明推荐使用interface(拓展性强)

export {}
