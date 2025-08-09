# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Select and submit a number rating
-  See the "Thank you" card state after submitting a rating

### Screenshot

![desktop](<screenshot/rating - desktop.png>)
![desktop - active](<screenshot/rating - desktop - active.png>)
![desktop - success](<screenshot/rating - desktop - success.png>)
![mobile](<screenshot/rating - mobile.png>)
![mobile - success](<screenshot/rating - mobile - success.png>)

### Links

-  Solution URL: [Add solution URL here](https://your-solution-url.com)
-  Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Javascript

### What I learned

Text elements has space reserved below it for descenders for lowercase letters like 'g', 'j','p', 'q', and 'y'. This kinda messes up the vertical alignments.

Solution 1:
Setting the display to block/inline-block, unset box-sizing and tweaking line height and height (varies with font family).

```css
&__submit {
      ...

      display: inline-block; /* If element is inline display by default */
      box-sizing: unset;
      line-height: 1rem;
      height: 0.75rem;
   }
```

Solution 2:

Using text-box-edge and text-box-trim, but has no support in Firefox yet, because it’s a very new, experimental CSS feature that hasn’t been implemented in Firefox yet. As of now, it’s only implemented in Chromium-based browsers like Chrome and Edge (behind flags or partially).

```css
&__submit {
      ...
      /* display: inline-block;
      box-sizing: unset;
      line-height: 1rem;
      height: 0.75rem; */


      text-box-edge: cap alphabetic; /* Setting the layout of the inline element */
      text-box-trim: trim-both; /* Trimming both the top and bottom extra spaces from inline element */
   }
```

### Useful resources

-  [text-box-edge](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-edge) - The text-box-edge CSS property defines how inline content aligns with the edges of a text box, affecting layout precision. Used with text-box-trim. Cons: No firefox browser support as of August 09, 2025.

-  [text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim) - The text-box-trim CSS property controls trimming of whitespace around text, improving alignment and layout consistency in text containers. Used with text-box-edge. Cons: No firefox browser support as of August 09, 2025.

## Author

-  GitHub - [AJ-Tan](https://github.com/AJ-Tan)
-  Frontend Mentor - [@AJ-Tan](https://www.frontendmentor.io/profile/AJ-Tan)
