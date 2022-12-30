# About
This package designed for get free games from the epic games store.

## Installation

``npm i epic-free-games``

## Usage 

```typescript
import { getGames } from "epic-free-games"

async function main() {
    const data = await getGames('FR')

    console.log(data)
}
```
OR

```javascript
var epicgamesfree = require("epic-free-games")

console.log(await epicgamesfree.getGames('FR'))
```