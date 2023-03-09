// 保存个人信息: jing, 22, 1.77
// 1.使用数组
// 不合适: 数组中最好存放相同的数据类型
const info1: any[] = ['jing', 22, 1.88]
const value = info1[2]
console.log(value)

// 2.使用对象类型
const info2: {
  name: string
  age: number
  height: number
} = {
  name: 'jing',
  age: 22,
  height: 1.77
}

// 3.使用元组类型
// 元组数据结构中可以存放不同更多数据类型
const info3: [string, number, number] = ['jing', 22, 1.77]
const value2 = info3[2]

// 在函数中使用元组类型是最多的(函数的返回值)
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState
  function setValue(newValue: number) {
    stateValue = newValue
  }

  return [stateValue, setValue]
}

const [count, setCount] = useState(1)
console.log(count)
setCount(10)

export {}
