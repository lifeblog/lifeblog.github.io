---
tawkto: true
layout: page-fullwidth
title: Least Common Ancestor
subheadline: "Find the LCA of two given numbers."

header: no

categories:
    - technology
    - dsa
tags:
    - technology
    - dsa
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


LCA of 2 numbers in a BST is a number which is less than one and greater than the other. So simply perform this check until you find it.
The code below uses this approach :
{% highlight java%}
public class LeastCommonAncestor {
public static int findLCA(BinaryTree node, int a , int b){
if(node == null){
return 0;
}
if((a<node.data && b > node.data) || (a>node.data && b <node.data)){
return node.data;
}
else {
if(a > node.data && b > node.data)
findLCA(node.right ,a ,b);
else
findLCA(node.left , a,b);
}
return 0;
}
public static void main(String [] args){
BinaryTree node = new BinaryTree(10);
node.left = new BinaryTree(8);
node.right = new BinaryTree(20);
node.left.left = new BinaryTree(6);
node.left.right = new BinaryTree(9);
node.right.left = new BinaryTree(11);
node.right.right = new BinaryTree(22);
int LCA = findLCA(node,9,22);
System.out.println(LCA);
}}
class BinaryTree{
int data;
BinaryTree left;
BinaryTree right;
BinaryTree(int data){
this.data = data;
}
}
{%endhighlight%}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->


