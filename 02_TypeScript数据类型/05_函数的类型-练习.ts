// 定义对象类型
type LyricType = {
  time: number
  text: string
}

// 歌词解析工具
function parseLyric(lyric: string) {
  const lyrics: LyricType[] = []
  lyrics.push({ time: 111, text: '天空好像下雨' })
  return lyrics
}

const lyricInfos = parseLyric('test lyric')
for (const item of lyricInfos) {
  console.log(item.time, item.text)
}

export {}
