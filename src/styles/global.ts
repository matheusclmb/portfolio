import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'IBM Plex Mono', sans-serif;
  background-color: #F9F7F7;

   @media screen and (max-width: 768px) {
    padding: 8px;
    }
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

#__next {
  position: relative;
}

.spline-wrapper {
  padding: 200px 0 100px 0;

  margin: 0 auto;
  width: fit-content;
}

.text-sub {
    text-shadow: 1px 1px #000;
}

* {cursor: url(https://cur.cursors-4u.net/games/gam-10/gam987.ani), url(https://cur.cursors-4u.net/games/gam-10/gam987.png), auto !important;} /* End https://www.cursors-4u.com */



`;
