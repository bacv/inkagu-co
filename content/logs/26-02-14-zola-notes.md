+++
title = "Some Zola notes"
date = 2026-02-14
[taxonomies]
tags = ["code", "zola"]
meta = ["short"]
threads = ["inkagu.co site"]
+++

I was trying to create a "threaded" view in the main site page, where each thread would show it's latest post + second and third post tiles. Even though I ended up leaving only the lastest post from the thread, here is a way I've achieved (in case I decide to reimplement it):

To query first item from an array:
```html
{% set page = thread.pages | first %}
```

To get the second and third items:
```html
{% if thread.page_count >= 2 %}
{% set page = thread.pages[1] %}
<div class="timeline-log timeline-log-older">
    ...
    {% if thread.page_count >= 3 %}
    {% set page = thread.pages[2] %}
```
