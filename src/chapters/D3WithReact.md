## Use D3 for:
* Interpolating values to document (chart) dimensions
* Generating shapes for paths


## Use React for:

* Building DOM of __SVG__
* Update DOM
* Handle events

## Pros:
* Declarative, functional and straightforward document structure (vs contrintuitive D3 DOM building methods)
* Reusable components for chart parts: axis, lines etc.
* Smaller application size: don't inlcudes unnecessary D3 parts

## Cons:
* Animations are not supported
* D3 event handling is not supported
* For some complex charts may need direct DOM mutations


## Alternative

* [react-faux-dom](https://github.com/Olical/react-faux-dom) - mutable in-memory DOM emulation that can be rendered into React component tree
