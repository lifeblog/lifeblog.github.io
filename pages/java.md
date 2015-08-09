---
layout: page
show_meta: false
title: " Tricks for the JAVA trade"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/technology/java/"
---
<ul>
    {% for post in site.categories.java %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>