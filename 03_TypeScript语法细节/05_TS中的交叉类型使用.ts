// 回顾: 联合类型
type ID = number | string
const id1: ID = 'abc'
const id2: ID = 123

// 交叉类型: 两种(多种)类型要同时满足
type NewType = number & string // 没有意义(never)

interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

const info: IKun & ICoder = {
  name: '小黑子',
  age: 22,
  coding() {
    console.log('coding')
  }
}

export {}
