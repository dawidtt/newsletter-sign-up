# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [solution](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use local storage and how to animate gradients

```css
button {
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 500;
  border: none;
  position: relative;
  z-index: 1;
}
button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #242742;
  border-radius: 12px;
  opacity: 1;
  transition: opacity 0.2s linear;
  z-index: -1;
}
button:hover::after {
  opacity: 0;
}
button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(235, 144, 176);
  background: linear-gradient(
    90deg,
    rgba(235, 144, 176, 1) 0%,
    rgba(255, 98, 87, 1) 48%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-box-shadow: 0px 14px 39px -12px rgba(255, 98, 87, 1);
  -moz-box-shadow: 0px 14px 39px -12px rgba(255, 98, 87, 1);
  box-shadow: 0px 14px 39px -12px rgba(255, 98, 87, 1);
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.2s linear;
  z-index: -1;
}
button:hover::after {
  opacity: 1;
}
button:hover {
  cursor: pointer;
}
```

```js
localStorage.setItem("emailValue", emailValue);
localStorage.getItem("emailValue");
```

## Author

- Website - [dawitt](https://github.com/dawidtt)
