---
tawkto: true
layout: page-fullwidth
title: Fibonacci Series"
subheadline: "To find the fibonacci series of a number"
meta_teaser: "Fibonaccii series can be generated using recursion and dynamic programming "
teaser: "<em>Fibonacci Series</em> uses <a href='https://www.google.com/fonts/specimen/Volkhov'>Volkhov</a> for headlines, <a href='https://www.google.com/fonts/specimen/Lato'>Lato</a> for everything else and if you are in need to show some code, it will be in <a href='http://www.microsoft.com/typography/fonts/family.aspx?FID=18'>Lucida Console</a> or <a href='http://en.wikipedia.org/wiki/Monaco_(typeface)'>Monaco</a>."
header: no
image:
    thumb:  homepage_typography_thumb.jpg
    caption: Image by Antonio
    caption_url: "http://www.aisleone.net/"
categories:
    - design

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

## Lato – Fibonacci Series - Recursion

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


