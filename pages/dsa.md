---
layout: page
show_meta: false
title: "Interesting data structures and alorithms"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/technology/dsa/"
---
<ul>
    {% for post in site.categories.dsa %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>