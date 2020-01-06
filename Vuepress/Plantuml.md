---

title: markdown-it-plantuml 사용하기
description: plantuml은 markdown에서 uml을 사용할 수 있게 해주는 플러그인이다.
date: 2020-01-06
sidebarDepth: 2

---

# markdown-it-plantuml 

최근에 사내 입문교육에서 git, github, markdown에 대한 교육을 받았다. git과 github는 이미 익숙했기 때문에 주의 깊게 듣진 않았는데(?) 마지막에 `plantuml`에 대한 소개는 관심이 갔다.

## 1. Plantuml 소개

plantuml은 `markdown에서 uml을 사용`할 수 있게 해주는 플러그인이다.

문법 또한 어렵지 않다.

```
@startuml
Bob->Alice : hello
@enduml
```

위의 문법은 다음과 같이 변환된다.

@startuml
Bob->Alice : hello
@enduml

정말 간단한 문법으로 UML을 표현할 수 있다. 조금 더 응용하여 웹 서비스의 구조를 표현해보도록 하자.

```
@startuml
actor User
interface Client
interface Server
database MySQL

User ->> Client : Event
User <<- Client : HTML Document
Client ->> Server : Http Request
Server ->> Client : Http Response
Server <<- MySQL : Data
@enduml
```


@startuml
actor User
interface Client
interface Server
database MySQL

User ->> Client : Event
User <<- Client : HTML Document
Client ->> Server : Http Request
Server ->> Client : Http Response
Server <<- MySQL : Data
@enduml

이렇게 작성하고 보니 학부시절 umlet으로 모든 도형을 하나하나 마우스로 그리고 배치하던게 주마등처럼 스쳐간다..  

## 2. 플러그인 설치

본격적으로 Vuepress에서 plantuml을 사용할 수 있도록 플러그인을 설치해보자. vuepress는 기본적으로 `markdown-it`을 사용하고 있기 때문에 `markdown-it-plantuml`을 markdown-it에 extend 하면 된다.  

``` sh
# yarn을 사용할 경우
yarn add markdown-it-plantuml

# npm을 사용할 경우
npm install markdown-it-plantuml
```

설치가 완료 되었다면, **`.vuepress/config.js`에서 markdown에 plantuml을 extend** 해보자.

``` js {5}
module.exports = {
  ... // 앞 내용 생략
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    }
  }
  ... // 뒷 내용 생략
}
```

이렇게 설정한 후에 plantuml을 사용하기만 하면 된다.

## 3. plantuml 응용하기

오늘(2020-01-06) 회사에서 진행중인 파일럿 프로젝트 문서에 사용한 plantuml의 일부다.

```
@startuml
node "Client" {
    agent Browser
    node "VueFramework" {
        (VueRouter)
        [Components]
        node "VueStore" {
            [State]
            [Mutations]
            [Actions]
        }
    }
}
Browser --> VueRouter : URI
Browser -> Components : Event
VueRouter --> Components
VueStore --> Components
State <- Mutations
State <-- Actions
Mutations <- Actions
@enduml
```

@startuml
node "Client" {
    agent Browser
    node "VueFramework" {
        (VueRouter)
        [Components]
        node "VueStore" {
            [State]
            [Mutations]
            [Actions]
        }
    }
}
Browser --> VueRouter : URI
Browser -> Components : Event
VueRouter --> Components
VueStore --> Components
State <- Mutations
State <-- Actions
Mutations <- Actions
@enduml

```
@startuml
node "Server" {
    node Helper {
        package "CrawlerPacakge" {
            node "MusicCrawler"
            node "NewsCrawler"
            node "Crawler" 
        }
        node "Youtube Search API" as YSA
    }
    node "REST API" as REST {
        node Service
        node Repository
        node RestController
    }
    database H2
}
RestController <-- Service
Service <-- Repository
Service <- Helper
Repository <-> H2
Crawler <|-- MusicCrawler
Crawler <|-- NewsCrawler
@enduml
```

@startuml
node "Server" {
    node Helper {
        package "CrawlerPacakge" {
            node "MusicCrawler"
            node "NewsCrawler"
            node "Crawler" 
        }
        node "Youtube Search API" as YSA
    }
    node Service
    node Repository
    node RestController
    database H2
}
RestController <-- Service
Service <-- Repository
Service <- Helper
Repository <-> H2
Crawler <|-- MusicCrawler
Crawler <|-- NewsCrawler
@enduml

plantuml만 있으면 설계문서는 매우 쉽게 작성할 수 있다.

## Reference

- [Markdown Extention 공식문서](https://vuepress.vuejs.org/config/#markdown-extendmarkdown)
- [Plantuml 공식 문서](https://plantuml.com/ko/)
- [markdown-it-plantuml](https://www.npmjs.com/package/markdown-it-plantuml)
