---
tawkto: true
layout: page-fullwidth
title: Fibonacci Series"
subheadline: "To find the fibonacci series of a number"
meta_teaser: "Fibonaccii series can be generated using recursion and dynamic programming "
header: no

categories:
    - technology
    - dsa
tags:
    - technology
    - dsa
image:
    thumb:  homepage_typography_thumb.jpg
    caption: Image by Antonio
    caption_url: "http://www.aisleone.net/"


---
<!--more-->

<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->



<div class="medium-8 medium-pull-4 columns" markdown="1">

##  Fibonacci Series - Recursion

We know what Fibonacci Series is :
1 1 2 3 5 8 13 ……

i.e where each number is a sum of previous two numbers .

The basic thought for proceeding with this would be by using recursion because clearly there’s a repetition of task.
Here’s the code for solving this using recursion :

{% highlight java%}
public class ShaheenFibonacci{
void findFibonacci(int number){
int i;
for(i=0;i<number;i++){
System.out.println(fibonacci(i));}
}
int fibonnaci(int i){
if(i==0 || i==1)
return 1;
else
return (fibonacci(i-1)+fibonacci(i-2));
}}
{%endhighlight%}



</div><!-- /.medium-8.columns -->
</div><!-- /.row -->


