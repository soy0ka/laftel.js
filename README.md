# laftel.js

> Unofficial laftel api wrapper

---

[![NPM](https://nodei.co/npm/laftel.js.png?compact=true)](https://nodei.co/npm/laftel.js/)

### Install

```
# NPM
$ npm install laftel.js
```

### Examples

```js
const laftel = require('laftel.js')

laftel.search("코노스바").then(result => {
    const [anime] = result.results
    laftel.getItem(anime.id).then(result => {
        console.log(result)
    })
})
```

### Author

**[Dyij](https://github.com/Muzihuzi)**

### Contributors 


<table>
    <table><tr><td align="center"><a href="https://github.com/pmh-only"><img src="https://avatars.githubusercontent.com/u/39158228?v=4&s=100" width="100px;"><br />pmh-only</a></td>
  </table>


### License

This repository is [GNU-3.0](https://github.com/Muzihuzi/laftel.js/blob/main/LICENSE) licensed.

---

If you have a problem or want to improve or add features, please make an [issue](https://github.com/Muzihuzi/laftel.js/issues) or [pull request](https://github.com/Muzihuzi/laftel.js/pulls). Thank you!
