
<h1 align="center">
	<br>
	<img width="237" src="http://felics.me/hagrid/hagrid_logo_small.png" alt="logo">
	<br>
	<br>
</h1>

## Contents:

 1. [Installing](https://github.com/felics/hagrid#install)
 2. [Using the Mixin](https://github.com/felics/hagrid#use)
 3. [Configuration Options](https://github.com/felics/hagrid#options)
 4. [Avaiable Modifiers](https://github.com/felics/hagrid#modifiers)
 5. [Browser Support](https://github.com/felics/hagrid#browser-support)
 6. [Prefixes](https://github.com/felics/hagrid#prefixes)
 7. [Credit & License](https://github.com/felics/hagrid#credit)

## Install:

```
bower install hagrid
```

## Use:

```scss

.parent {
    // * Initialize a grid with a set of modifiers
    @include g(full, rev);

    // * Alternative syntax
    @include grid(full,rev);

}

.child {
    // * Initialize a grid-item with a set of responsive widths
    // * The general width is set without a breakpoint-keyword (Here: 1/2)
    // * Responsive widths are set in the config-map $hagrid-breakpoints
    @include i(1/2, 1/3 lap, 1/4 desk);

    // * If you initialize the item without arguments or a general width, it defaults to 100% (mobile first)
    @include i();
    @include i(2/3 lap, 3/4 desk);

    // * You can use whatever you want as values.
    // * Fractions work great for grids and allow infinite columns without doing math.
    // * Passing in false will prevent @i from setting any general width (Responsive widths are false by default)
    // * using false/static values can be cool in combination with the "auto"-modifier

    // * Recommended
    @include i(1/2, 1/3 lap, 1/4 desk);

    //* Possible
    @include i(false, desk 50%);

    // * Alternative syntax
    @include item();
}

```

By default, the grid is just a light wrapper around flexbox, so go nuts with flexbox. Note: `display: flex` is only set on the grid, so you may have to re-set it on grid-items and children.

## Options:
 - `$hagrid-gutter`: Set the gutter between items.
 - `$hagrid-breakpoints`: Set the breakpoints. Can be used with the @bp-mixin too.
 - `$hagrid-fallback`: If you want to add an `inline-block`-grid for older browsers, set this to true. By default, the whitespace issue is fixed the [pure](http://purecss.io)-way via letter-spacing / font-family. You have to reset item-font with `$hagrid-fallback-font`. If you want to fix the issue via 0-whitespace HTML, set `$hagrid-fallback-fontfix` to false
 - `$hagrid-fallback-warnings:` Displays warnings about modifiers / mixins that won't work on the fallback
 - `$hagrid-dry-mixins`: By default, mixins apply all properties every time they are called. This makes the output CSS more readable, but also larger. GZIP negates this. If you don't have access to gzip or want to bundle static properties for all selectors at the first mixin-call, set this to true.

## Modifiers:

### x-axis Alignment:

 - **right:** Align grid-items to the right in partially filled rows.
 - **center:** Center grid-items in partially filled rows.
 - **space-around:** Distribute items by using variable space around them.
 - **space-between:** Distribute items by using variable space between them.
 - **auto:** Let flexbox attempt to align items when no width / static widths are set on them. If you set a static width, it will be used as "min-width" by flexbox. Flexbox will still grow it to fill the container together with all other items. Set max-width&width on one or more items to let flexbox layout all other items around them. If you set @i(false) on all items, flexbox will evenly layout the items.
 
 #### Example (auto):
 
```scss

.auto-grid {
    @include g(auto);
    // Auto-Layout all
    > .item {
        @include i(false);
    }
}

.auto-grid {
    @include g(auto);
    // Auto-Layout around one static
    > .item {
        @include i(false);
    }
    > .item.first {
        @include i(240px);
        max-width: 240px;
    }
}

```

### y-axis Alignment:

 - **bottom**: Align items to the middle of the grid.
 - **middle**: Vertically center grid items.

### Spacing:

 - **narrow:** Half the gutter between items.
 - **wide:** Double the gutter between items.
 - **full:** No gutter between items.

### Direction:

 - **rev:**  Reverted grid on x-axis.
 - **flip:** Reverted grid on y-axis.

### Mixins:

 - **stretch:** Assign stretch mixin to a group of grid-items in a grid to stretch-align their contents.
 - **bp:** Usage: @include bp(breakpoint){ @content; }
 
#### Example (stretch):

```scss

.stretch {
    @include g();
    > .item {
        @include i();
        @include stretch;
    }
}

```
## Browser Support:

 - Chrome
 - Firefox
 - Safari 7+ (Fallback 6+)
 - Android 4.4+ (Fallback 2.3+)
 - IE 10+ (Fallback 9+ / 8+ with polyfill & -rem)
 - Opera 12+

## Prefixes:

Hagrid does not generate prefixes (`-webkit-`,`-ms-`)
 as it is designed to be integrated with common SASS workflows in mind (Gulp / Grunt with [Autoprefixer](https://github.com/postcss/autoprefixer)). A sample configuration for Autoprefixer is available in the [test build-file](https://github.com/felics/hagrid/blob/master/gulpfile.js#L22-L23).

## Credit:

Beard used in the logo by [ZQ](http://www.designbolts.com/2013/02/24/free-vector-hipster-stock-mustache-beard-rayban-glasses/).

## License:

The MIT License (MIT)

Copyright © **2015 Felix Spöttel**

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
