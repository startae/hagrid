# Fundament Grid System

A flexbox-first, semantic-if-wanted, mobile-first and customizable SCSS grid system with a robust inline-block fallback.

## Usage:

### General:

>Head over to [the wiki](https://github.com/felics/fundament.grid/wiki) for more detailed information (wip).

### Installation:

To run the included build-process, install [Gulp](http://gulpjs.com) with NPM globally: `npm install gulp -g`, point your Terminal to the repo-folder and run `npm install`. You can then build the SCSS to `dist` via running `gulp`. If you want to include this grid in your existing project, just copy the contents of `/scss` to your SCSS folder and import `fundament-grid.scss` in your main SCSS-file.


### Configuration:

You can configure the grid-system in `scss/fundament-grid.scss`. For the meaning of each of these options, refer to the wiki (tbd) or the inline documentation in the file. List of options:

```scss
$fdmt-grid: (

    // * Core Settings

    settings: (
        namespace:      "grid",
        item:           "item",
        responsive:     true,
        mobile-first:   true,
        silent-classes: false,
        gutter:         24px
    ),

    // * Breakpoint widths

    breakpoints: (
        palm:           "(max-width: 480px)",
        lap:            "(min-width: 481px)",
        desk:           "(min-width: 1024px)",
        high:           "(min-width: 1500px)"
    ),

    // * Push classes

    push:(
        use-push:         true,
        responsive:       false
    ),

    // * Pull classes

    pull: (
        use-pull:         true,
        responsive:       false
    ),

    // * Settings for the fallback-grid

    fallback:(
        use-fallback:     true,
        use-markup-fix:   false,
        grid-item-font:  '"Helvetica Neue", Arial, sans-serif'
    ),

    // * Grid modifiers

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
        top:            true,
        space-around:   true,
        space-between:  true,
        even:           true

    ),

    // * Grid widths

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

    // * Visibility helpers

    visibility-helper: (
        show:           true,
        hide:           true
    )
);
```

### Basic Usage:

The grid system is built on a BEM-synthax. (core--variant__sub-item) For a full list of avaiable modifiers and widths, look into the wiki (tbd) or use the inline documentation.

#### Synthax-Reference:

>Please note that you can set a custom namespace for parent and item and your own breakpoints in the config.

```css
/*! Synthax !*/

/* Parent */

.grid {}

/* Child */

.grid__item {}

/* Modifiers */

.grid--modifier {}
.grid--modifier__item {}

/* Widths */

.one-half {}

/* Responsive widths */

.desk--one-half {}

/* Visibility Helpers */

.desk--grid--show {}

```

#### HTML:

Working with the grid in markup looks like this:

```html

<section class="grid  grid--rev">
    <article class="grid__item  grid--rev__item  one-half  desk--one-third">
        Something
    </article>
    <article class="grid__item  grid--rev__item  one-half  desk--one-third">
        Something
    </article>
</section>

```

>You can check `test/index.html` for a load of usage examples.

#### SCSS:

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

If you are using SCSS but want to have the option to apply the classes to markup, you can set silent-classes to false but still use extends like this:

```css
.image-grid {
    @extend .grid;
    @extend .grid--rev;
}

.image-grid figure {
    @extend .grid__item;
    @extend .grid--rev__item;
    @extend .one-half;
    @extend .desk--one-third;
}

```

### Setting Widths:

The grid is built mobile-first which means that if you set a width without a breakpoint-modifier (e.g. just `one-half`), it will apply to all breakpoints. You can then for example apply `lap--one-third` to make the item one-third on all devices bigger than the lap-breakpoint. To make it even smaller on bigger devices, just set `desk--one-quarter` and this will apply to all devices bigger than-the desk-breakpoint. This means that the grid progressively enhances with bigger viewports and media-query support while still delivering a decent version for smaller, less-capable devices. You can set your own breakpoints with your own names in the config.

>Note: By default, there is still a `palm--` breakpoint for smaller devices that works with max-width to make retro-fitting existing designs easier.

Example task: Build a grid of 2 items that each take the whole screen on mobile, a third and 2-thirds of the screen on lap-devices and  1-quarter and three-quarters on desk-devices.

```html
<section class="grid">
    <article class="grid__item  one-whole  lap--one-third  desk--one-quarter">
        <p>Some Content</p>
    </article>
    <article class="grid__item  one-whole  lap--two-thirds  desk--three-quarters">
        <p>Some Content</p>
    </article>
</section>
```

or

```scss
.container {
    @extend %grid;
}

.item-1 {
    @extend %grid__item;
    @extend %one-whole;
    @extend %lap--one-third;
    @extend %desk--one-quarter;
}

.item-1 {
    @extend %grid__item;
    @extend %one-whole;
    @extend %lap--two-thirds;
    @extend %desk--three-quarters;
}

```

### Using modifiers:

Modifiers get applied to the grid and grid__item's to use modifications of the grid. For a full list and demos, check `test/index.html`.

If you want to use them, the synthax is easy and memorable. Just add `grid--modifier` to the grid-container (you still have to add `grid`, but this may change in a future relase) and `grid--modifier__item` to each item in the modified container.

Example: Using the --narrow modifier.

```html
<section class="grid  grid--narrow">
    <article class="grid__item  grid--narrow__item  one-third">
        <p>Some Content</p>
    </article>
    <article class="grid__item  grid--narrow__item  two-thirds">
        <p>Some Content</p>
    </article>
</section>
```

or

```scss
.container {
    @extend %grid;
    @extend %grid--narrow;
}

.item-1 {
    @extend %grid__item;
    @extend %grid--narrow__item;
    @extend %one-third;
}

.item-1 {
    @extend %grid__item;
    @extend %grid--narrow__item;
    @extend %two-thirds;
}

```

### Using the generated grid in `/dist`:

This repo includes a pre-built version of the grid. To use this version, please make sure to re-set your font-family on `grid__item`(used for inline-block grid) like this:

```css
.grid__item {
    font-family: /* Your font-family */;
}
```

This version is built with the `mobile first`-setting to true, which means that you do not have to set `one-whole` on grid__items because it gets applied by default.

## Browser Support:

Tested (could work on earlier versions, glad to accept PR's after tests):

 - IE 8+ (with respond.js, w/o 9+) [Flexbox: IE10+]
 - Chrome 20+ [Flexbox: 21+]
 - Firefox 3.5+ [Flexbox: 28+]
 - Safari 6+ [Flexbox: 7+]
 - Opera 12+ [Flexbox: 12.1+]
 - iOS 6+ [Flexbox: 6+]
 - Android 4+ [Flexbox: 4.4+]

## Credit:

 - Syntax inspired by Harry Roberts' [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids)
 - Font-family improvement for letter-spacing fix by [yui/pure](https://github.com/yui/pure) (c)2014 Yahoo Inc.

## License:

The MIT License (MIT)

Copyright (c) **2014 Felix Spöttel**

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