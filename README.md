# hagrid

> Streamlined, mixin-based flexbox grid for modern browsers

## Usage:

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
    // * Responsive widths are set in the config-map $fdmt-breakpoints
    @include i(1/2, 1/3 lap, 1/4 desk);

    // * If you initialize the item without arguments or a general width, it defaults to 100%
    @include i();
    @include i(2/3 lap, 3/4 desk);

    // * You can use whatever you want as values.
    // * Fractions work great for grids and allow infinite columns without doing math.
    // * using auto/px-values can be cool in combination with the "auto"-modifier

    //* Possible
    @include i(auto, lap 240px, desk 50%);

    // * Recommended
    @include i(1/2, 1/3 lap, 1/4 desk);

    // * Alternative syntax
    @include item();
}

```

The grid is just a light wrapper around flexbox, so go nuts with flexbox on your grids. Note: `display: flex` is only set on the grid, so you may have to re-set it on grid-items and children.

## Modifiers:

### x-axis Alignment:

 - **left:** Align grid-items to the left in partially filled rows. *(default)*
 - **right:** Align grid-items to the right in partially filled rows.
 - **center:** Center grid-items in partially filled rows.
 - **space-around:** Distribute items by using variable space around them.
 - **space-between:** Distribute items by using variable space between them.
 - **auto:** Let flexbox attempt to align items when no width is set on them.
             *Note:* If you want to use this on grid-items, set @include i(auto);

### y-axis Alignment:

 - **top**: Align items to the top of the grid. *(default)*
 - **bottom**: Align items to the middle of the grid.
 - **middle**: Vertically center grid items.

### Spacing:

 - **narrow:** Half the gutter between items.
 - **wide:** Double the gutter between items.
 - **full:** No gutter between items.
 - **default:** Standard gutter between items

### Direction:

 - **rev:**  Reverted grid on both axis.
 - **x-rev:** Reverted grid on x-axis.
 - **y-rev:** Reverted grid on y-axis.

### Mixins:

 - **stretch:** Assign stretch mixin to a group of grid-items in a grid to stretch-align their contents.

## Browser Support:

 - Chrome
 - Firefox
 - Safari 7+
 - Android 4.4+
 - IE 10+

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
