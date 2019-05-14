## &lt;svg&gt; element

* Root tag for SVG document
* SVG can be used as a children of HTML tag as well as other HTML elements

  ```html
  <div>
    <svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="red" />
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
  </div>
  ```

* SVG Coordinate system:

  ![SVG Coordinates](https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png)

* SVG canvas is infinite

* Viewport and view box
    * Viewport - width and height of &lt;svg&gt; element
    * View box - a part of SVG canvas displayed inside a viewport

* Main attributes:
    * `stroke` and `stroke-width` - defines a border. `stroke-opacity` defines a transparency.
    * `fill` - a background. For `path` a `fill` should be set to none to don't fill an area between line ends.
    * `fill-opacity` - transparency of background
    * Attributes could be set inline or via CSS

* Main tags:
    * Rectangle
     ```xml
     <rect width="100%" height="100%" fill="red" />
      ```
    * Circle
    ```xml
    <circle cx="150" cy="100" r="80" fill="green" />
    ```
    * Line
    ```xml
    <line x1="10" x2="100" y1="10" y2="200" stroke="red" />
    ```

    * Text
    ```xml
    <text x="10" y="10">Hello World!</text>
    ```

    * Paths
    ```xml
    <path d="M10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
     ```