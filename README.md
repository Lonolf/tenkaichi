## WARNING: THE APP is still in Beta - use at your own risk

Deploys:
- [Netlify](https://elegant-mahavira-401723.netlify.app/)

# Tenkaichi

It is official opened the first tournament of martial arts...
Sorry, wrong notes
...

It is with big joy that I present you the new app to manage your tournaments, realized with the assistance of the [Sword Academy](https://sword.academy) of Como, Italy.

This app will assiste the management of small and big (soon) tournaments for your association.

## Features

- Multiple games and matches managements
- Automatic points and scores calculation
- Action-per-action match management
- Contenders names memory
- Settings and rules memory (soon)
- Associations and federations rules (soon)

## Rules supported

- Double Death
  If active, no points will be assigned if both contenders have surpassed the "Score to win the match"
- Matches per game
  Number of matches per game. The software will determine the winner of a game on a basis of a "best of" rule: if one of the contender have win the half + 1 of the number of matches per game, the game is considered finished.
  If, at the end of the last match, no contender have win the half + 1 number of matches, the game is considered a draw.
- Points to win a match
  Minimum number of points necessary to gain the victory of a match. If no contender have surpassed the minimum, the match will not be assigned.
- Maximum admonitions
  If a contender is given an admonition over the maximum number, a point will be assigned to the adversary.


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