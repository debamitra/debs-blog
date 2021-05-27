---
title: The Story of a Rejected Promise (As a Javascript Programmer)
date: "2021-05-20T19:40:03.284Z"
description: Promises, promises everywhere, not even one resolved!
tags: ["javascript", "promises", "tech"]
---


>Stop waiting, start doing!

>-Unknown


Javascript is inherently synchronous, i.e. it runs only one line of code at a time and in a sequential manner. This means if a task has a long wait-time, e.g making a network call and then waiting for the call to return a response, it can block the whole program for a while. Also while waiting, no other task can run, which is very inefficient.

Asynchronicity is when multiple tasks can be dome simulteneously, for instance, while the the program waits for the response of a network call, it can do some other task like display some graphics or compute some numbers or something else. This is made possible through **asynchronous programming**.

One of the ways to achieve this is via **Callbacks**. A function with a slow task, is passed an extra argument, a callback function. Once this slow function is called it starts its task and when it finishes, the callback function is called inside it.

###Callbacks
![Callback](./callback1.jpg)



```javascript
function doHomework( questions, chocolate, eatChocolate ) {
 //do homework stuff
 .
 .
 eatChocolate(chocolate); 
}
doHomework(questions, chocolate, eatChocolate);
```

###Problem with Callbacks? - Callback Hell 

![Too many nested Callbacks](./callback2.jpg)

```javascript
doHomework(questions, function(){
	eatChocolate(chocolate, function(){
		washHands(soap, function(){
			play();
		});
	});
});
```
Above example has only three nested functions but the indented nesting can go on and on resulting in difficult to read code.

To resolve this problem we have **Promises**.

###Promise

A promise is a simple javascript object with mutable state i.e the value it holds changes. When a promise is first created, its state is `pending` and the value it holds is _undefined_ . Later when the promise resolves to a value or gets rejected and returns, the handler passed to `.then()` gets executed with this resolved value or rejected error as the case may be.   

![Promises, promises](./promise2.jpg)

On executing above program, when the interpreter reaches this line `checkForExtraPen().then` it executes the following steps - 
-  it puts the  HANDLER we passed into .then() , in the MICROTASK QUEUE.

-  it executes the EXECUTOR FUNCTION [that we passed to new Promise()].

-  executor function then calls reject() and populates promise object with information passed to the reject call ie. "Oops Sorry!"

-  interpreter goes to next line and prints "..other work"

-  it then takes out the HANDLER from microtask queue and executes it

-  the `value` passed to the handler is information returned from resolve(). In our case it is _undefined_. We get `error` because our promise was rejected, which is printed out "Oops Sorry!"


And this concludes our Promise story.

----


I am currently looking for work in the Javascript domain, if you know of any remote openings in an innovative company with a healthy employee culture , please do share, I can be reached at <debamitra.mukherjee@gmail.com> , or connect with me on [twitter]( https://twitter.com/debamitra_) / [linkedin](https://www.linkedin.com/in/debamitramukherjee/) 

Thanks for reading, hope you enjoyed it. 




