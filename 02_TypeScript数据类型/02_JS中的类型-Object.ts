// type InfoType = {
//   name: string,
//   age: number
// }

// let info: InfoType = {
//   name: 'jing',
//   age: 22
// }

let info: {
  name: string
  age: number
  height?: number
} = {
  name: 'jing',
  age: 22
}

console.log(info.name)
console.log(info.age)

export {}

// 不要使用object
// let obj: object = {
//   name: 'jing',
//   age: 22
// }

// console.log(obj.name)
