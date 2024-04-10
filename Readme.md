# Aly_facts
This package provides facts about a user on discord named entity_night aka aly aka Alyssa.
---
This package is for private purposes only.

---

To install run in the console:
```bash
npm i aly_facts
or
yarn add aly_facts
```
---
## This package contains 4 functions <br>
1. `getFact()`
2. `getAllFacts()`
3. `version()`
4. `getAlyPics()`
---
### How to use `getFact()`

***This function returns a random fact about aly.*** <br>

You can simply paste the following code snippet:
```js
const aly = require('aly_facts');
const fact = aly.getFact();

console.log(fact)
```
or
```js
const fact = require('aly_facts').getFact();

console.log(fact)
```
---
### How to use `getAllFacts()`

***This function returns all facts for aly at one.***

This code snippet will help you:
```js
const aly = require('aly_facts')
const facts = aly.getAllFacts()

console.log(facts)
```
or
```js
const facts = require('aly_facts').getAllFacts()

console.log(facts)
```
---
### How to use `version()`

***This function returns the package version.***

Code snippet:
```js
const version = require('aly_facts').version()

console.log(version)
```

---
### How to use `getAlyPics()`

***This function returns random pics of aly.***

Code snippet:
```js
const aly = require('aly_facts')
const pic = aly.getAlyPics()

console.log(pic)

//or

const pic = require('aly_facts').getAlyPics()

console.log(pic)

// Note: This function returns image urls hosted on discord's cdn. So console.log will not show the pic itself. instead will return just the url.
```

# Contributions
`Server Developer` - ***Main Developer*** <br>
`Entity_Night aka Aly` - ***Facts Provider and the person the api is based on.***

---

## Reviews
***〝 aly_facts is a very helpful package〞*** - *Husky#2154* <br>
***〝 It's a package which gives some weird facts〞*** - *Harshit#1578*

---

## Want some more functions or want to fix an issue?

Go to our github repo listed below or join this discord server and make a ticket: 
****[Discord](https://discord.gg/VqA92g8)****

---

## Links

**[Github Repo]**

---

### Promoted
***[Power Guilds]** - A security bot for Guilded*<br>
***[SP-API]** - Yet Another General Purpose API*

[Github Repo]: https://github.com/ServerDeveloper9447/aly_facts
[Power Guilds]: https://www.craftblurbot.cf
[SP-API]: https://api.spapi.online
