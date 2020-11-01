## WARNING: THE APP is still in Beta - use at your own risk

Deploys:
- [Netlify](https://tenkaichi.netlify.app/)

# Tenkaichi

It is official opened the first tournament of martial arts...
Sorry, wrong notes
...

It is with big joy that I present you the new app to manage your tournaments, realized with the assistance of the [Sword Academy](https://sword.academy) of Como, Italy.

This app will assiste the management of small and big (soon) tournaments for your association.

## Walkthrough

- With the rules (📖) and the settings buttons (*), configure your tournaments rules
- Insert the name of your contenders and press Start (>)
- Start (>), pause (||) and terminate (✔) every match with the actions button at the bottom

With action button:
- Insert the number of points for every contender with the plus (+) and minus (-)
- Save the action with the central button

Without action button
- Insert the number of points for every contender with the plus (+) and minus (-)

- When terminating a match, the programm will calculate if a new match is necessary, or if the game is finished

- When all games are finished, click on a name on the result table to see all the statistics of the contender

## Features

- Multiple games and matches managements
- Automatic points and scores calculation
- Action-per-action match management (done!)
- Contenders names memory (in device local storage)
- Settings and rules memor (done! In device local storage)
- Associations and federations rules (available, rulesets not defined)

## Rules supported

- Double Death: if active no points will be assigned if both contenders have surpassed the "Score to win the match"
- Matches per game: The software will determine the winner of a game on a basis of a "best of" rule: if one of the contender have win the half + 1 of the number of matches per game, the game is considered finished. If, at the end of the last match, no contender have win the half + 1 number of matches, the game is considered a draw.
- Points to win a match: Minimum number of points necessary to gain the victory of a match. If no contender have surpassed the minimum, the match will not be assigned.
- Maximum admonitions: If a contender is given an admonition over the maximum number, a point will be assigned to the adversary.

## Settings

- Actions buttons: if active, during a match the points will be assigned action-by-action


## Technology

- [React](https://reactjs.org)
  - DOM management
- [Overmind JS](https://overmindjs.org)
  - State management
- [Material ui](https://material-ui.com)
  - Graphic interface and components
- [Firebase](https://firebase.google.com)
  - Database, logs and user authentication (soon)
- [Netlify](https://www.netlify.com/)
  - Deployment