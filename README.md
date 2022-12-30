# About
This package designed for get free games from the epic games store.

## Installation

``npm i free-epicgames``

## Usage 

```typescript
import { getGames } from "free-epicgames"

async function main() {
    const data = await getGames('FR')

    console.log(data)
}
```
OR

```javascript
var epicgamesfree = require("free-epicgames")

console.log(await epicgamesfree.getGames('FR'))
```