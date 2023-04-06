import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");

body {
  margin: 0;
  font-family: "JetBrains Mono", monospace, -apple-system, "Open Sans", BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  -moz-osx-font-smoothing: grayscale;

  background-color: rgb(8,5,36);
  /*background-color: black;*/
  color: white;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

}

*, *:hover {
  box-sizing: border-box;
}


/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5,
h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub,
sup, tt, var, a b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form,
label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article,
aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before,
blockquote:after,
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
