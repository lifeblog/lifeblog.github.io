---
layout: page
show_meta: false
title: "Life Blog Pictures!"
subheadline: "Life, Universe, Everything!"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/photos/trekking/"
---
<ul>
    {% for post in site.categories.trekking %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>