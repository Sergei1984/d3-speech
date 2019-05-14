## &lt;svg&gt; element

* Root tag for SVG document
* SVG can be used as a children of HTML tag as well as other HTML elements

  ```xml
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