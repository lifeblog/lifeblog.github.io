---
tawkto: true
layout: page-fullwidth
title: Coin Change Problem(DP)
subheadline: "Given an array of coin denominations and a final amount, find the number of ways this can be done in."

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
This problem can be solved using dynamic programming.
There are 2 scenarios with every denomination, either you include it in your result or you dont.
So, change(s[] , m , n ) = change(s[], m, n-s[m]) + change(s[] , m-1, n)

Here is the code:
{% highlight java%}
public class CoinChange {
static int findCoinChange(int[]S ,int m,int n){
int[][] dp = new int[n+1][m];
int x ,y;
for(int i =0;i<m;i++){
dp[0][i] =1;
}
for(int i=1 ; i<=n ;i++){
for(int j=0;j <m; j++){
if(i-S[j] >=0 )
x = dp[i-S[j]][j];
else
x=0;
if(j > 0)
y = dp[i][j-1];
else
y = 0;
dp[i][j] = x+y;

}
}
return dp[n][m-1];
}
public static void main(String[] args){

int arr[] = {1, 2, 3};
int m = 3;
System.out.println(findCoinChange(arr, m, 4));

}
}
{%endhighlight%}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->


