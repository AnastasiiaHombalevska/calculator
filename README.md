# Calculator with JavaScrip

This is a solution to the [Calculator with JavaScrip]().

- Solution: [DEMO LINK]()

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [How to install](#how-to-install)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- 

### Screenshot

![screenshot]()

### How to install

- Clone Repo or Download Zip
- Visit chrome://extensions/ and turn on "Developer mode"
- Click "Load unpacked" button and navigate to the folder you downloaded
- That's it! 🎉

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox Layout
- Mobile-first workflow
- Google Chrome APIs

### What I learned

With this project I improved a lot my JS skills. The newest things I learnt are:

- How to get the active Chrome tab and store it into localStorage using JSON's methods

```js
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
```

### Continued development

I'd like to:

- Give the ability to select which leads to remove from the list
- Improve UI
