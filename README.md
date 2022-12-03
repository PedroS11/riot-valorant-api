<h1 align='center'>
  Riot Valorant API
</h1>

![npm](https://img.shields.io/npm/v/riot-valorant-api?color=brightgreen)
![GitHub repo size](https://img.shields.io/github/repo-size/PedroS11/riot-valorant-api)
![GitHub](https://img.shields.io/github/license/PedroS11/riot-valorant-api)

A NodeJS module that wraps the Valorant Api in a user friendly interface, available on [NPM](https://www.npmjs.com/package/riot-valorant-api).

## Disclaimer

> This is an unofficial package so it's not developed or maintained by Riot Games. Use it carefully and follow the [ToS](https://developer.riotgames.com/policies/general).

 ## Documentation
 All methods available from Valorant API are supported, for more information regarding them, please visit [documentation](https://developer.riotgames.com/apis).
 
 For Typescript users, all the request and response api interfaces are created and exported to be used.
 ## Installation
 The package is available through NPM, which means you can choose to install it using either `npm` or `yarn`
 
 NPM:
 ```sh
 npm install riot-valorant-api
 ```
 
 Yarn:
 ```sh
 yarn add riot-valorant-api
 ```
  
 ## Authentication
 In order to use the API, Riot has some rules and requires the users to register their product. It can be for personal or professional use, choose according to your needs.
 For more information regarding the registration, check [Riot Portal](https://developer.riotgames.com/).
 

 ## Usage
 
 To start using the package, you need to import and initialize the API class. You need to create it with your `API_TOKEN`
  which you get from creating an application on the [Riot Portal](https://developer.riotgames.com/) and the your region. 
 
 Using Typescript or bundler:
 ```js
 import { RiotValorantApi, Regions.EUROPE } from "riot-valorant-api";
 
 const valorantApi = new RiotValorantApi("YOUR_TOKEN_API", Regions.EUROPE);
 ```
 
 Using native NodeJS:
 ```js
 const { RiotValorantApi, Regions.EUROPE } = require("riot-valorant-api");
 
 const valorantApi = new RiotValorantApi("YOUR_TOKEN_API", Regions.EUROPE);
 ```

## Methods
Here are a few examples of the methods supported by the module.

### Content V1
 
#### GetAllContent

Get all content from Valorant. You can pass a locale or fetch the data with all the available locales
```js
const content: Content = await valorantApi.ContentV1.getAllContent(Locales.EN_GB)
```

### Match V1

#### GetMatchById 
 
Get match by id

```js
const match: Match = await valorantApi.MatchV1.getMatchById("MATCH_ID")
```

#### GetMatchListsByPuuid

Get matchlist for games played by puuid

```js
const matchlist : MatchList = await valorantApi.MatchV1.getMatchListsByPuuid("PUUID")
```

#### GetRecentMatches

Get recent matches

  ```js
  const recentMatches: RecentMatches = await valorantApi.MatchV1.getRecentMatches(Queue.COMPETITIVE)
  ```
 
 ### Ranked V1
 
 #### GetLeaderboardByAct
 
 Get leaderboard for the competitive queue
 
  
  ```js
  const leaderboard: Leaderboard = await valorantApi.RankedV1.getLeaderboardByAct("ACT_ID", size = 20, startIndex = 0)
  ```
  
  ### Status V1
  
  #### GetPlatformData
  
  Get Valorant status for the given platform
  
```js
const status: PlatformData = await valorantApi.StatusV1.getPlatformData()
```

## Errors
All errors threw by the package will have the structure represented in [ApiError](./lib/types/apiError.ts).

````js
export interface ApiError {
  request: {
    method: string; // Method
    path: string; // Path
    baseUrl: string; // Base Url
    headers: { [header: string]: string }; // Headers
  };
  status: number; // Status code
  error: string; // Error message
}
````
    
## Tests

To run the tests for this project:

 NPM:
 ```sh
 npm run test
 ```
 
 Yarn:
 ```sh
 yarn test
 ```
 
 ## Problems or issues?
 
 If you encounter any problems, bugs or other issues with the package, please create an [issue in the GitHub repo](https://github.com/PedroS11/riot-valorant-api/issues). 
 
 

## License 

[MIT](https://github.com/PedroS11/riot-valorant-api/blob/main/LICENSE.md)

