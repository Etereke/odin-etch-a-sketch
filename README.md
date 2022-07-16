# odin-etch-a-sketch

This is an exercise made for [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch). The theme of the exercise was mainly event handling and DOM manipulation, with a little bit of reviewing from previous chapters.

The website consists of two buttons and a 960x960 pixel box, which initially contains a 16x16 grid. Each grid element is white, so this bit cannot be seen immediately.

The website works by pressing and holding down the mouse button and hovering over the square grid. The first time a grid element is hovered, it gets a random color assigned, and each subsequent hover reduces the element's brightness by 10% until it's completely black.

The Reset button at the top clears the grid. The Change Resolution button promts the user to give a number (let's call it A) between 1 and 100, and recreates an AxA grid in place of the previous. So it essentially lets the user to set the resolution of the drawing board.
