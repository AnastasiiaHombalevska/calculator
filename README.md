# Calculator with JavaScrip

This is a solution to the Calculator with JavaScrip.

Solution: [DEMO LINK](https://clever-wisp-51a002.netlify.app)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- make the necessary calculations

### Screenshot

![screenshot](/screenshot.png)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- CSS Grid Layout
- CSS Flex Layout
- Mobile-first workflow

### What I learned

With this project I improved a lot my JS skills. The newest things I learnt are:

- How to use eval() method

```js
function calculate() {
  display.value = eval(display.value);
}
```

- How to use hsl() function for color property

```css
.calculator {
  background-color: hsl(0, 0%, 15%);
}
```