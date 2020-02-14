const vuepress = '/Vuepress'
const CodeSpitz = '/CodeSpitz'
const CodeSpitzNBJS = `${CodeSpitz}/None-Blocking-Javascript`
const CodeSpitzOOJS = `${CodeSpitz}/Object-Oriented-Javascript`
const Book = `/Book`
const OOPPrinciple = `${Book}/OOP-Principle`

module.exports = [
  { title: 'Home', path: '/' },
  {
    title: 'Vuepresse',
    children: ['Starter/', 'Theme/', 'Deploy/', 'Plantuml/', 'Utterances/'].map(v => `${vuepress}/${v}`)
  },
  {
    title: 'Book Review',
    children: [
      {
        title: '객체지향의 원리와 이해',
        children: ['01-Intro/'].map(v => `${OOPPrinciple}/${v}`)
      },
    ]
  },
  {
    title: '코드스피츠',
    children: [
      {
        title: '거침없는 자바스크립트',
        children: ['Intro/'].map(v => `${CodeSpitzNBJS}/${v}`)
      },
      {
        title: '객체지향 자바스크립트',
        children: ['01-Intro/', '02-MVVM/', '03-Strategy-Observer/', '04-ISP-Visitor/', '05-Extension/'].map(v => `${CodeSpitzOOJS}/${v}`)
      }
    ]
  },
  {
    title: '개발환경',
    children: [
      {
        title: 'Gradle',
        children: ['GradleWrapper/'].map(v => `/Gradle/${v}`)
      }
    ]
  },
  {
    title: 'SpringFramework',
  }
]