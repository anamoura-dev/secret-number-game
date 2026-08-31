# Secret Number Game

A browser game where you try to guess a randomly generated secret number.
After every guess the game tells you — out loud — whether the number you are
looking for is higher or lower, until you get it right.

Built with plain JavaScript, HTML and CSS. No frameworks, no build step.

## How to play

1. The game picks a secret number between **1 and 10**.
2. Type your guess and press **Guess**.
3. The game replies "The secret number is higher/lower than X" and counts the attempt.
4. When you get it right, it tells you how many attempts you needed.
5. Press **New game** to play again with a new number.

## Features

- **Voice feedback** — every message is read out loud using the ResponsiveVoice API,
  so the game can be played without reading the screen.
- **No repeated numbers** — a number that has already been drawn will not come up
  again until every number in the range has been used.
- **Attempt counter** — with correct singular/plural ("1 attempt" vs "3 attempts").
- **Responsive layout** — the illustration is hidden and the layout stacks on
  screens under 1250px.
- **New game button** — stays disabled until you actually win.

## Running it locally

No dependencies and no build step. Clone the repository and open the file:

```bash
git clone https://github.com/anamoura-dev/secret-number-game.git
cd secret-number-game
open index.html
```

On Linux use `xdg-open index.html`, on Windows just double-click the file.

If you prefer a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

> The voice feedback loads ResponsiveVoice from a CDN, so it needs an internet
> connection. The game works fine without it — you just lose the audio.

## Built with

- **HTML5** — semantic markup
- **CSS3** — flexbox, gradients, custom fonts (Chakra Petch + Inter), media queries
- **JavaScript (ES6)** — DOM manipulation, template literals, recursion, arrays
- **ResponsiveVoice** — text-to-speech

## Project structure

```
secret-number-game/
├── index.html      # page structure and the two game buttons
├── style.css       # layout, colours, responsive rules
├── app.js          # game logic
└── img/            # background and illustration assets
```

## How the logic works

The interesting part is `generateRandomNumber()`. Instead of just picking a
random number, it keeps a list of everything already drawn:

- if the chosen number is already in the list, the function **calls itself again**
  until it finds an unused one;
- when every number in the range has been drawn, the list is cleared and the
  cycle starts over.

That is what stops the same number coming up twice in a row, and it was my first
hands-on use of recursion.

## What I learned

- Manipulating the DOM with `querySelector` and `innerHTML`
- Writing functions that call themselves (recursion) and knowing when to stop
- Working with arrays: `includes()`, `push()`, `length`
- Template literals for building messages
- Enabling and disabling elements based on game state
- Making a layout adapt to smaller screens with media queries
- Integrating a third-party API (ResponsiveVoice) into a plain JS project

## Author

**Ana Moura** — [@anamoura-dev](https://github.com/anamoura-dev)

Built while learning JavaScript. Still learning, still building, still surprised
when it works first try!
