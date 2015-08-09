---
tawkto: true
layout: page-fullwidth
title: Next Greater Element
subheadline: "Find the next greater element in the array"

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


The idea is to use stack to push the elements each until we find the next greater element and pop the stack

The code below solves this.
{% highlight java%}
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Stack;

public class NextElement {
void nextGreaterElement(ArrayList<Integer> arr ){
int curr;
Stack<Integer> st = new Stack<Integer>();
for(Integer item : arr){
if(st.isEmpty())
st.push(item);
else {
curr = st.peek();
if(curr < item){
while(!(st.empty())){
System.out.println(item);
st.pop();}

st.push(item);
}
else
st.push(item);
}
}
if(!(st.empty()))
{while(!(st.empty()))
{
System.out.println(“-1″);
st.pop();
}
}
}
public static void main(String[]args){
ArrayList<Integer> arr = new ArrayList<Integer>();
arr.add(7);
arr.add(10);
arr.add(12);
arr.add(6);
arr.add(4);
arr.add(20);
NextElement array = new NextElement();
array.nextGreaterElement(arr);

}
}
{%endhighlight%}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->


