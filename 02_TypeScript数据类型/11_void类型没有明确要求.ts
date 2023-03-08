const names = ['abc', 'cba', 'nba']

// 了解即可: 当基于上下文的类型推导出返回类型为void的时候, 并不会强制要求函数一定不能返回内容
names.forEach((item, index, arr) => {
  console.log(item)

  return 123    // 没有意义
})

export {}
