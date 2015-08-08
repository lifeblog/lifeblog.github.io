---
layout: page
show_meta: false
title: "Life Blog Pictures!"
subheadline: "Life, Universe, Everything!"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/photos/"
---
<ul>
    {% for post in site.categories.photos %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>