---
title: Accessible Inverted Colors
date: "2020-12-10T22:40:32.169Z"
---

Recently when developing styles for accessible form inputs an interesting challenge came up - 
how to handle the inverted colour schemes that are available on Windows computers.

For reference, to switch a Windows PC to use inverted colors, you can use the keyboard shortcut

```
Shift+Alt+PrtScr
```

By default, form inputs like `html±<input>` and `html±<textarea>` will look fine and the colors will invert properly.

However, if you are doing custom styling without using the `border` property, for example using `box-shadow` and hiding the border in a standard color view, you may notice that box shadows on these elements do not appear in the inverted mode, creating an accessibility issue for users that are using the inverted mode.

A quick trick to fix this issue is by adding a transparent border to those elements, like so:

```css
border: 1px solid transparent;
```

This could potentially create a gap if you are using a combination of inset and outside box-shadow properties - so we can use a media query to specify when it should be used - in this case, when the inverted mode is active.

There are two useful media queries that are currently available that can achieve this goal:

`css±-ms-high-contrast: active` and `css±forced-colors: active`

The first media query works on older versions of Internet Explorer, and `forced-colors` works on (most) modern browsers.

The final code should look something like this:

```css
@media screen and (-ms-high-contrast: active), (forced-colors: active) {
  border: 1px solid transparent;
}
```

A side note: currently neither of these media queries appear to work on the latest Firefox as of writing this. 

Both are fully supported in the latest Microsoft Edge, which is the best supported browser when using inverted color mode.