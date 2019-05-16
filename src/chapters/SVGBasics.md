

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
