
<h1 align="center">
	<br>
	<img width="237" src="http://felics.me/\_assets/ext/hagrid/logo.png" alt="logo">
	<br>
</h1>

## Contents:

 1. [Installing](https://github.com/felics/hagrid#install)
 2. [Usage](https://github.com/felics/hagrid#use)
 3. [Configuration](https://github.com/felics/hagrid#options)
 4. [Modifiers](https://github.com/felics/hagrid#modifiers)
 5. [Browser Support](https://github.com/felics/hagrid#browser-support)
 6. [Prefixing](https://github.com/felics/hagrid#prefixes)
 7. [Credit & License](https://github.com/felics/hagrid#credit)

## Install:

```
bower install hagrid

npm install hagrid
```

```scss
@import "[path to hagrid]/hagrid";
```

## Use:

```scss

// * Initialize a basic grid

.parent {

	@include g;

	// * Initialize a grid with a set of modifiers
	// * Modifiers are applied to all items of one grid
	@include g(full, rev);

	// * Alt. Syntax
	@include grid(full, rev);

}

// * Initialize a grid-item with a set of responsive widths

.item {

	// * The general width is set without a breakpoint-keyword (e.g. md)
	// * Responsive widths are set in the config-map $hagrid-breakpoints
	@include i(1/2, 1/3 md, 1/4 lg);

	// * If you initialize an item without arguments or a general width, it defaults to 100% (mobile first)
	@include i;
	@include i(2/3 md, 3/4 lg);

	// * You can use whatever you want as values
	// * Fractions work great for grids and allow for complex grids without doing math
	// * Passing in false will prevent @i from setting any general width

	// * Recommended
	@include i(1/2, 1/3 md, 1/4 lg);

	//* Possible
	@include i(false, lg 50%);

	// * You can use custom breakpoints in Hagrid. Those should be quoted
	// * Breakpoints pointing at $hagrid-breakpoints should not be quoted
	@include i(2/3 "(min-width: 580px)", 1/3 lg);

	// * Alt. Syntax
	@include item();
}
```

*Note:* `display: flex` is set on each grid-parent, so you have to re-set it on grid-items if you use the fallback-grid and want to use flexbox-properties in grid-items.

## Options:

```scss


// *  Specify gutters between items. They are used like modifiers or applied to all grids
$hagrid-gutters: (
    default: 1.5rem,
    full: 0,
    narrow: 0.5rem,
    wide: 3rem
);

// * Set common breakpoints used in your project. Can be used in the @bp-mixin (see below)
$hagrid-breakpoints: (
    sm: "(min-width: 35.5em)",
    md: "(min-width: 48em)",
    lg: "(min-width: 64em)",
    xl: "(min-width: 80em)"
);

// * Gutters and modifiers are applied to all items of each grid-container
// * By default, the selector `> *` is used. If you use a consistent selector for grid-items, you can set it here
$hagrid-item-selector: "> *";


// * If you want to add an `inline-block`-grid for older browsers, set this to true
$hagrid-fallback: false;

// * By default, the whitespace issue is fixed the pure-way via letter-spacing / font-family
// * If you want to fix the issue via 0-whitespace HTML, set `$hagrid-fallback-fontfix` to false
$hagrid-fallback-fontfix: true;

// * If you are using the fontfix (recommended), reset your typeface here
$hagrid-fallback-font: sans-serif;

// * Displays warnings about modifiers / mixins that won't work on the fallback
$hagrid-fallback-warnings: false;

// * When set to true, hagrid will extend shared properties among grids and grid-items
// * When set to false (default), the output will be better traceable but slightly larger (gzip will eat this up)
$hagrid-dry-mixins: false;
```

## Modifiers:

```scss

// * Modifiers are set on grids
@include g(center, middle, full);

```

### x-axis Alignment:

 - **right:** Align grid-items to the right in partially filled rows.
 - **center:** Center grid-items in partially filled rows.
 - **space-around:** Distribute items in partially filled rows by using variable space around them.
 - **space-between:** Distribute items in partially filled rows by using variable space between them.

### y-axis Alignment:

 - **bottom**: Align items to the bottom of the grid.
 - **middle**: Vertically center grid items.

### Spacing:

> You can provide custom gutters to the grid via the config-variable `$hagrid-gutters`. Use them as you would use a normal modifier. (e.g. `@include g(wide)`)

### Direction:

 - **rev:**  Reverted grid on x-axis.
 - **flip:** Reverted grid on y-axis.

### Mixins:

 - **bp:** Use breakpoints directly in a class.
 - **stretch:** Assign stretch-mixin to a group of grid-items in a grid to stretch-align their contents.

#### Example (bp):

```scss

 .item {
 		// * Single Breakpoint
 		@include bp(md) {
 			text-align: left;
 		}
 		// * Multiple Breakpoints
 		@include bp(md, lg) {
 			text-align: left;
 		}
 		// * Specific Breakpoints
 		@include bp("(min-width: 568px and max-width: 640px)") {
 			text-align: left;
 		}
 }
```


#### Example (stretch):

```scss

.stretch {
	@include g;
	> .item {
		@include i;
		@include stretch;
	}
}
```

## Automatic Grid Layouts:

An automatic grid modifier was included until v1.1.0 but then removed because of its inconsistency with the fallback-grid. It will be re-added when the fallback can be safely dropped. Example of automatic grids with pure flexbox:

```scss

.grid {
    display: flex;
    flex: 1 1 auto;
}

.grid-item {
     flex: 1 1 0%;
}

.grid-item.example {
    flex: 0 0 auto;
    width: 50%;
}

```
## Browser Support:

 - Chrome
 - Firefox
 - Safari **7+** *(Fallback 6+)*
 - Android **4.4+** *(Fallback 2.3+)*
 - IE **10+** *(Fallback 9+ / 8+ with polyfill & -rem)*
 - Opera **12+**

## Prefixes:

Hagrid does not generate prefixes (`-webkit-`,`-ms-`) as it is designed to be integrated with common SASS workflows in mind (Gulp / Grunt with [Autoprefixer](https://github.com/postcss/autoprefixer)). A sample configuration for Autoprefixer is available in the [test build-file](https://github.com/felics/hagrid/blob/master/gulpfile.js#L22-L23). Be careful not to set browsers in a way that generates legacy flexbox syntax!

## Credit:

 - Started as a fork of [csswizardry-grids](http://github.com/csswizardry/csswizardry-grids)
 - Beard used in the logo by [ZQ](http://www.designbolts.com/2013/02/24/free-vector-hipster-stock-mustache-beard-rayban-glasses/).

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
