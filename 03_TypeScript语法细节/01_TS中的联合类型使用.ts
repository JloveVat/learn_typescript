// 1.联合类型的基本使用
// let fnn: number | string = 'abc'
// fnn = 123

// // 使用的时候要特别小心
// if (typeof fnn === 'string') {
//   console.log(fnn.length) // 此处报错因为上面赋值了123, 此处就不会存在等于 string, 所以此处never
// } else {
//   console.log(fnn)
// }

// 2.举个栗子: 打印id
function printId(id: number | string) {
  console.log('您的id: ', id)
  // 类型缩小, 确定是string还是number
  if (typeof id === 'string') {
    console.log('id是: ', id.toUpperCase())
  } else {
    console.log('id是: ', id)
  }
}

printId(123)
printId('abc')

export {}
