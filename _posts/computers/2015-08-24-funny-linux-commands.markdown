---
layout: page-fullwidth
title: "Funny Linux Commands"
subheadline: Technology
date: 2015-08-24T02:52:58+05:30
categories: [blog,computers,linux]
teaser: Interesting linux commands
breadcrumb: true
share: true
comments: true
tawkto: true
header:
   image:  "roopkund_homepage.jpg"
   pattern:  "pattern_concrete.jpg"
   caption:
   caption_url:
breadcrumb: true
author: bhuvan    
---

Bring your linux shell to life.

## cowsay
{% highlight bash %}

$cowsay "You are cool"


$cowsay -f sheep “I too love linux”
 ____________________
< “I too love linux” >
 --------------------
  \
   \
       __
      UooU\.'@@@@@@`.
      \__/(@@@@@@@@@@)
           (@@@@@@@@)
           `YY~~~~YY'
            ||    ||

$$ cowsay -f ghostbusters Who you Gonna Call
 ____________________
< Who you Gonna Call >
 --------------------
          \
           \
            \          __---__
                    _-       /--______
               __--( /     \ )XXXXXXXXXXX\v.
             .-XXX(   O   O  )XXXXXXXXXXXXXXX-
            /XXX(       U     )        XXXXXXX\
          /XXXXX(              )--_  XXXXXXXXXXX\
         /XXXXX/ (      O     )   XXXXXX   \XXXXX\
         XXXXX/   /            XXXXXX   \__ \XXXXX
         XXXXXX__/          XXXXXX         \__---->
 ---___  XXX__/          XXXXXX      \__         /
   \-  --__/   ___/\  XXXXXX            /  ___--/=
    \-\    ___/    XXXXXX              '--- XXXXXX
       \-\/XXX\ XXXXXX                      /XXXXX
         \XXXXXXXXX   \                    /XXXXX/
          \XXXXXX      >                 _/XXXXX/
            \XXXXX--__/              __-- XXXX/
             -XXXXXXXX---------------  XXXXXX-
                \XXXXXXXXXXXXXXXXXXXXXXXXXX/
                  ""VXXXXXXXXXXXXXXXXXXV""

To list all the possible animals that we can give as a parameter to cowsay:
$cowsay -l
Cow files in /usr/share/cowsay/cows:
apt beavis.zen bong bud-frogs bunny calvin cheese cock cower daemon default
dragon dragon-and-cow duck elephant elephant-in-snake eyes flaming-sheep
ghostbusters gnu head-in hellokitty kiss kitty koala kosh luke-koala
mech-and-cow meow milk moofasa moose mutilated pony pony-smaller ren sheep
skeleton snowman sodomized-sheep stegosaurus stimpy suse three-eyes turkey
turtle tux unipony unipony-smaller vader vader-koala www

all the above animals can be used instead of cow
{% endhighlight %}

##cowthink
{% highlight bash %}

$cowthink "Honey Singh is amazing"

{% endhighlight %}

##fortune -s
{% highlight bash %}

$fortune -s

{% endhighlight %}

##sl - Moving Rail Engine - sl aims to correct users who enter 'sl' instead of 'ls'
{% highlight bash %}

$sl

$sl -F "It can Fly"

$sl -l "Little Locomotive"

{% endhighlight %}

##figlet - prints the characters in ascii
{% highlight bash %}

$figlet bhuvan
 _     _
| |__ | |__  _   ___   ____ _ _ __
| '_ \| '_ \| | | \ \ / / _` | '_ \
| |_) | | | | |_| |\ V / (_| | | | |
|_.__/|_| |_|\__,_| \_/ \__,_|_| |_|


{% endhighlight %}
##toilet  - similar to figlet but inserts characters instead of lines
{% highlight bash %}

$toilet bhuvan

 #      #
 #mmm   # mm   m   m  m   m   mmm   m mm
 #" "#  #"  #  #   #  "m m"  "   #  #"  #
 #   #  #   #  #   #   #m#   m"""#  #   #
 ##m#"  #   #  "mm"#    #    "mm"#  #   #

$toilet -f mono12 -F metal Bhuvan is Awesome

{% endhighlight %}

## Matrix Animation
{% highlight bash %}

$cmatrix

{% endhighlight %}

##oneko - runs a cat/mouse across the screen
{% highlight bash %}

$oneko

$oneko -bg green

$oneko -dog

$onkeo -bg green -dog

{% endhighlight %}

$ Want to watch a star wars movie?
{% highlight bash %}

$telnet towel.blinkenlights.nl

to get out of telnet shell press -> ctr + ] -> press enter -> type quit

{% endhighlight %}

##xcowsay
{% highlight bash %}

$xcowsay "snapdeal rocks"

{% endhighlight %}

## Fork bomb
{% highlight bash %}

$:(){ :|:& }:

{% endhighlight %}

##pv - outputs a text like in movies
{% highlight bash %}

$echo "I Love Linux" | pv -qL 10

{% endhighlight %}

##rig command - generates new address when invoked
{% highlight bash %}

$rig

{% endhighlight %}