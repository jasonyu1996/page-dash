*page-dash* provides a simple button hovering over a web page. When The button is clicked, the screen will be moved to the top of the page.

It is actually homework of Labmu.

### Usage

To use *page-dash*, simply load the script and stylesheet, and invoke `PageDash.init(arg)`.

`arg` is the parameters specifying where to place the button. `arg` should be an object with a subset of the following attributes:

* `x`
* `y`
* `LeftTop`
* `LeftBottom`
* `RighTop`
* `RightBottom`

You can choose to set `x` and `y` to fix the button at position `(x, y)`. Or you can choose one of the four corners and set the attribute value to true, so the button would be placed in a corner.

If you give an invalid `arg` or simply use `PageDash.init()`, the button would be placed in the right bottom corner.


