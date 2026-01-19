+++
title = "Calibration post"
date = 2026-01-10
+++

This page acts as a template inspection tool. The whole site is generated with the [zola](https://getzola.org) static site generator. Site is designed to be usable without css and javascript. 

This site is selfhosting the fonts. To reduce the transmitted data, fonts were chopped up using this command:

```bash
# Requires `brotli` module.
pyftsubset kameron.ttf \
  --output-file=kameron.woff2 \
  --flavor=woff2 \
  --layout-features='' \
  --unicodes="U+0020-007E"
```

There are still some inconsistencies in styling, mainly in how log entry titles appear on different pages. Also, there are too few weird SVG illustrations.

# Title \<h1\>
With some text.

## Title \<h2\>
And with some more text.

### Title \<h3\>
Some text with list:
- root
  - leaf
- lets go
- i hope it looks good

> This is citation `with some code`.
> And it doesn't continue on another line.

#### Title \<h4\>
Looks like most important elements are covered.
