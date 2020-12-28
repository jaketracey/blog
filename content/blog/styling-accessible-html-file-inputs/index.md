---
title: Styling accessible HTML file inputs
date: "2020-12-11T22:40:32.169Z"
---

The HTML file input seems to be something of a black sheep of the web developer world. Although it's used pretty extensively, the default implementation leaves
a lot to be desired without resorting to Javascript. I investigated what could be done using CSS only in terms of styling and have had some good results.

## It's two elements (but not really)

The first thing you notice when including `html±<input type="file" />` is that it has two parts that would normally be distinct element - a button to initiate the operating system file picker dialog, and a line of text indicating to the user that they should choose a file or if a file has been chosen, display the path or name of that file.

This begs the question - how do you style the two seperate parts of this (one) element?

The general consensus online is by linking a `html±<label>` element to the `html±<input>` and hiding the actual `html±<input>`, the `html±<label>` becomes a focusable/clickable facsimile of the actual element, with which you can style to your liking. You can then replicate the functionality of the text displaying the filename with Javascript.

Hoping to not have to reinvent the functionality of the `html±<input>` itself, let's try to find a way using just CSS.

## Styling the file input

To style the `html±<input>`, you can use the CSS attribute selector:

```sass
input[type="file"] {
  // your code here
}
```

On Firefox, Blink and Webkit based browsers, this will allow you to customise the styling of the file name text, position the element and add spacing, but it does not 
impact the button itself. On IE11, apart from positioning and spacing, this selector is practically useless. Moving on...

## Psuedo selectors

I'll start this off with the bad news - there is no single psuedo selector that handles `html±<input type="file">` everywhere. Each browser (Chrome/Firefox/IE11) has their own implementation of how to address the insides of the `html±<input>` with varying levels of control. Here's a basic rundown:

### Chrome (Blink/Webkit browsers)

```sass
input[type="file"]::-webkit-file-upload-button {
    // your code here
}
```

### Firefox 

```sass
input[type="file"]::file-selector-button {
    // your code here
}
```


A few things to note here. Both Firefox and Blink/Chrome based browsers have selectors that allow practically full customization of the file selector button. 
You can add hover/focus/active states using their selectors, for example:

```sass
input[type="file"]:hover::-webkit-file-upload-button {
  // hover state css
}

input[type="file"]:active::-webkit-file-upload-button {
  // active state css
}

input[type="file"]:focus::-webkit-file-upload-button {
  // focus state css
}
```

The actual label of the button does not appear to be customizable, even using the `scss±content` CSS property. At the time of writing both use sane defaults for these,
so if you must change the button label further, using the Javascript + `html±<label>` trick is your best bet.

You can even modify the positioning of the file name text by setting `display: block` on both elements, for a nicer 'file name under button' look.

I noticed some strangeness around `box-shadow` property not rendering correctly due to the constraints of the containing box model. By adding some padding to the
`html±<input>` itself it will give the element space to render any content inside.


### Internet Explorer 11

```sass
input[type="file"]::-ms-value {
    // file name styles
}

input[type="file"]::-ms-browse {
    // button styles
}
```

IE11 provides psuedo elements to modify the styling of both the input and the file name text - with some caveats. The IE11 file upload widget by default renders a  text box before the browse button, and this does not render text inside of it (e.g. Choose file) prior to a user selecting one. 

This can create a strange look if you remove the borders from the text box using `::-ms-value` - I opted to style that box the same as other text inputs in the design
to maintain some consistency for the user.

When a file is selected, IE11 also writes the *entire path* to the file on your local system, somewhat reducing the usefulness of this box if it is not extremely wide.

I was also unable to modify the actual layout/order of the items in the rendered widget beyond width/height/padding modifications.

Due to IE11's support becoming smaller and smaller each day, I comprimised on the final result by applying the same button styles as the Blind/Firefox counterparts,
but retaining the look and feel of a text input on the file name area so that it was relatively consistent for the user.

## Conclusion

It is entirely possible to style `html±<input type="file" />` on modern browsers in a way that does not impact the visual look and feel of
your design. Although not as powerful as a full fledged custom file upload widget, because it is default browser functionality and is widely supported, thanks to 
the highly vendor specific selectors that are available you can provide an accessible, good looking utility to upload files without any Javascript.

