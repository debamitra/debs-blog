---
title: A project-based learning attempt at Go, Part-1
date: "2020-08-18T22:40:32.169Z"
description: Learning a new pogramming language(Go) for fun and non-profit..
tags: ["ramblings","go","golang"]
---

Go is an open-source general-purpose programming language created by some Google folks sometime in the late 2000s. Okay, I think this introduction is vague enough to be sightly annoying and yet, good enough by my standards, now onwards with the planning of the itinerary.

A person on discord says to me, "Tour of Go" is the first step to enlightenment, so of course I went and completed that one first. It was tedious in parts, adapting and learning new syntax but I finally hopped, skipped and jumped my way through it.

1. [Tour of Go](https://tour.golang.org/welcome/1) -
	Gained very basic familiarity with the syntax of Go, played around with Go code examples. Learnt basic concepts and implementations like maps and slices , pointers and interfaces,functions,closures and structs, goroutines and channels.

2.  Concurrency (Go) - Went through [this](https://www.youtube.com/watch?v=gA4YXUJX7t8) video to learn about concurrency concepts.

3.  Developer Envionment Setup - Downloaded and installed go from their [website](https://golang.org/). Set up the IDE (I am using [VS Code](https://vscode.rocks/) ). Then installed Go extension for VS Code etc etc.

4.  [Structuring Go apps](https://www.youtube.com/watch?v=Qtk9FFOoT5M) - This very useful talk covered the following principles and guidelines for structuring a Go app, generally speaking.  
	- A flat structure is what you can kind of default to in the beginning.
	- Next we can try to break it up into [packages](https://www.callicoder.com/golang-packages/#:~:text=Go%20Package,following%20syntax%20%2D%20package)  this is called a layered architecture -> UI, Business logic, dependencies. But this has some problems.How do we share data between packages? Naming is difficult again. Circular dependencies happen, difficult to track.
	- Lets try breaking up into modules 
	- Lets try grouping  by context (Domain driven Design) 
	- Hexagonal Architecture - Enables you to change a part of the application without changing everything else
	- Ends with proposing that trying to design the project structure using either Domain-Driven-Design or Hexagonal architechture might be a good way to go. 

5. Follow the **Go** people on Twitter.(Important step)

6. [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/) - Learning through Test Driven development(TDD) is a great way to incorporate good coding practices early on. This is a terrific hands-on resource that I am currently going through. TDD is a good process for writing bug-free,high quality, maintainable, readable, and easy to refactor code in the long run.

7.  My next step is to build my first small project which is basically going to be a clone of https://news.ycombinator.com

And, here's a quote to make this post look prettier than it actually is

> “Because it's not perfect, let's not bother."
> That's crazy! Even if we take three steps forward and two and a half back it's still going
half a foot forward.”
