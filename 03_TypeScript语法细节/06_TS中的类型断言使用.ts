// 获取DOM元素 <img class="img"/>
const imgEl = document.querySelector('img')
// const imgEl = document.querySelector('.img')
if (imgEl !== null) {
  imgEl.src = 'xxx'
  imgEl.alt = 'yyy'
}

// 使用类型断言
const imgEl2 = document.querySelector('.img') as HTMLImageElement
imgEl2.src = 'xxx'
imgEl2.alt = 'yyy'


// 类型断言的规则: 断言只能断言成更加具体的类型, 或者不太具体的类型
const age: number = 22
// 错误的做法
// const age2 = age as string  

// TS类型检测来说没有报错, 但是这个代码本身不太正确
const age3 = age as any
const age4 = age3 as string

export {}
