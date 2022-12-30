# About
This package designed for get free games from the epic games store.

## Installation

``npm i epic-games-free``

## Usage 

```typescript
import { getGames } from "epic-games-free"

async function main() {
    const data = await getGames('FR')

    console.log(data)
}
```
OR

```javascript
var epicgamesfree = require("epic-games-free")

console.log(await epicgamesfree.getGames('FR'))
```