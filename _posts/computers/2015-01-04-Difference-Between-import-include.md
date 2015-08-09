---
layout:     page
title:      Difference Between include in C/C++ and import in java
subheadline: Technology
date:       2015-01-10 23:21:29
teaser:    What really happens when you type include directive in C and how is it really different from imports in java
categories: [technology,java]
tags: [compiler, programming, languages]
breadcrumb: true
share: true
comments: true
tawkto: true
image:
    title: "unsplash_1.jpg"
    caption: Unsplash.com
    caption_url: http://unsplash.com
author: bhuvan    
---

#include directive makes the compiler go to the C/C++ standard library and copy the code from the header files into the program. As a result the program size increases, thus wasting memory and processor's time.

import statement makes the JVM go to the Java standard library, execute the code there and substitute the result into the program. Here no code is copied and hence no wastage of memory or processor's time. So, import is efficient mechanism than #include.


## Similar Posts
{: .t60 }
{% include list-posts tag='programming' %}