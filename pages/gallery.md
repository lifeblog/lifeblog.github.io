---
layout: page
show_meta: false
title: "A good snapshot keeps a moment from running away!"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/gallery/"
---
<ul>
    {% for post in site.categories.gallery %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>