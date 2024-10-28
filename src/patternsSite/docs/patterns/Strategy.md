---
id: Strategy
title: Strategy
tags:
  - Strategy
  - https://github.com/ignatandrei/patterns

  - behavioral

  -  design pattern

  - Strategy
---

# Pattern:  Strategy

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Strategy

<!-- id : 11 -->
Strategy pattern allows a client to choose from a family of algorithms at runtime.    <br />
It is used when the client expects to have multiple algorithms and wants to choose one of them at runtime.    <br />

## Purpose of .NET implementation

You want to have a function that sort objects based on a specific criteria.    <br />
You want to let the developer to provide the sort criteria.    <br />
You want also  allow the sorting behavior (the strategy) to be selected at runtime.    <br />
You can use the Strategy pattern to let developer define the sorting criteria and the strategy to be used at runtime.    <br />

## Example in .NET : 


###  Strategy
```csharp showLineNumbers title="Strategy example for Pattern Strategy"
using System;
using System.Collections.Generic;

namespace Strategy;
internal class StrategyDemo
{
    public static void SortWithDifferentStrategies()
    {
        List<int> al = new ();
        al.Add(102);
        al.Add(201);
        // Strategy 1: Sorts the list in ascending order.
        al.Sort((x, y) => x.CompareTo(y));

        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }

        Console.WriteLine("---------------");

        // Strategy 2: Sorts the list in descending order.
        al.Sort((y, x) => x.CompareTo(y));
        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }
        Console.WriteLine("---------------");
        // Strategy 3: Sorts the list based on the last digit of each number.
        al.Sort((x, y) => LastDigit(x).CompareTo(LastDigit(y)));
        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }

        var array = al.FindAll(it => it > 10);


    }

    static int LastDigit(int x)
    {
        return x % 10;
    }

}


```

<!-- delete start -->
[Download source](/zipSourceCodes/strategy.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of Strategy


[SourceCode Array.Sort](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Array.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Array.cs


## Learn More


[C2Wiki](https://wiki.c2.com/?StrategyPattern) : https://wiki.c2.com/?StrategyPattern   

[dofactory](http://www.dofactory.com/net/strategy-design-pattern) : http://www.dofactory.com/net/strategy-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-strategy) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-strategy   

[Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern) : https://en.wikipedia.org/wiki/Strategy_pattern   


## Homework


Image you want to serialize classes to XML,JSON and CSV.    <br />
Implement a strategy that will allow you to choose between XML , JSON and CSV serialization at runtime.    <br />


