---
layout: page
title: "Spring Framework - Why?"
date: 2015-08-01T02:52:58+05:30
categories: [Blog,Computers, Java, Technology]
tags: [Java, Languages, Web Framework ]
summary: Solution for creating decoupled applications for web
description: Solution for creating decoupled applications for web
share:  true
comments:   true
featured: true
tawkto: true

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

## Why Spring ?


Spring is used to efficiently and effortlessly wire all the components of a large application.
This basically provides a framework for decoupling the application using dependency injection design pattern .

Consider a scenario where you only have to worry about making your object work as it is supposed to and leave the dependencies it requires to actually be provided by some one else. This some one is exactly what spring is !

Example:
Suppose you need to render a view with a list of listeners:


{% highlight java%}
public interface Listener{
public List<Users> showUsers();
}
{%endhighlight%}

2.You'd write an api to fetch the users from DB :

{% highlight java%}
public List<Users> ListFromDb implements Listener{
public List<Users> showUsers(){
//write the DB access code here.
}
{%endhighlight%}

3.Render the view:
{% highlight java%}
public class viewClass{
               private Listener newListener;

               public void render(){
               newListener = new ListFromDb();
               List<Users> list = listener.showUsers();
               view.render(list);
               }
               }
{%endhighlight%}

Suppose, you are changing the business logic and now you want to fetch the list of users from a common seperated file instead of fetching it from the db. Now,lets look at the changes we need to make.

We'll have an api which'll break down the comma seperated file to return a list. Let's say this api is implemented in ListFromFile class.
To render this list in the view, we'll have to create an instance of the class ListFromFile instead of ListFromDb.

{% highlight java%}
public class viewClass{
               private Listener newListener;
               public void render(){
               newListener = new ListFromFile();
               List<Users> list = newListener.showUsers();
               view.render(list);
               }
               }
{%endhighlight%}


This is a very simple scenario with a minor change. Consider a large tightly coupled project where you'll have to change every implementation of logic for a minor change in business.
Very tedious indeed.

If only there was a way in which the injection of implementations of Listeners was taken care of and addrdfrrll we'd have to do is render the implementation to the view right ?
Well, there is .

In spring,this is how it works.
Create a setter method for the Listener class in an xml file and specify the dependencies of viewObject in it. Simple.
{% highlight java%}
<html>
    <head>
        <title><bean id="newListner" class="ListFromDb" />

               <bean class="viewObject">
                   <property name="newListner" ref="userListner" />
               </bean></title>
    </head>
    <body></body>
</html>
{%endhighlight%}


Now, when you write this :
{% highlight java%}
List<Users> list = listener.showUsers();
the listener object is automatically created without instantiating it using
newListener = new ListFromDb();
{%endhighlight%}


If you want to change the logic to fetch it from the comma seperated file, all you have to do is make changes in the xml to create a setter method for the changed class.

This injection of objects in spring is what makes it flexible to manage large applications .
This is termed generically as Dependency Injection.
## How does Spring work ?

Spring is a "Inversion of control" container for java platform.Although it does not impose any specific programming model, it has been widely accepted in the java community as an alternative to Enterprise Java Beans(EJB) model.</br>
Spring containers are at the core of spring,they are used to create objects, wire them and manage their entire lifecycle till destruction.
The Spring container uses dependency injection (DI) to manage the components that make up an application. These objects are called Spring Beans.
The spring container configures and initializes the objects based on the meta data.
This meta data is provided as either an xml file or annotations.

<ul class="clearing-thumbs small-block-grid-3" data-clearing>
<li><a href="{{ site.url }}/images/posts/spring/spring_ioc_container.jpg"><img data-caption="The Spring IOC Container" class="th" src="{{ site.url }}/images/posts/spring/spring_ioc_container.jpg"></a></li>
</ul>

## Spring Containers :
Spring provides 2 distinct types of containers :

1.Bean factory : This is a light weight container which basically provides functionality of DI.
2.Application Context : This is the most widely used container and has all the functionalities of bean container which is why this is recommended over bean factory.This also provides functions like providing textual messages from a properties file and the ability to publish application events to interested event listeners.This container is defined in org.springframework.context.ApplicationContext interface.

## What exactly are spring beans ?
Spring beans are the plain java objects intialized and managed by Spring containers.Spring gets the information about the beans , i.e the class they belong to ,their name, scope, properties,initialization etc in the form of metadata as annotations or xml files. Xml files are now not used as widely as annotations.

## Spring Bean Scopes :

The scope of the object defined in the metadata, defines the lifecycle of an object .
The different bean scopes are :
Singleton : This scope creates one and only one instance of the object initialized according to the bean definitions provided.

Prototype : This scope creates a new instance each time a request is made for the object.As a rule of thumb, use singleton scope for stateless beans which would not require the server to hold the session information and prototype scope for statefull beans which would not require the server to store the session information
Apart from these, there are request, session and global session scopes which would store the beans till the request,session,global session respectively ends.

## Similar Posts
{: .t60 }
{% include list-posts tag='Languages' %}