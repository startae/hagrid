# Fundament Grid System

A flexbox-first, semantic and customizable scss grid system with a robust inline-block fallback. Started as a fork of [css-wizardry-grids](https://github.com/csswizardry/csswizardry-grids).

Works & tested in all major browsers. (IE8 with Respond.js)

## Usage:

Head over to [the wiki](https://github.com/felics/fundament/wiki) for more information.

## List of options

```css
$fundament: (

    settings: (
        namespace:      "grid",
        responsive:     true,
        mobile-first:   true,
        silent-classes: false,
        gutter:         24px
    ),

    breakpoints: (
        palm:           "(max-width: 480px)",
        lap:            "(min-width: 481px) and (max-width: 1023px)",
        lap-up:         "(min-width: 481px)",
        desk:           "(min-width: 1024px)",
        high:           "(min-width: 1500px)"
    ),

    push:(
        use-push:         true,
        responsive:       false
    ),

    // * Pull classes

    pull: (
        use-pull:         true,
        responsive:       false
    ),

    legacy:(
        use-fallback: true,
        use-markup-fix: false,
        grid-item-font: '"Helvetica Neue", Arial, sans-serif'
    ),

    modifiers:(
        use-modifiers:  true,
        full:           true,
        rev:            true,
        center:         true,
        right:          true,
        wide:           true,
        narrow:         true,
        bottom:         true,
        middle:         true,
        space-around:   true,
        space-between:  true
    ),

    widths: (
        halves:         true,
        thirds:         true,
        quarters:       true,
        fifths:         true,
        sixths:         true,
        eighths:        true,
        tenths:         true,
        twelfths:       true
    ),


    visibility: (
        show:           true,
        hide:           true
    )
);
```

## Basic Usage:

Assuming the defaults, you can use the grid like this:

```css
/* Generated classes look like: */

/* Parent */

.grid {}

/* Child */

.grid__item {}

/* Modifiers */

.grid--modifier {}
.grid__item--modifier {}

/* Widths */

.one-half {}

/* Responsive widths */

.palm--one-half {}

/* Visibility Helpers */

.palm--grid--show {}

```

```html

<section class="grid  grid--rev">
    <article class="grid__item  grid--rev__item  one-half  desk--one-whole">
        Something
    </article>
    <article class="grid__item  grid--rev__item  one-half  desk--one-whole">
        Something
    </article>
</section>

```

With silent classes set to true, you can use the grid like this:

```css
.image-grid {
    @extend %grid;
    @extend %grid--rev;
}

.image-grid figure {
    @extend %grid__item;
    @extend %grid--rev__item;
    @extend %one-half;
    @extend %desk--one-third;
}

```

## License:

The MIT License (MIT)

Copyright (c) 2014 Felix Spöttel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.